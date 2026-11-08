const stage = document.getElementById('stage');

function place(el, r){
	el.style.left = r.x + 'px';
	el.style.top = r.y + 'px';
	el.style.width = r.w + 'px';
	el.style.height = r.h + 'px';
}

const state = {view: 'start', languageId: null, topicId: null, itemIndex: null, catalogMin: true};

const boxes = {};

const views = {};

// Where the user has dragged / resized a window to. Kept here so it survives every re-render.
// Keys look like "lesson|win-test": the same window can have a different place on each screen.
const userRects = {};
const winZ = {};
let zTop = 10;

function computeLayout(){
	return views[state.view]();
}

/* ---------- data: levels -> one flat lesson list per language ---------- */

function prepareData(){
	DATA.languages.forEach(lang => {
		if (!lang.levels) lang.levels = [{id: 'lessons', name: 'Lessons', blurb: '', lessons: lang.lessons || []}];
		lang.lessons = [];
		lang.levels.forEach(level => {
			level.flat = [];                          // lessons and their branches, in reading order
			const add = (lesson, parent, label) => {
				lesson.lang = lang;
				lesson.level = level;
				lesson.parent = parent;
				lesson.label = label;
				lesson.idx = lang.lessons.length;
				lang.lessons.push(lesson);
				level.flat.push(lesson);
			};
			level.lessons.forEach((lesson, i) => {
				add(lesson, null, String(i + 1));
				(lesson.branches || []).forEach((br, k) => add(br, lesson, (i + 1) + String.fromCharCode(97 + k)));
			});
		});
	});
}
const langById = id => DATA.languages.find(l => l.id === id);

/* ---------- checklist, saved in a cookie ---------- */

const COOKIE = 'codeSiteDone';
const Progress = {
	done: new Set(),
	load(){
		let raw = null;
		try {
			const c = document.cookie.split('; ').find(c => c.startsWith(COOKIE + '='));
			if (c) raw = decodeURIComponent(c.slice(COOKIE.length + 1));
		} catch (e) {}
		if (raw === null) { try { raw = localStorage.getItem(COOKIE); } catch (e) {} }   // only when cookies are unavailable
		this.done = new Set(raw ? raw.split(',').filter(id => id && !id.startsWith('lang:')) : []);   // only lessons are stored
	},
	save(){
		const raw = [...this.done].join(',');
		try { document.cookie = COOKIE + '=' + encodeURIComponent(raw) + '; max-age=31536000; path=/; SameSite=Lax'; } catch (e) {}
		let stored = false;
		try { stored = document.cookie.split('; ').some(c => c.startsWith(COOKIE + '=')); } catch (e) {}
		// Browsers ignore cookies on pages opened straight from a file, so keep a backup in that case only
		try { if (!stored) localStorage.setItem(COOKIE, raw); } catch (e) {}
	},
	has(id){ return this.done.has(id); },
	set(id, on){ this.setMany([id], on); },
	setMany(ids, on){ ids.forEach(id => on ? this.done.add(id) : this.done.delete(id)); this.save(); }
};

// A tick box id is a lesson id, or "level:<lang>:<level>" / "lang:<lang>" for a box that stands for a group of lessons.
function lessonsOf(scope){
	const p = scope.split(':');
	const lang = langById(p[1]);
	return p[0] === 'level' ? lang.levels.find(v => v.id === p[2]).flat : lang.lessons;
}
const isGroup = id => id.startsWith('lang:') || id.startsWith('level:');
function counts(scope){
	const list = lessonsOf(scope);
	return {done: list.filter(l => Progress.has(l.id)).length, total: list.length};
}

// makes every checkbox, counter and bar inside `root` match the saved checklist
function syncProgress(root){
	root.querySelectorAll('[data-check]').forEach(cb => {
		const id = cb.dataset.check;
		if (isGroup(id)) {                           // ticked when every lesson inside is done, a dash when only some are
			const c = counts(id);
			cb.checked = c.total > 0 && c.done === c.total;
			cb.indeterminate = c.done > 0 && c.done < c.total;
		} else {
			cb.checked = Progress.has(id);
		}
		const row = cb.closest('.row');
		if (row) row.classList.toggle('done', cb.checked);
	});
	root.querySelectorAll('[data-progress]').forEach(n => {
		const c = counts(n.dataset.progress);
		n.textContent = c.done + ' / ' + c.total;
	});
	root.querySelectorAll('[data-bar]').forEach(n => {
		const c = counts(n.dataset.bar);
		n.style.width = (c.total ? c.done / c.total * 100 : 0) + '%';
	});
}

function onCheck(cb){
	const id = cb.dataset.check;
	if (isGroup(id)) Progress.setMany(lessonsOf(id).map(l => l.id), cb.checked);   // ticks or clears every lesson in the group
	else Progress.set(id, cb.checked);
	render();
}

/* ---------- code windows ---------- */

function esc(t){
	return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Runs the learner's code inside a sandboxed iframe, so it cannot touch the rest of the page.
// html = shown as written, css = applied to the lesson's demo markup, js = run and console.log is printed.
function runPreview(frame, type, code, lesson, html){
	let doc;
	const demo = html != null ? html : (lesson.demo || '');
	if (type === 'css') {
		doc = '<meta charset="utf-8"><style>body{font-family:sans-serif;padding:8px}</style><style>' + code + '</style>' +
		      (html != null || lesson.demo ? demo : '<h1>Heading</h1><p>A paragraph of text.</p>');
	} else if (type === 'js') {
		doc = '<meta charset="utf-8"><pre id="out" style="font:13px/1.4 monospace;margin:0;padding:8px"></pre>' + demo + '<script>' +
		      'const out=document.getElementById("out");' +
		      'const show=(...a)=>{out.textContent+=a.map(x=>typeof x==="object"?JSON.stringify(x):String(x)).join(" ")+"\\n"};' +
		      'console.log=show;window.onerror=m=>{show("Error: "+m)};' +
		      'try{\n' + code.replace(/<\/script/gi, '<\\/script') + '\n}catch(e){show("Error: "+e.message)}' +
		      '<\/script>';
	} else {
		doc = '<meta charset="utf-8">' + code;
	}
	frame.srcdoc = doc;
}

// lays a one-line demo page out over several lines, so students can read it
function prettyHTML(src){
	src = String(src).trim();
	if (src.includes('\n')) return src;
	const VOID = /^(br|hr|img|input|meta|link|source)$/i;
	let depth = 0;
	return src.replace(/>\s*</g, '>\n<').split('\n').map(line => {
		line = line.trim();
		if (/^<\//.test(line)) depth = Math.max(0, depth - 1);
		const out = '  '.repeat(depth) + line;
		const m = line.match(/^<([a-z][a-z0-9]*)\b[^>]*>/i);
		if (m && !/\/>$/.test(m[0]) && !VOID.test(m[1]) && !new RegExp('</' + m[1] + '>\\s*$', 'i').test(line)) depth++;
		return out;
	}).join('\n');
}

// the tags, classes and ids found in a piece of HTML (what a CSS rule or a script can point at)
function demoInfo(html){
	const doc = new DOMParser().parseFromString(html, 'text/html');
	const tags = [], classes = [], ids = [];
	doc.body.querySelectorAll('*').forEach(el => {
		const t = el.tagName.toLowerCase();
		if (t === 'style' || t === 'script') return;
		if (!tags.includes(t)) tags.push(t);
		el.classList.forEach(c => { if (!classes.includes(c)) classes.push(c); });
		if (el.id && !ids.includes(el.id)) ids.push(el.id);
	});
	const list = (a, p) => a.length ? a.map(x => '<code>' + p + esc(x) + '</code>').join(' ') : '<i>none</i>';
	return '<span>Tags: ' + list(tags, '') + '</span><span>Classes: ' + list(classes, '.') + '</span><span>Ids: ' + list(ids, '#') + '</span>';
}
// marks every class="..." and id="..." in already-escaped HTML
const highlightAttrs = h => h.replace(/(\s)((?:class|id)="[^"]*")/g, '$1<mark class="hl">$2</mark>');

// width of a small tab that fits just its title (same font as the title bar)
const measureCtx = document.createElement('canvas').getContext('2d');
function fitW(text){
	measureCtx.font = 'bold 12.8px serif';
	return Math.ceil(measureCtx.measureText(text).width) + 30;
}

/* ---------- navigation ---------- */

function setView(view){
	state.view = view;
	if (view === 'start') { state.languageId = null; state.itemIndex = null; }
	render();
}

function chooseLanguage(id){
	state.languageId = id;
	state.itemIndex = null;
	render();
	stage.scrollTo({top: 0});
}

function openLesson(i, keepCatalog){
	state.itemIndex = i;
	if (!keepCatalog) state.catalogMin = true;      // choosing a lesson starts with the list minimized, for more room
	render();
	stage.scrollTo({top: 0});
}

function backToLanguages(){
	chooseLanguage(null);
}

/* ---------- small html helpers ---------- */

// one checklist row: tick box + a button that opens the lesson (a branch is indented under its lesson)
function rowHTML(lesson){
	return '<div class="row' + (lesson.parent ? ' branch' : '') + '" data-row="' + lesson.idx + '">' +
	       '<input type="checkbox" data-check="' + lesson.id + '" aria-label="Mark &quot;' + esc(lesson.title) + '&quot; as done">' +
	       '<button type="button" class="row-title" data-open="' + lesson.idx + '"><span class="cat-num">' + lesson.label + '</span>' + esc(lesson.title) + '</button></div>';
}
const levelRows = level => level.flat.map(rowHTML).join('');
const bar = scope => '<div class="bar"><i data-bar="' + scope + '"></i></div>';

// highlights the open lesson in a list
function markCurrent(el){
	el.querySelectorAll('.row').forEach(r => r.classList.toggle('current', state.itemIndex !== null && +r.dataset.row === state.itemIndex));
}

/* ---------- views: each one returns the list of windows to show ---------- */

views.start = function () {
	const size = 240;
	return [{
		id: 'root', kind: 'card', color: '#5B6B82', z: 2,
		x: (stage.clientWidth - size) / 2,
		y: (stage.clientHeight - size) / 2,
		w: size, h: size,
		key: 'root-start',
		title: 'Coding Languages',
		html: '<div class="box-label">Start learning</div><div class="box-hint">Click to open</div>',
		onClick: () => setView('languages')
	}];
};

views.languages = function () {
	const langs = DATA.languages;
	const sw = stage.clientWidth, cx = sw / 2;
	const gap = 24;

	/* ----- nothing chosen yet: centre window on top, the languages in a row below ----- */
	if (state.languageId === null) {
		const phone = sw < 640;                      // on a phone the languages stack in one column
		const rootW = phone ? sw - 24 : 240, rootH = phone ? 116 : 110, top = phone ? 12 : 30, h = phone ? 170 : 190;
		const w = phone ? sw - 24 : Math.max(130, Math.min(200, (sw - 40 - gap * (langs.length - 1)) / langs.length));
		const x0 = cx - (w * langs.length + gap * (langs.length - 1)) / 2;

		const root = {
			id: 'root', kind: 'card', color: '#5B6B82', z: 3,
			x: cx - rootW / 2, y: top, w: rootW, h: rootH,
			key: 'root-open',
			title: 'Coding Languages',
			html: '<div class="box-label">Choose a language</div><div class="box-hint">Click to close</div>',
			onClick: () => setView('start')
		};

		const cards = langs.map((lang, i) => ({
			id: 'lang-' + lang.id, kind: 'card', color: lang.color, z: 2,
			x: phone ? 12 : x0 + i * (w + gap), y: phone ? top + rootH + 14 + i * (h + 14) : top + rootH + 50, w, h,
			from: {x: cx - w / 2, y: top + 20},     // start tucked behind the centre window, then drop down
			delay: 80 + i * 90,                      // stagger so they drop one after another
			key: 'lang-' + lang.id,
			title: lang.name,
			html: '<div class="box-sub">' + lang.blurb + '</div>' +
			      '<div class="box-hint"><span data-progress="lang:' + lang.id + '"></span> lessons done</div>' + bar('lang:' + lang.id) +
			      '<label class="chk"><input type="checkbox" data-check="lang:' + lang.id + '"> Finished</label>',
			onClick: () => chooseLanguage(lang.id)
		}));

		return [root, ...cards];
	}

	const lang = langs.find(l => l.id === state.languageId);

	/* ----- a lesson is chosen: it takes over, and the other lessons collapse into the catalogue ----- */
	if (state.itemIndex !== null && lang.lessons[state.itemIndex]) return lessonView(lang);

	/* ----- a language is chosen: it and its three levels sit in a column on the left; the rest become small tabs bottom-left ----- */
	const narrow = sw < 640;
	const pad = 12, colW = narrow ? sw - 2 * pad : 260;
	const specs = [];
	const mainY = pad, mainH = narrow ? 158 : 118;

	specs.push({
		id: 'lang-' + lang.id, kind: 'card', color: lang.color, z: 2,
		x: pad, y: mainY, w: colW, h: mainH,
		selected: true,
		key: 'lang-' + lang.id + '-main',
		title: lang.name,
		html: '<div class="box-hint"><span data-progress="lang:' + lang.id + '"></span> lessons done</div>' + bar('lang:' + lang.id) +
		      '<label class="chk" title="Ticks or clears every lesson in ' + lang.name + '"><input type="checkbox" data-check="lang:' + lang.id + '"> All ' + lang.name + ' done</label>' +
		      '<div class="box-hint">Click here to change language</div>',
		onClick: () => chooseLanguage(null)
	});

	const pillH = 28, pillGap = 6;
	const roadH = narrow ? 240 : 0;                  // on a phone the roadmap sits between the language and its levels
	const y0 = mainY + mainH + 12 + (narrow ? roadH + 12 : 0);
	const levelGap = 12;
	const bottom = stage.clientHeight - pad - pillH - 10;
	const lhWide = Math.max(150, Math.floor((bottom - y0 - levelGap * (lang.levels.length - 1)) / lang.levels.length));
	let y = y0;
	lang.levels.forEach((level, i) => {
		const lh = narrow ? 120 + level.flat.length * 50 : lhWide;
		specs.push({
			id: 'level-' + lang.id + '-' + level.id, kind: 'list', color: lang.color, z: 1,
			x: pad, y, w: colW, h: lh,
			from: {x: pad, y: mainY + 10},           // starts tucked behind the language window, then drops down
			delay: 60 + i * 120,
			key: 'level-' + lang.id + '-' + level.id,
			title: level.name,
			actions: '<label class="chk" title="Tick or untick every lesson in this level"><input type="checkbox" data-check="level:' + lang.id + ':' + level.id + '"> All</label>' +
			         '<span class="count" data-progress="level:' + lang.id + ':' + level.id + '"></span>',
			html: (level.blurb ? '<div class="level-blurb">' + esc(level.blurb) + '</div>' : '') + levelRows(level),
			onUpdate: markCurrent
		});
		y += lh + levelGap;
	});

	// everything else: small windows that are only as wide as their title, tucked in the bottom-left corner
	const pillY = narrow ? y + 4 : Math.max(stage.clientHeight - pad - pillH, y + 6);   // bottom of the screen, but never on top of the lists
	let px = pad;
	const pill = (id, color, text, key, onClick) => {
		const w = fitW(text);
		specs.push({id, kind: 'mini', color, z: 3, x: px, y: pillY, w, h: pillH, key, title: text, onClick});
		px += w + pillGap;
	};
	pill('root', '#5B6B82', 'Coding Languages', 'root-mini', () => setView('start'));
	langs.filter(l => l !== lang).forEach(other =>
		pill('lang-' + other.id, other.color, other.name, 'lang-' + other.id + '-mini', () => chooseLanguage(other.id)));

	{
		const hx = pad + colW + 24;
		const rx = narrow ? pad : hx, ry = narrow ? mainY + mainH + 12 : pad, rw = narrow ? colW : sw - hx - pad, rh = narrow ? roadH : 240;
		specs.push({
			id: 'lesson-view', kind: 'panel', color: lang.color, z: 0,
			x: rx, y: ry, w: rw, h: rh,
			from: {x: rx, y: ry - 20}, delay: 150,
			key: 'roadmap-' + lang.id,
			title: lang.name + ' roadmap',
			html: '<p>' + lang.blurb + '. Work through the levels from top to bottom and tick each lesson when you finish it. ' +
			      'Your checklist is saved in this browser.</p><ul class="levels">' +
			      lang.levels.map(v => '<li><b>' + esc(v.name) + '</b> (' + v.flat.length + ') &mdash; ' + esc(v.blurb) + '</li>').join('') +
			      '</ul><button type="button" class="go" data-open="0"></button>',
			onUpdate: el => {                                  // the button picks up where you left off
				const next = lang.lessons.find(l => !Progress.has(l.id));
				const target = next || lang.lessons[0];
				const b = el.querySelector('.go');
				b.dataset.open = target.idx;
				b.textContent = (next ? (Progress.has(lang.lessons[0].id) ? 'Continue: ' : 'Start: ') : 'Review: ') + target.title + ' →';
			}
		});
	}
	return specs;
};

// "This topic: [4 Numbers] [4a Operators] ..." chips that move between a lesson and its branches
function branchNav(lesson){
	const main = lesson.parent || lesson;
	if (!main.branches || !main.branches.length) return '';
	const chip = l => '<button type="button" class="chip' + (l === lesson ? ' current' : '') + '" data-open-keep="' + l.idx + '">' +
	                  '<b>' + l.label + '</b> ' + esc(l.title) + '</button>';
	return '<div class="branch-nav"><span class="branch-label">' + (lesson.parent ? 'This topic:' : 'Go deeper:') + '</span>' +
	       [main, ...main.branches].map(chip).join('') + '</div>';
}

// roughly how tall the lesson text needs to be, so nothing has to scroll inside the window
function textHeight(lesson, w, hasMap){
	const plain = h => h.replace(/<[^>]+>/g, '');
	const perLine = Math.max(14, Math.floor((w - 56) / 7.6));
	const lines = h => Math.max(1, Math.ceil(plain(h).length * 1.08 / perLine));
	const paras = h => h.split('</p>').filter(x => x.trim()).reduce((n, x) => n + lines(x), 0);
	const tries = (lesson.tryit || []).reduce((n, t) => n + lines(t), 0);
	const main = lesson.parent || lesson;
	const chips = main.branches && main.branches.length
	  ? 12 + Math.ceil([main, ...main.branches].reduce((n, l) => n + l.title.length + 8, 12) * 7.4 / (w - 40)) * 34 : 0;
	const total = 38 + 28 + chips + paras(lesson.content) * 24 + 10 + paras(lesson.explain || '') * 24 + 10 +
	              (hasMap ? 22 + Math.ceil(110 * 7.4 / (w - 56)) * 22 : 0) +
	              (tries ? 60 + tries * 22 + (lesson.tryit.length - 1) * 4 : 0) + 24;
	return Math.min(820, Math.max(200, Math.round(total)));
}

/* A chosen lesson: the catalogue (open at the left, or minimized to a small tab), a top bar (back / next) and the lesson content. */
function lessonView(lang){
	const sw = stage.clientWidth;
	const lesson = lang.lessons[state.itemIndex];
	const pad = 12, gap = 16, narrow = sw < 720, sideW = 240;
	const min = state.catalogMin;
	const catH = narrow ? 200 : stage.clientHeight - 2 * pad;
	const side = !min && !narrow;                           // catalogue as a column beside the lesson
	const cx0 = side ? pad + sideW + gap : pad;             // where the lesson content starts
	const cw = sw - cx0 - pad;
	const top = !min && narrow ? pad + catH + gap : pad;
	const hasNext = state.itemIndex < lang.lessons.length - 1;
	const short = cw < 480;
	const tabW = short ? 128 : 176;
	const backW = min ? (short ? 116 : 230) : Math.min(230, cw - 150 - 8);
	const backX = min ? pad + tabW + 8 : cx0;
	const nextW = min && short ? cw - tabW - backW - 16 : 150;
	const compact = min && short;                           // phone with the catalogue tab: shorter button names

	const specs = [];
	if (min) {
		specs.push({
			id: 'catalog-tab', kind: 'mini', color: lang.color, z: 4,
			x: pad, y: top, w: tabW, h: 34,
			from: {x: pad, y: top - 20},
			key: 'catalog-tab-' + lang.id,
			title: '&#9776; Lessons <span class="count" data-progress="lang:' + lang.id + '"></span>',
			onClick: () => { state.catalogMin = false; render(); }
		});
	} else {
		specs.push({
			id: 'catalog', kind: 'list', color: lang.color, z: 4,
			x: pad, y: pad, w: narrow ? sw - 2 * pad : sideW, h: catH,
			from: {x: pad - 30, y: pad},
			key: 'catalog-' + lang.id,                       // same key for every lesson, so the list keeps its scroll position
			title: lang.name + ' lessons',
			actions: '<label class="chk" title="Tick or untick every lesson in ' + lang.name + '"><input type="checkbox" data-check="lang:' + lang.id + '"> All</label>' +
			         '<span class="count" data-progress="lang:' + lang.id + '"></span>' +
			         '<button type="button" data-catalog-min title="Minimize the list for more room" aria-label="Minimize the list">&minus;</button>',
			html: lang.levels.map(level =>
			        '<div class="cat-level"><label class="chk"><input type="checkbox" data-check="level:' + lang.id + ':' + level.id + '"> ' + esc(level.name) + '</label>' +
			        '<span data-progress="level:' + lang.id + ':' + level.id + '"></span></div>' + levelRows(level)
			      ).join(''),
			onUpdate: el => {                                // highlight the open lesson and keep it in view
				markCurrent(el);
				const body = el.querySelector('.win-body');
				const cur = el.querySelector('.row.current');
				if (cur && (cur.offsetTop < body.scrollTop || cur.offsetTop + cur.offsetHeight > body.scrollTop + body.clientHeight))
					body.scrollTop = cur.offsetTop - 60;
			}
		});
	}
	specs.push({
		id: 'back', kind: 'mini', color: '#5B6B82', z: 3,
		x: backX, y: top, w: backW, h: 34,
		from: {x: backX, y: top - 20},
		key: 'back-' + (backW < 200),
		title: backW < 200 ? '&larr; Languages' : '&larr; Back to language selection',
		onClick: backToLanguages
	}, {
		id: 'next', kind: 'mini', color: lang.color, z: 3,
		x: cx0 + cw - nextW, y: top, w: nextW, h: 34,
		from: {x: cx0 + cw - nextW, y: top - 20},
		key: 'next-' + hasNext + compact,
		disabled: !hasNext,
		title: hasNext ? (compact ? 'Next &rarr;' : 'Next lesson &rarr;') : (compact ? 'Last &#10003;' : 'Last lesson &#10003;'),
		onClick: hasNext ? () => openLesson(state.itemIndex + 1, true) : undefined
	});

	const hasHtml = lang.id !== 'html' && !!lesson.demo;      // CSS and JS lessons work on a page of HTML that students can see and edit
	const demoHTML = hasHtml ? prettyHTML(lesson.demo) : '';
	const panelH = textHeight(lesson, cw, hasHtml);
	const py = top + 34 + 14;
	const titleParts = [esc(lang.name), esc(lesson.level.name)];
	if (lesson.parent) titleParts.push(esc(lesson.parent.title));
	titleParts.push(esc(lesson.title));
	specs.push({
		id: 'lesson-view', kind: 'panel', color: lang.color, z: 0,
		x: cx0, y: py, w: cw, h: panelH,
		from: {x: cx0, y: py - 30},
		key: 'view-' + lesson.id + '-' + panelH,
		title: titleParts.join(' &rsaquo; '),
		actions: '<label class="chk"><input type="checkbox" data-check="' + lesson.id + '"> Done</label>',
		html: branchNav(lesson) +
		      '<div class="lesson-intro">' + lesson.content + '</div>' +
		      (lesson.explain ? '<div class="lesson-explain">' + lesson.explain + '</div>' : '') +
		      (hasHtml ? '<div class="demo-map"><b>In the HTML you are working with</b><div class="demo-map-body">' + demoInfo(demoHTML) + '</div></div>' : '') +
		      (lesson.tryit && lesson.tryit.length ? '<div class="tryit"><b>Try it yourself in the Testing area</b><ol>' +
		        lesson.tryit.map(t => '<li>' + t + '</li>').join('') + '</ol></div>' : '')
	});

	const example = lesson.example || '';
	const starter = lesson.starter != null ? lesson.starter : example;
	const half = narrow ? cw : (cw - gap) / 2;
	const wy = py + panelH + 16;
	const wh = narrow ? (hasHtml ? 680 : 440) : Math.max(hasHtml ? 480 : 300, stage.clientHeight - wy - pad);   // use the free height
	const frame = '<iframe class="win-out" sandbox="allow-scripts" title="Result"></iframe>';
	const codeName = lang.id === 'css' ? 'CSS' : 'JavaScript';
	const htmlName = lang.id === 'css' ? 'HTML (the page being styled)' : 'HTML (the page the script works on)';

	specs.push({
		id: 'win-example', kind: 'code', color: lang.color, z: 5,
		x: cx0, y: wy, w: half, h: wh,
		from: {x: cx0, y: wy - 30}, delay: 120,
		key: 'example-' + lesson.id,
		title: 'Example',
		bodyClass: 'win-split',
		html: (hasHtml
		        ? '<div class="win-group"><div class="win-pane"><div class="win-sub">' + htmlName + '</div><pre class="win-code"><code>' + highlightAttrs(esc(demoHTML)) + '</code></pre></div>' +
		          '<div class="win-pane"><div class="win-sub">' + codeName + '</div><pre class="win-code"><code>' + esc(example) + '</code></pre></div></div>'
		        : '<div class="win-pane"><div class="win-sub">Code</div><pre class="win-code"><code>' + esc(example) + '</code></pre></div>') +
		      '<div class="win-pane"><div class="win-sub">Result</div>' + frame + '</div>',
		onMount: el => runPreview(el.querySelector('iframe'), lang.id, example, lesson, hasHtml ? demoHTML : undefined)
	});

	const tx = narrow ? cx0 : cx0 + half + gap, ty = narrow ? wy + wh + 16 : wy;
	specs.push({
		id: 'win-test', kind: 'code', color: lang.color, z: 5,
		x: tx, y: ty, w: half, h: wh,
		from: {x: tx, y: wy - 30}, delay: 220,
		key: 'test-' + lesson.id,
		title: 'Testing area',
		actions: '<button type="button" data-run>Run &#9654;</button><button type="button" data-reset>Reset</button>' +
		         '<button type="button" data-full title="Full screen (Esc to leave)"><span class="when-normal">&#9974; Full screen</span><span class="when-full">&#10005; Exit full screen</span></button>',
		bodyClass: 'win-split',
		html: (hasHtml
		        ? '<div class="win-group"><div class="win-pane"><div class="win-sub">' + htmlName + ' (editable)</div><textarea class="win-code win-edit" data-role="html" spellcheck="false" aria-label="HTML you can change"></textarea></div>' +
		          '<div class="win-pane"><div class="win-sub">Your ' + codeName + '</div><textarea class="win-code win-edit" data-role="code" spellcheck="false" aria-label="Your ' + codeName + '"></textarea></div></div>'
		        : '<div class="win-pane"><div class="win-sub">Your code</div><textarea class="win-code win-edit" data-role="code" spellcheck="false" aria-label="Your code"></textarea></div>') +
		      '<div class="win-pane"><div class="win-sub">Result</div>' + frame + '</div>',
		onMount: el => {
			const code = el.querySelector('[data-role=code]'), htmlBox = el.querySelector('[data-role=html]'), out = el.querySelector('iframe');
			const map = () => { const m = document.querySelector('[data-id="lesson-view"] .demo-map-body'); if (m && htmlBox) m.innerHTML = demoInfo(htmlBox.value); };
			const run = () => { runPreview(out, lang.id, code.value, lesson, htmlBox ? htmlBox.value : undefined); map(); };
			const fill = () => { code.value = starter; if (htmlBox) htmlBox.value = demoHTML; };
			fill();
			run();
			let timer;
			el.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(run, 400); });   // live update while typing
			el.querySelector('[data-run]').addEventListener('click', run);
			el.querySelector('[data-reset]').addEventListener('click', () => { fill(); run(); });
			el.querySelector('[data-full]').addEventListener('click', () => setFull(el, !el.classList.contains('full')));
		}
	});

	return specs;
}

/* ---------- full screen for a window ---------- */

function setFull(box, on){
	box.classList.toggle('full', on);
	if (on) {
		try { const p = box.requestFullscreen && box.requestFullscreen(); if (p && p.catch) p.catch(() => {}); } catch (e) {}
	} else if (document.fullscreenElement) {
		try { document.exitFullscreen(); } catch (e) {}
	}
}
function exitFullAll(){
	document.querySelectorAll('.box.full').forEach(b => setFull(b, false));
}
// the browser's own Esc handling leaves real full screen; keep our class in step
document.addEventListener('fullscreenchange', () => {
	if (!document.fullscreenElement) document.querySelectorAll('.box.full').forEach(b => b.classList.remove('full'));
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') exitFullAll(); });

/* ---------- render: makes the page match the list of windows ---------- */

const GRIPS = ['n', 's', 'e', 'w', 'nw', 'ne', 'sw', 'se'].map(d => '<div class="win-resize ' + d + '" data-edge="' + d + '"></div>').join('');
const KINDS = ['card', 'mini', 'panel', 'list', 'code'];

function scopeName(){
	if (state.view === 'start') return 'start';
	if (state.languageId === null) return 'pick';
	return state.itemIndex === null ? 'lang' : 'lesson';
}
const rk = id => scopeName() + '|' + id;

function windowHTML(spec){
	const mini = spec.kind.split(' ').includes('mini');
	return '<div class="win-title"><span class="win-name">' + (spec.title || '') + '</span>' +
	       (spec.actions ? '<span class="win-actions">' + spec.actions + '</span>' : '') + '</div>' +
	       (mini ? '' : '<div class="' + (spec.bodyClass || 'win-body') + '">' + (spec.html || '') + '</div>' + GRIPS);
}

function render(){
	const specs = computeLayout();
	const wanted = new Set(specs.map(s => s.id));

	Object.keys(boxes).forEach(id => {
		if (!wanted.has(id)) {
			const old = boxes[id];
			delete boxes[id];
			if (old.classList.contains('full')) setFull(old, false);
			old.classList.add('entering');           // fade up and away, then remove
			old.style.pointerEvents = 'none';
			setTimeout(() => old.remove(), 400);
		}
	});

	specs.forEach(spec => {
		const mine = userRects[rk(spec.id)];         // a window the user moved or resized keeps its own place
		const rect = mine || spec;
		let el = boxes[spec.id];
		if (!el) {
			el = document.createElement('div');
			el.dataset.id = spec.id;
			el.className = 'box entering';
			place(el, Object.assign({}, rect, mine ? {y: mine.y - 30} : spec.from));   // start from `from` if there is one
			el.style.transitionDelay = (spec.delay || 0) + 'ms';
			stage.appendChild(el);
			void el.offsetWidth;
			boxes[spec.id] = el;
			requestAnimationFrame(() => el.classList.remove('entering'));
			setTimeout(() => { el.style.transitionDelay = ''; }, (spec.delay || 0) + 600);
		}
		place(el, rect);                              // glides to the real spot
		KINDS.forEach(k => el.classList.toggle(k, spec.kind.split(' ').includes(k)));   // a window can change shape (e.g. shrink to a tab)
		el.style.zIndex = winZ[spec.id] != null ? winZ[spec.id] : (spec.z || 0);
		if (spec.color) el.style.setProperty('--accent', spec.color);
		el.classList.toggle('selected', !!spec.selected);
		el.classList.toggle('disabled', !!spec.disabled);
		el.classList.toggle('clickable', !!spec.onClick);
		el.tabIndex = spec.onClick ? 0 : -1;
		el._onClick = spec.onClick;
		const key = spec.key || spec.id;
		if (el.dataset.key !== key) {
			el.dataset.key = key;
			el.innerHTML = windowHTML(spec);
			if (spec.onMount) spec.onMount(el);
		}
		syncProgress(el);
		if (spec.onUpdate) spec.onUpdate(el);
	});
}

/* ---------- click / keyboard on windows ---------- */

let dragged = false;     // true for a moment after a drag, so the drag does not also count as a click
const INTERACTIVE = 'button, input, label, a, textarea, select';

stage.addEventListener('click', e => {
	const open = e.target.closest('[data-open]');
	if (open) { openLesson(+open.dataset.open); return; }
	const keep = e.target.closest('[data-open-keep]');
	if (keep) { openLesson(+keep.dataset.openKeep, true); return; }
	if (e.target.closest('[data-catalog-min]')) { state.catalogMin = true; render(); return; }
	if (dragged) return;
	const box = e.target.closest('.box');
	if (!box || !box._onClick) return;
	if (e.target === box) return;                    // the frame is for resizing, not clicking
	if (e.target.closest(INTERACTIVE)) return;
	if (e.target.closest('.win-title') && !box.classList.contains('mini')) return;   // only a small tab is clicked by its title
	box._onClick();
});
stage.addEventListener('change', e => {
	const cb = e.target.closest('input[data-check]');
	if (cb) onCheck(cb);
});
stage.addEventListener('keydown', e => {
	if ((e.key === 'Enter' || e.key === ' ') && e.target._onClick) { e.preventDefault(); e.target._onClick(); }
});

/* ---------- drag and resize the windows ---------- */

const MIN_W = 220, MIN_H = 150;
let gesture = null;

stage.addEventListener('pointerdown', e => {
	const box = e.target.closest('.box');
	if (!box || box.classList.contains('full') || (e.pointerType === 'mouse' && e.button !== 0)) return;

	winZ[box.dataset.id] = ++zTop;                   // clicking a window brings it to the front
	box.style.zIndex = winZ[box.dataset.id];

	const grip = e.target.closest('.win-resize');
	const bar = e.target.closest('.win-title');
	let edge = grip ? grip.dataset.edge : null;
	if (!edge && e.target === box && !box.classList.contains('mini')) edge = borderEdge(box, e);   // the thin frame around a window
	if (!edge && !(bar && !e.target.closest(INTERACTIVE))) return;

	e.preventDefault();
	gesture = {
		box, key: rk(box.dataset.id), mode: edge || 'move',
		sx: e.clientX, sy: e.clientY, moved: false,
		r: {x: box.offsetLeft, y: box.offsetTop, w: box.offsetWidth, h: box.offsetHeight}
	};
	(grip || bar || box).setPointerCapture(e.pointerId);
});

// which edge(s) of the frame the pointer is on, e.g. "n", "sw"
function borderEdge(box, e){
	const r = box.getBoundingClientRect(), m = 10;
	let d = '';
	if (e.clientY - r.top < m) d += 'n'; else if (r.bottom - e.clientY < m) d += 's';
	if (e.clientX - r.left < m) d += 'w'; else if (r.right - e.clientX < m) d += 'e';
	return d || null;
}

stage.addEventListener('pointermove', e => {
	if (!gesture) return;
	const g = gesture, dx = e.clientX - g.sx, dy = e.clientY - g.sy;
	if (!g.moved) {
		if (Math.hypot(dx, dy) < 5) return;          // a tiny wobble is still a click
		g.moved = true;
		g.box.classList.add('dragging');
		stage.classList.add('gesture');              // lets the pointer pass over the result frames without them grabbing it
	}
	const m = g.mode, o = g.r;
	let {x, y, w, h} = o;
	if (m === 'move') { x += dx; y += dy; }
	else {                                           // (careful: the word "move" contains an "e", so it is handled apart)
		if (m.includes('e')) w = o.w + dx;
		if (m.includes('w')) w = o.w - dx;
		if (m.includes('s')) h = o.h + dy;
		if (m.includes('n')) h = o.h - dy;
		w = Math.max(MIN_W, w);
		h = Math.max(MIN_H, h);
		if (m.includes('w')) x = o.x + o.w - w;      // the far side stays where it was
		if (m.includes('n')) y = o.y + o.h - h;
		if (m.includes('w') && x < 0) { x = 0; w = o.x + o.w; }
		if (m.includes('n') && y < 0) { y = 0; h = o.y + o.h; }
	}
	x = Math.min(Math.max(x, 40 - w), stage.clientWidth - 40);   // always keep some of the title bar on screen
	y = Math.max(y, 0);
	userRects[g.key] = {x, y, w, h};
	place(g.box, userRects[g.key]);
});

function endGesture(){
	if (!gesture) return;
	gesture.box.classList.remove('dragging');
	stage.classList.remove('gesture');
	if (gesture.moved) { dragged = true; setTimeout(() => { dragged = false; }, 60); }
	gesture = null;
}
stage.addEventListener('pointerup', endGesture);
stage.addEventListener('pointercancel', endGesture);

/* ---------- pinch to resize (touch screens) ---------- */

let pinch = null;
const fingerGap = (a, b) => ({dx: Math.abs(a.clientX - b.clientX), dy: Math.abs(a.clientY - b.clientY)});

stage.addEventListener('touchstart', e => {
	if (e.touches.length !== 2) return;
	const a = e.touches[0], b = e.touches[1];
	const box = a.target.closest && a.target.closest('.box');
	if (!box || box.classList.contains('mini') || box.classList.contains('full')) return;
	const r = box.getBoundingClientRect();
	if (b.clientX < r.left - 40 || b.clientX > r.right + 40 || b.clientY < r.top - 40 || b.clientY > r.bottom + 40) return;   // both fingers on one window
	if (gesture) { gesture.box.classList.remove('dragging'); stage.classList.remove('gesture'); gesture = null; }   // a title-bar drag gives way to the pinch
	const d = fingerGap(a, b);
	pinch = {
		box, key: rk(box.dataset.id), d0: d, dist0: Math.max(1, Math.hypot(d.dx, d.dy)),
		mid0: {x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2},
		r: {x: box.offsetLeft, y: box.offsetTop, w: box.offsetWidth, h: box.offsetHeight}
	};
	winZ[box.dataset.id] = ++zTop;
	box.style.zIndex = winZ[box.dataset.id];
	box.classList.add('dragging');                   // no gliding while the fingers are moving it
	stage.style.overflowY = 'hidden';                // keep the page still during the pinch
	if (e.cancelable) e.preventDefault();
}, {passive: false});

stage.addEventListener('touchmove', e => {
	if (!pinch || e.touches.length < 2) return;
	const p = pinch, a = e.touches[0], b = e.touches[1], d = fingerGap(a, b);
	const dist = Math.hypot(d.dx, d.dy);
	// pinching mostly sideways changes the width, mostly up and down the height, diagonally both
	const rx = p.d0.dx >= 60 ? d.dx / p.d0.dx : (p.d0.dy >= 60 ? 1 : dist / p.dist0);
	const ry = p.d0.dy >= 60 ? d.dy / p.d0.dy : (p.d0.dx >= 60 ? 1 : dist / p.dist0);
	const w = Math.max(MIN_W, Math.min(p.r.w * rx, stage.clientWidth));
	const h = Math.max(MIN_H, p.r.h * ry);
	const mx = (a.clientX + b.clientX) / 2, my = (a.clientY + b.clientY) / 2;   // moving both fingers together also moves the window
	let x = p.r.x + p.r.w / 2 + (mx - p.mid0.x) - w / 2;
	let y = p.r.y + p.r.h / 2 + (my - p.mid0.y) - h / 2;
	x = Math.min(Math.max(x, 40 - w), stage.clientWidth - 40);
	y = Math.max(y, 0);
	userRects[p.key] = {x, y, w, h};
	place(p.box, userRects[p.key]);
	if (e.cancelable) e.preventDefault();
}, {passive: false});

function endPinch(e){
	if (!pinch || (e.touches && e.touches.length >= 2)) return;
	pinch.box.classList.remove('dragging');
	stage.style.overflowY = '';
	pinch = null;
	dragged = true; setTimeout(() => { dragged = false; }, 150);   // lifting the fingers is not a tap
}
stage.addEventListener('touchend', endPinch);
stage.addEventListener('touchcancel', endPinch);

// double-click a window's title bar to put just that window back where it started
stage.addEventListener('dblclick', e => {
	const bar = e.target.closest('.win-title');
	const box = bar && bar.closest('.box');
	if (!box || box.classList.contains('mini') || e.target.closest(INTERACTIVE)) return;
	delete userRects[rk(box.dataset.id)];
	render();
});

/* ---------- reset every floating window ---------- */

function resetWindows(){
	exitFullAll();
	Object.keys(userRects).forEach(k => delete userRects[k]);
	Object.keys(winZ).forEach(k => delete winZ[k]);
	render();
}
document.getElementById('reset-windows').addEventListener('click', resetWindows);

window.addEventListener('resize', render);

prepareData();
Progress.load();
render();