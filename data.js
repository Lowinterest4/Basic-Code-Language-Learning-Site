/*
  data.js  -  ALL the learning content lives here.

  Each language has three LEVELS and each level has a list of lessons:
      Beginner     for someone who has never used the language: the basics, explained from zero
      Experienced  what you can do with those basics, plus the rest of the language
      Advanced     combining everything, plus harder techniques and projects
  A lesson that needs more room can have BRANCHES: a "branches" list of smaller lessons with
  the same fields. Branches appear indented under their lesson, with their own checkbox.

  Add a language : copy one { ... } block inside `languages` and change it.
  Add a lesson   : add { id, title, content, example, starter } to the `lessons` list of a level.
                   id       must be unique (it is what the checklist remembers)
                   content  the explanation shown above the code (can contain HTML;
                            write < and > as &lt; and &gt; when showing tags)
                   example  code shown in the Example window (and run to show its result)
                   starter  code the Testing area begins with (defaults to example)
                   demo     sample HTML the code works on. Needed for CSS lessons,
                            optional for JS lessons (the page the script can look at).

  Code and text are written between `backticks`, so they can run over several lines
  and contain ordinary " and ' quotes. Two things to watch for inside backticks:
     - to show a backtick write \`   and to show ${ write \${
     - a backslash needs doubling, so write \\n if you want the code to contain \n

  The language id decides how the code is run, so keep it as 'html', 'css' or 'js'.
*/
const DATA = {
	languages: [
		{
			id: 'html',
			name: 'HTML',
			color: '#E34F26',
			blurb: 'The structure of a page',
			levels: [
				{
					id: 'beginner', name: 'Beginner',
					blurb: 'Start here, no experience needed: what HTML is, how a page is built, and every basic element.',
					lessons: [
							{
								id: 'html-b1', title: 'What is HTML?',
								content: `<p>HTML (HyperText Markup Language) describes the <b>content</b> of a web page. You write it with <b>elements</b>, made of tags like <code>&lt;p&gt;</code> and <code>&lt;/p&gt;</code>.</p>`,
								explain: `<p>A web page is just a text file. The browser reads the tags in it from top to bottom and decides what to draw. <b>HTML does not make things pretty; it says what each piece of content <i>is</i></b>: a heading, a paragraph, a list, a link. Looks come later with CSS, and behaviour with JavaScript.</p><p>The Example below is a complete tiny page. Read it, compare it with its Result, then change things in the Testing area and watch the Result update as you type.</p>`,
								tryit: [
									`Change the text inside the h1`,
									`Add a second paragraph under the first with a new p element`,
									`Change h1 to h2 and see how the size changes`
								],
								example: `<h1>Hello!</h1>
<p>This is my first web page.</p>`,
								starter: `<h1>Hello!</h1>
<!-- Add a paragraph below with a p tag -->
`
							},
							{
								id: 'html-b2', title: 'Getting started: files, editors and browsers',
								content: `<p>Before writing any HTML it helps to know where it lives. An HTML page is an ordinary <b>text file</b> whose name ends in <code>.html</code>. You write it in a <b>text editor</b>, and a <b>web browser</b> reads the file and draws the page.</p>`,
								explain: `<p><b>What you need:</b> a text editor (Notepad works; free editors such as VS Code are nicer because they colour the code) and a browser (Chrome, Edge, Firefox or Safari). Nothing to install and no internet connection is needed.</p><p><b>Your first page:</b> (1) create a new text file and save it as <code>index.html</code>; (2) type the code from the Example; (3) double-click the file to open it in your browser; (4) after each change, save the file and refresh the browser (F5). The Result window on this site saves and refreshes for you, so you see every change as you type.</p><p><b>Good habits:</b> use lowercase file names without spaces (<code>my-page.html</code>), keep all the files of one website in one folder, and indent tags that sit inside other tags so the code stays readable. <b>index.html</b> is the traditional name for the front page of a site.</p>`,
								tryit: [
									`Change the text inside the h1 and watch the Result`,
									`Press Reset, then Run, to bring back the starting code`,
									`Compare the Example's Result with the Testing area's Result`
								],
								example: `<!DOCTYPE html>
<html>
  <head>
    <title>My first page</title>
  </head>
  <body>
    <h1>My first page</h1>
    <p>This text lives in a file called index.html.</p>
  </body>
</html>`,
								starter: `<h1>My first page</h1>
<p>Edit this text.</p>`
							},
							{
								id: 'html-b3', title: 'Anatomy of an element',
								content: `<p>An element is an <b>opening tag</b>, some <b>content</b> and a <b>closing tag</b>: <code>&lt;p&gt;Hello&lt;/p&gt;</code>. Some elements are empty (<code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;img&gt;</code>) and need no closing tag. Elements can sit <b>inside</b> each other; close the inner one first.</p>`,
								explain: `<p>Almost everything in HTML is an <b>element</b>. An element has three parts: the <b>opening tag</b> (<code>&lt;p&gt;</code>), the <b>content</b>, and the <b>closing tag</b> (<code>&lt;/p&gt;</code>, the same name with a slash). Forgetting the slash is the most common beginner mistake.</p><p><b>Nesting</b> means putting one element inside another. The rule is simple: the element you opened last must be closed first, like <code>&lt;p&gt;&lt;strong&gt;hi&lt;/strong&gt;&lt;/p&gt;</code>. <b>Empty elements</b> such as <code>&lt;br&gt;</code> have no content, so they have no closing tag.</p>`,
								tryit: [
									`Wrap one word of the paragraph in a strong element`,
									`Add another paragraph with a br inside it`,
									`Leave out a closing tag and see what happens to the Result`
								],
								example: `<p>A paragraph is an element.</p>
<p>Elements can be <strong>nested</strong> inside each other.</p>
<p>Empty elements have no closing tag,<br>like this line break.</p>
<hr>`,
								starter: `<p>Opening tag, content, closing tag.</p>
<!-- Nest a strong element inside the paragraph above -->
`
							},
							{
								id: 'html-b4', title: 'Page structure',
								content: `<p>Every page has a <code>&lt;head&gt;</code> (information about the page, like its title) and a <code>&lt;body&gt;</code> (everything you see). Only the body shows in the Result window.</p>`,
								explain: `<p><code>&lt;!DOCTYPE html&gt;</code> tells the browser this is a modern HTML page and <code>&lt;html&gt;</code> wraps everything. Inside it, <code>&lt;head&gt;</code> holds information <i>about</i> the page (its title, its character set, links to CSS) that is not drawn, and <code>&lt;body&gt;</code> holds everything the visitor sees.</p><p>The text in <code>&lt;title&gt;</code> appears in the browser tab, not on the page. In the Result window you only ever see the body.</p>`,
								tryit: [
									`Change the title text and notice the Result does not change`,
									`Add an h2 and a p inside the body`,
									`Add three paragraphs about yourself to the body`
								],
								example: `<!DOCTYPE html>
<html>
  <head>
    <title>My page</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>Only the body is shown on the page.</p>
  </body>
</html>`,
								starter: `<html>
  <head>
    <title>My page</title>
  </head>
  <body>
    <h1>Edit me</h1>
    <!-- put more content here -->
  </body>
</html>`
							},
							{
								id: 'html-b5', title: 'Headings and paragraphs',
								content: `<p>Use <code>&lt;h1&gt;</code> (biggest) to <code>&lt;h6&gt;</code> (smallest) for headings, and <code>&lt;p&gt;</code> for paragraphs of text.</p>`,
								explain: `<p>There are six heading levels. <code>h1</code> is the main title of the page and should normally be used <b>once</b>; <code>h2</code> are its sections, <code>h3</code> their sub-sections, and so on. Choose a level by importance, not by size: you can resize text with CSS later.</p><p>A <code>&lt;p&gt;</code> is a paragraph. Browsers add space above and below it and ignore extra spaces or blank lines you type, so the line breaks in your code do not appear in the Result.</p>`,
								tryit: [
									`Add an h4, h5 and h6 and compare their sizes`,
									`Type a paragraph with lots of spaces and line breaks in the code and see what the Result does`,
									`Build a mini article: one h1, two h2 and a paragraph under each`
								],
								example: `<h1>Big heading</h1>
<h2>Smaller heading</h2>
<h3>Even smaller</h3>
<p>A paragraph of text.</p>`,
								starter: `<h1>My title</h1>
<p>Write something here.</p>`
							},
							{
								id: 'html-b6', title: 'Text formatting',
								content: `<p><code>&lt;strong&gt;</code> marks important text, <code>&lt;em&gt;</code> emphasised text, <code>&lt;br&gt;</code> starts a new line and <code>&lt;hr&gt;</code> draws a line across the page.</p>`,
								explain: `<p><code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> are about <i>meaning</i>: strong importance and emphasis. Browsers show them bold and italic, but you choose them for what the words mean. Others you may meet: <code>&lt;mark&gt;</code> (highlight), <code>&lt;small&gt;</code>, <code>&lt;sub&gt;</code> and <code>&lt;sup&gt;</code>.</p><p><code>&lt;br&gt;</code> breaks a line inside a paragraph (good for poems and addresses), while <code>&lt;hr&gt;</code> draws a dividing line between sections.</p>`,
								tryit: [
									`Highlight a word with mark`,
									`Write a short poem using br between the lines`,
									`Write a chemical formula or a maths power with sub and sup`
								],
								example: `<p>This is <strong>important</strong> and this is <em>emphasised</em>.</p>
<p>Line one<br>Line two</p>
<hr>
<p>H<sub>2</sub>O and x<sup>2</sup></p>`,
								starter: `<p>Make <strong>this</strong> bold.</p>
<p>Try em, br and hr too.</p>`,
								branches: [
									{
										id: 'html-b6-1', title: 'Inline text elements',
										content: `<p>Besides strong and em, HTML has many small elements that mark up <b>parts of a sentence</b>.</p>`,
										explain: `<p>These elements sit inside a line of text without breaking it. <code>&lt;mark&gt;</code> highlights, <code>&lt;small&gt;</code> is for fine print, <code>&lt;del&gt;</code> and <code>&lt;ins&gt;</code> show removed and added text, <code>&lt;abbr title="..."&gt;</code> explains an abbreviation on hover, <code>&lt;code&gt;</code> marks computer code, <code>&lt;kbd&gt;</code> a key to press and <code>&lt;time&gt;</code> a date. Choose the element for its <i>meaning</i>; browsers give each a default look that CSS can change later.</p>`,
										tryit: [
											`Hover over the abbreviation`,
											`Change the del and ins to a different price`,
											`Add a kbd for the keys Ctrl and C`
										],
										example: `<p>This is <mark>highlighted</mark> and this is <small>small print</small>.</p>
<p>Price: <del>$10</del> <ins>$8</ins></p>
<p><abbr title="HyperText Markup Language">HTML</abbr> is not a programming language.</p>
<p>Use <code>console.log()</code> and press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
<p>Posted on <time datetime="2026-11-08">8 November 2026</time>.</p>`,
										starter: `<p>Make <mark>this</mark> stand out.</p>`
									},
									{
										id: 'html-b6-2', title: 'Quotes and preformatted text',
										content: `<p>Quotations and code samples have their own elements, and <code>&lt;pre&gt;</code> keeps text exactly as you typed it.</p>`,
										explain: `<p><code>&lt;q&gt;</code> is a short quotation inside a sentence (the browser adds the quotation marks). <code>&lt;blockquote&gt;</code> is a longer quotation on its own, and <code>&lt;cite&gt;</code> names its source. Normally HTML squashes extra spaces and ignores line breaks; <code>&lt;pre&gt;</code> (preformatted) keeps them, and shows the text in a fixed-width font, which is what you want for poems and code.</p>`,
										tryit: [
											`Add your own quote with q`,
											`Change the number of spaces in the pre block`,
											`Put a code element inside the pre`
										],
										example: `<p>She said <q>HTML is fun</q> and smiled.</p>
<blockquote>
  <p>A longer quotation goes in a blockquote, on its own block.</p>
  <cite>A. Writer</cite>
</blockquote>
<pre>
Preformatted text
   keeps   its spaces
      and line breaks.
</pre>`,
										starter: `<blockquote>Write a quotation here.</blockquote>
<pre>
  keep
    my
      spaces
</pre>`
									}
								]
							},
							{
								id: 'html-b7', title: 'Links',
								content: `<p>The <code>&lt;a&gt;</code> tag makes a link, and its <code>href</code> attribute says where it goes. (Links will not open inside the Result window.)</p>`,
								explain: `<p>A link is an <code>&lt;a&gt;</code> (anchor) element. The <code>href</code> attribute is the destination and the content between the tags is the clickable text. Make the text meaningful ("Read the guide", not "click here").</p><p>Destinations can be a full address (<code>https://...</code>), another file of your own site (<code>about.html</code>), a spot on the same page (<code>#section</code>) or an email (<code>mailto:me@example.com</code>). Add <code>target="_blank"</code> to open a link in a new tab.</p>`,
								tryit: [
									`Make a link whose text is your favourite website's name`,
									`Add a mailto link`,
									`Turn a whole sentence into a link`
								],
								example: `<p>Visit <a href="https://example.com">Example</a>.</p>
<p><a href="#">A link that goes nowhere</a></p>`,
								starter: `<a href="https://example.com">Click me</a>`,
								branches: [
									{
										id: 'html-b7-1', title: 'Absolute and relative links',
										content: `<p>The <code>href</code> of a link can be written in several ways, depending on where the destination is.</p>`,
										explain: `<p>An <b>absolute</b> link is a full address, starting with <code>https://</code>: use it for other websites. A <b>relative</b> link names a file <i>relative to the current page</i>: <code>about.html</code> is next to this page, <code>blog/post-1.html</code> is inside the blog folder, and <code>../index.html</code> goes <b>one folder up</b>. Relative links keep working if you move the whole site. Special schemes open apps: <code>mailto:</code> starts an email and <code>tel:</code> starts a phone call. A link to <code>#section</code> jumps within the page. (Links will not open inside the Result window; this lesson is about reading and writing them.)</p>`,
										tryit: [
											`Write a relative link to a page called contact.html`,
											`Add a mailto link with your own address`,
											`Which links here would break if you moved the page to another website?`
										],
										example: `<ul>
  <li><a href="https://example.com/page.html">Absolute: a full address</a></li>
  <li><a href="about.html">Relative: a file next to this one</a></li>
  <li><a href="blog/post-1.html">Relative: inside the blog folder</a></li>
  <li><a href="../index.html">Relative: one folder up</a></li>
  <li><a href="mailto:me@example.com">An email link</a></li>
  <li><a href="tel:+15551234567">A phone link</a></li>
</ul>`,
										starter: `<ul>
  <li><a href="about.html">About</a></li>
</ul>`
									}
								]
							},
							{
								id: 'html-b8', title: 'Images',
								content: `<p><code>&lt;img&gt;</code> shows a picture. <code>src</code> says where the picture is and <code>alt</code> describes it for people who cannot see it. Here the picture is a tiny built-in one.</p>`,
								explain: `<p><code>&lt;img&gt;</code> is an empty element, so it has no closing tag. <code>src</code> says where the picture file is, and <code>alt</code> is the text shown (or read aloud) when the picture cannot be seen. <code>width</code> and <code>height</code> set the size in pixels.</p><p>In this lesson the picture is built into the code so that it works anywhere, but on a real site <code>src</code> is usually a file name like <code>photo.jpg</code>.</p>`,
								tryit: [
									`Change the width to make the picture bigger or smaller`,
									`Write a helpful alt text`,
									`Put the img inside an a element so the picture becomes a link`
								],
								example: `<img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><circle cx='40' cy='40' r='36' fill='tomato'/></svg>" alt="A red circle">`,
								starter: `<img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><circle cx='40' cy='40' r='36' fill='royalblue'/></svg>" alt="" width="160">`
							},
							{
								id: 'html-b9', title: 'Lists',
								content: `<p>Use <code>&lt;ul&gt;</code> for a bulleted list and <code>&lt;ol&gt;</code> for a numbered one. Each item goes inside an <code>&lt;li&gt;</code>.</p>`,
								explain: `<p>A list needs two kinds of element: the list itself and the items inside it. <code>&lt;ul&gt;</code> (unordered) gives bullets when the order does not matter, <code>&lt;ol&gt;</code> (ordered) gives numbers when it does. Every item is an <code>&lt;li&gt;</code>, and nothing but <code>&lt;li&gt;</code> should sit directly inside the list.</p><p>Lists can be nested: put a whole new <code>&lt;ul&gt;</code> inside an <code>&lt;li&gt;</code> to make a sub-list.</p>`,
								tryit: [
									`Add three more items to the list`,
									`Change ul to ol and watch the bullets become numbers`,
									`Nest a small list inside one of the items`
								],
								example: `<h3>Shopping</h3>
<ul>
  <li>Apples</li>
  <li>Bread</li>
</ul>
<h3>Steps</h3>
<ol>
  <li>Open the page</li>
  <li>Read the lesson</li>
</ol>`,
								starter: `<ul>
  <li>First item</li>
</ul>`,
								branches: [
									{
										id: 'html-b9-1', title: 'Nested lists',
										content: `<p>A list can contain another list. This is how you make outlines, menus with sub-menus and tables of contents.</p>`,
										explain: `<p>Put the new <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> <b>inside</b> an <code>&lt;li&gt;</code>, after that item's text. Never put a list directly inside another list without an <code>&lt;li&gt;</code> around it. Mixing is fine: a numbered list can contain a bulleted one. Browsers indent each level and change the bullet shape automatically.</p>`,
										tryit: [
											`Add a third level inside "Apples"`,
											`Make the outer list ordered (ol)`,
											`Add another fruit with two sub-items`
										],
										example: `<ul>
  <li>Fruit
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
    </ul>
  </li>
  <li>Vegetables
    <ol>
      <li>Carrots</li>
      <li>Peas</li>
    </ol>
  </li>
</ul>`,
										starter: `<ul>
  <li>Main item
    <ul>
      <li>Sub item</li>
    </ul>
  </li>
</ul>`
									},
									{
										id: 'html-b9-2', title: 'Description lists',
										content: `<p>A third kind of list pairs <b>terms</b> with their <b>descriptions</b>, like a glossary.</p>`,
										explain: `<p><code>&lt;dl&gt;</code> is the list, <code>&lt;dt&gt;</code> a term and <code>&lt;dd&gt;</code> its description (browsers indent descriptions). A term can have more than one description. Use it for glossaries, questions and answers, or name and value pairs.</p>`,
										tryit: [
											`Add a new term and description`,
											`Give HTML two descriptions`,
											`Write a glossary of three words you know`
										],
										example: `<dl>
  <dt>HTML</dt>
  <dd>The structure of a page.</dd>
  <dt>CSS</dt>
  <dd>The style of a page.</dd>
  <dt>JavaScript</dt>
  <dd>The behaviour of a page.</dd>
</dl>`,
										starter: `<dl>
  <dt>Term</dt>
  <dd>Description</dd>
</dl>`
									}
								]
							},
							{
								id: 'html-b10', title: 'Attributes: extra information',
								content: `<p>An <b>attribute</b> gives an element extra information. It is written inside the opening tag as <code>name="value"</code>.</p>`,
								explain: `<p>You have already met two: <code>href</code> on a link says where it goes, and <code>src</code> on an image says which picture to show. Every attribute has a <b>name</b> (what kind of information), an equals sign and a <b>value</b> in quotes. An element can have several, separated by spaces: <code>&lt;img src="cat.jpg" alt="A cat" width="200"&gt;</code>.</p><p>Which attributes an element accepts depends on the element: <code>href</code> belongs to <code>a</code>, <code>src</code> and <code>alt</code> to <code>img</code>. A few work on every element, such as <code>title</code> (a tooltip when you hover) and <code>id</code> and <code>class</code>, which the next lesson explains. Attributes go in the <b>opening</b> tag only, never in the closing tag.</p><p>Some attributes have no value, like <code>disabled</code> or <code>checked</code>: just writing the name switches them on.</p>`,
								tryit: [
									`Change the link's href and the image's width and see what happens`,
									`Add a title attribute to the paragraph and hover over it`,
									`Add the disabled attribute to the button`
								],
								example: `<a href="https://example.com" title="Opens an example site">A link with two attributes</a>
<p title="I am a tooltip!">Hover over this paragraph.</p>
<img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='tomato'/></svg>" alt="A red square" width="60">
<br><br>
<button disabled>A disabled button</button>`,
								starter: `<a href="https://example.com">A link</a>
<p>Add a title attribute to me.</p>`
							},
							{
								id: 'html-b11', title: 'Class and id: names for elements',
								content: `<p><code>class</code> and <code>id</code> are attributes that give an element a <b>name</b>. They change nothing you can see by themselves. CSS and JavaScript use these names to find the elements they want to change.</p>`,
								explain: `<p><b>Why names?</b> A page may have dozens of paragraphs. If you want only some of them to look different, you need a way to point at them. A class or an id is that pointer, like a name tag.</p><p><b>class</b> is for <b>groups</b>. Many elements may share one class, and one element may have several classes separated by spaces: <code>class="note big"</code> has two classes, <code>note</code> and <code>big</code>. <b>id</b> is for <b>exactly one</b> element: no two elements on a page may share an id.</p><p><b>Rules for names:</b> use letters, digits and hyphens, no spaces, and do not start with a digit (<code>main-title</code> is good). Names are case sensitive, so <code>Note</code> and <code>note</code> are different.</p><p><b>When to use which:</b> use a class when the same look may be wanted in several places, and an id for one special element (or as a link target, see the Page anchors lesson). In the Example, the small block at the top is CSS, which you will learn next: a rule starting with a <b>dot</b> (<code>.note</code>) finds a class and a rule starting with a <b>hash</b> (<code>#title</code>) finds an id. Notice which elements change in the Result: only the ones carrying those names. That link between names in HTML and rules in CSS is the key idea of the whole CSS path.</p>`,
								tryit: [
									`Give the second paragraph the class "note" as well`,
									`Give one paragraph two classes at once, like class="note big"`,
									`Change the id of the heading to another name and notice the colour disappears: the CSS can no longer find it`
								],
								example: `<style>
  .note { background: #fff3b0; padding: 4px; }
  #title { color: tomato; }
</style>
<h1 id="title">A heading with an id</h1>
<p class="note">A paragraph with the class "note".</p>
<p>A paragraph with no class.</p>
<p class="note">Another paragraph with the class "note".</p>`,
								starter: `<style>
  .note { background: #fff3b0; padding: 4px; }
</style>
<p class="note">I have the class "note".</p>
<p>Give me the class "note" too.</p>`
							},
							{
								id: 'html-b12', title: 'Div and span',
								content: `<p><code>&lt;div&gt;</code> is a block that takes a whole line. <code>&lt;span&gt;</code> wraps a few words inside a line. The <code>style</code> attribute adds quick CSS.</p>`,
								explain: `<p>Both are generic containers with no meaning of their own. <code>&lt;div&gt;</code> is a <b>block</b>: it starts on a new line and stretches the full width. <code>&lt;span&gt;</code> is <b>inline</b>: it sits inside a line of text and is only as wide as its content.</p><p>Use div to group a chunk of the page and span to mark a few words. When a more meaningful element exists (nav, p, li) prefer that.</p>`,
								tryit: [
									`Wrap two paragraphs in one div and give the div a background colour`,
									`Colour only one word using a span`,
									`Put two spans next to each other, then two divs, and compare`
								],
								example: `<div style="background: lightblue; padding: 8px;">I am a div. I take the whole line.</div>
<p>Some <span style="color: tomato;">coloured</span> words inside a paragraph.</p>`,
								starter: `<div>A div</div>
<p>A <span>span</span> inside a paragraph.</p>`
							},
							{
								id: 'html-b13', title: 'Comments and special characters',
								content: `<p>A comment <code>&lt;!-- like this --&gt;</code> is a note the browser ignores. To show characters that HTML uses itself, write them as <b>entities</b>: <code>&amp;lt;</code> for &lt;, <code>&amp;gt;</code> for &gt;, <code>&amp;amp;</code> for &amp; and <code>&amp;copy;</code> for &copy;.</p>`,
								explain: `<p>Some characters belong to HTML itself: if you type <code>&lt;</code> the browser thinks a tag is starting. To show them as text, use an <b>entity</b>: <code>&amp;lt;</code>, <code>&amp;gt;</code> and <code>&amp;amp;</code>. Entities exist for symbols too, like <code>&amp;copy;</code> and <code>&amp;hearts;</code>.</p><p>A <b>comment</b> (<code>&lt;!-- ... --&gt;</code>) is invisible to visitors. Use it for reminders, or to switch a piece of code off while testing.</p>`,
								tryit: [
									`Show the text &lt;h1&gt; on the page without it becoming a heading`,
									`Wrap one of the paragraphs in a comment and watch it vanish`,
									`Look up another entity to try, such as &amp;euro; or &amp;trade;`
								],
								example: `<!-- This comment is not shown on the page -->
<p>Write &lt;p&gt; to show a tag on the page.</p>
<p>Tom &amp; Jerry &copy; 2026</p>
<p>Arrows: &larr; &rarr; and a heart &hearts;</p>`,
								starter: `<!-- Write a note to yourself here -->
<p>Show a &lt;tag&gt; as text.</p>`
							}
					]
				},
				{
					id: 'experienced', name: 'Experienced',
					blurb: 'What you can do with those elements, plus the rest of the toolbox.',
					lessons: [
							{
								id: 'html-e1', title: 'More useful attributes',
								content: `<p>Besides <code>id</code> and <code>class</code>, several attributes can be used on almost any element, and a few change how links behave.</p>`,
								explain: `<p><code>title</code> shows a tooltip. <code>lang</code> says what language the text is in (screen readers use it to pronounce words). <code>hidden</code> hides an element. <code>style</code> adds CSS to one element. <code>contenteditable="true"</code> lets the visitor type into the element. <code>tabindex="0"</code> lets an element receive the keyboard's Tab focus.</p><p>On links, <code>target="_blank"</code> opens the destination in a new tab, and <code>rel="noopener"</code> should go with it for safety. For downloads use <code>download</code>.</p>`,
								tryit: [
									`Remove hidden from the second paragraph`,
									`Make another paragraph editable`,
									`Change the colour in the inline style`
								],
								example: `<p lang="en">The lang attribute says which language this text is in.</p>
<p hidden>I am hidden, so you cannot see me.</p>
<p contenteditable="true">Click here and type: you can edit me!</p>
<p style="color: seagreen; font-size: 20px;">An inline style on one paragraph.</p>
<a href="https://example.com" target="_blank" rel="noopener">Opens in a new tab</a>
<p tabindex="0">Press Tab: I can take keyboard focus.</p>`,
								starter: `<p hidden>I am hidden.</p>
<p contenteditable="true">Edit me.</p>`
							},
							{
								id: 'html-e2', title: 'Tables',
								content: `<p>A <code>&lt;table&gt;</code> is made of rows (<code>&lt;tr&gt;</code>) holding header cells (<code>&lt;th&gt;</code>) and data cells (<code>&lt;td&gt;</code>).</p>`,
								explain: `<p>Tables show data in rows and columns, not page layout. Build one row at a time: <code>&lt;tr&gt;</code> is a row, and inside it each <code>&lt;th&gt;</code> is a header cell (bold, centred) and each <code>&lt;td&gt;</code> a normal cell. Every row should have the same number of cells.</p><p><code>border</code> and <code>cellpadding</code> here are old-fashioned shortcuts so that you can see the grid; real sites style tables with CSS.</p>`,
								tryit: [
									`Add a third column to every row`,
									`Add two more rows of your own data`,
									`Change cellpadding to 15`
								],
								example: `<table border="1" cellpadding="6">
  <tr>
    <th>Language</th>
    <th>Used for</th>
  </tr>
  <tr>
    <td>HTML</td>
    <td>Structure</td>
  </tr>
  <tr>
    <td>CSS</td>
    <td>Style</td>
  </tr>
</table>`,
								starter: `<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Sam</td>
    <td>12</td>
  </tr>
</table>`
							},
							{
								id: 'html-e3', title: 'Table structure and merged cells',
								content: `<p>Group a table with <code>&lt;caption&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> and <code>&lt;tfoot&gt;</code>. <code>colspan</code> stretches a cell across columns and <code>rowspan</code> down rows.</p>`,
								explain: `<p>Big tables are split into parts so browsers and screen readers understand them: <code>&lt;thead&gt;</code> for headings, <code>&lt;tbody&gt;</code> for data and <code>&lt;tfoot&gt;</code> for totals; <code>&lt;caption&gt;</code> titles the whole table.</p><p><b>colspan</b> makes a cell cover several columns and <b>rowspan</b> several rows. When a cell spans, remove the cells it covers from that row, or the table becomes wider than you expect.</p>`,
								tryit: [
									`Change colspan to 3 and fix the rows so they still line up`,
									`Add a Wednesday row`,
									`Give the tfoot a different message`
								],
								example: `<table border="1" cellpadding="6">
  <caption>Weekly plan</caption>
  <thead>
    <tr><th>Day</th><th colspan="2">Tasks</th></tr>
  </thead>
  <tbody>
    <tr><td>Mon</td><td>Read</td><td>Write</td></tr>
    <tr><td rowspan="2">Tue</td><td>Code</td><td>Test</td></tr>
    <tr><td>Draw</td><td>Rest</td></tr>
  </tbody>
  <tfoot>
    <tr><td colspan="3">Keep going!</td></tr>
  </tfoot>
</table>`,
								starter: `<table border="1" cellpadding="6">
  <thead>
    <tr><th colspan="2">Title across two columns</th></tr>
  </thead>
  <tbody>
    <tr><td>A</td><td>B</td></tr>
  </tbody>
</table>`
							},
							{
								id: 'html-e4', title: 'Forms and inputs',
								content: `<p>Forms collect information. <code>&lt;input&gt;</code> makes text boxes and checkboxes, <code>&lt;label&gt;</code> names them and <code>&lt;button&gt;</code> makes a button.</p>`,
								explain: `<p>A <code>&lt;form&gt;</code> groups controls. The <code>&lt;input&gt;</code> element changes with its <code>type</code>: text, password, checkbox and more. A <code>&lt;label&gt;</code> names a control; wrapping the input in the label (or linking them with <code>for</code> and <code>id</code>) means clicking the words also selects the control.</p><p><code>placeholder</code> shows a hint inside an empty box. <code>&lt;select&gt;</code> makes a drop-down with one <code>&lt;option&gt;</code> per choice. <code>&lt;button&gt;</code> makes a button; <code>type="button"</code> stops it submitting the form.</p>`,
								tryit: [
									`Add a password input and look at the dots`,
									`Add a third option to the select`,
									`Click the words next to the checkbox and watch it toggle`
								],
								example: `<form>
  <label>Name: <input type="text" placeholder="Your name"></label>
  <br><br>
  <label><input type="checkbox"> I like HTML</label>
  <br><br>
  <select>
    <option>Red</option>
    <option>Blue</option>
  </select>
  <button type="button">Send</button>
</form>`,
								starter: `<label>Your name: <input type="text"></label>`
							},
							{
								id: 'html-e5', title: 'More form controls',
								content: `<p>There are many kinds of input: <code>&lt;textarea&gt;</code> for long text, radio buttons (same <code>name</code>, only one can be picked), and <code>type="number"</code>, <code>"range"</code>, <code>"color"</code> and <code>"date"</code>.</p>`,
								explain: `<p>Choose the control that fits the data. <code>&lt;textarea&gt;</code> is for several lines. <b>Radio buttons</b> share the same <code>name</code> so only one can be chosen at a time; checkboxes are independent. Number, range, colour and date inputs give you built-in pickers and limits (<code>min</code>, <code>max</code>, <code>step</code>).</p><p>Attributes like <code>value</code> (starting value), <code>checked</code>, <code>disabled</code> and <code>readonly</code> change how a control starts out.</p>`,
								tryit: [
									`Add a third radio option`,
									`Set the number input's min and max and try going beyond them`,
									`Make one control disabled`
								],
								example: `<form>
  <p><label>Message:<br><textarea rows="3" cols="30">Hello</textarea></label></p>
  <p>Size:
    <label><input type="radio" name="size" checked> Small</label>
    <label><input type="radio" name="size"> Large</label>
  </p>
  <p><label>Age <input type="number" min="1" max="99" value="12"></label></p>
  <p><label>Volume <input type="range"></label></p>
  <p><label>Colour <input type="color" value="#2965f1"></label></p>
  <p><label>Date <input type="date"></label></p>
</form>`,
								starter: `<form>
  <label>Pick a colour <input type="color"></label>
</form>`
							},
							{
								id: 'html-e6', title: 'Semantic layout',
								content: `<p>Tags like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code> and <code>&lt;footer&gt;</code> describe the job of each part of a page, which helps people and search engines.</p>`,
								explain: `<p>Semantic elements say what a part of the page <i>is</i>. <code>&lt;header&gt;</code> and <code>&lt;footer&gt;</code> are the top and bottom, <code>&lt;nav&gt;</code> holds the main links, <code>&lt;main&gt;</code> is the unique main content, and <code>&lt;section&gt;</code> and <code>&lt;article&gt;</code> divide that content into themed parts and self-contained pieces. <code>&lt;aside&gt;</code> is side content.</p><p>They look just like divs by default, but search engines, screen readers and other developers understand them.</p>`,
								tryit: [
									`Add a second section with its own heading`,
									`Add an aside with a tip`,
									`Replace each semantic element with a div and think about what information is lost`
								],
								example: `<header>
  <h1>My Site</h1>
</header>
<nav>
  <a href="#">Home</a> | <a href="#">About</a>
</nav>
<main>
  <section>
    <h2>News</h2>
    <p>Something happened today.</p>
  </section>
</main>
<footer>
  <p>&copy; 2026 Me</p>
</footer>`,
								starter: `<header>
  <h1>My site</h1>
</header>
<main>
  <p>Main content goes here.</p>
</main>`
							},
							{
								id: 'html-e7', title: 'Details, progress and meter',
								content: `<p>Some elements are interactive on their own. <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> make a section that opens and closes, <code>&lt;progress&gt;</code> shows how far along something is and <code>&lt;meter&gt;</code> shows a value in a range.</p>`,
								explain: `<p>These elements work without any JavaScript. <code>&lt;details&gt;</code> hides everything except its <code>&lt;summary&gt;</code> until it is clicked; add the <code>open</code> attribute to start it opened. <code>&lt;progress&gt;</code> shows task progress with <code>value</code> and <code>max</code>; <code>&lt;meter&gt;</code> shows a measurement within a known range, like a battery or disk space.</p>`,
								tryit: [
									`Add the open attribute to the details`,
									`Change the progress value to 100`,
									`Add a second details block with a question and its answer`
								],
								example: `<details>
  <summary>Click to open</summary>
  <p>This was hidden until you opened it.</p>
</details>
<p>Loading: <progress value="60" max="100">60%</progress></p>
<p>Battery: <meter value="0.3" min="0" max="1" low="0.4">30%</meter></p>`,
								starter: `<details>
  <summary>More info</summary>
  <p>Write the hidden text here.</p>
</details>`
							},
							{
								id: 'html-e8', title: 'Page anchors and menus',
								content: `<p>A link whose <code>href</code> is <code>#something</code> jumps to the element with that <code>id</code>. Put links in a <code>&lt;nav&gt;</code> list to build a menu. Scroll the Result window after clicking.</p>`,
								explain: `<p>Give an element an <code>id</code>, then link to it with <code>href="#thatid"</code>: the browser scrolls straight there. This is how tables of contents and "back to top" links work. Links written as a list inside <code>&lt;nav&gt;</code> are the standard way to build a menu.</p><p>Inside the Result window the page is small, so scroll after clicking to see where you landed.</p>`,
								tryit: [
									`Add a fourth section and a menu link for it`,
									`Add a "Back to the top" link at the end`,
									`Turn the menu into a row by writing the links without ul and li`
								],
								example: `<nav>
  <ul>
    <li><a href="#one">One</a></li>
    <li><a href="#two">Two</a></li>
    <li><a href="#three">Three</a></li>
  </ul>
</nav>
<h2 id="one">Section one</h2>
<p style="height:160px">Some text...</p>
<h2 id="two">Section two</h2>
<p style="height:160px">More text...</p>
<h2 id="three">Section three</h2>
<p><a href="#one">Back to the top</a></p>`,
								starter: `<a href="#bottom">Jump down</a>
<p style="height:300px">Space...</p>
<h2 id="bottom">The bottom</h2>`
							}
					]
				},
				{
					id: 'advanced', name: 'Advanced',
					blurb: 'Combining elements, and harder real-world practices.',
					lessons: [
							{
								id: 'html-a1', title: 'Adding CSS to HTML',
								content: `<p>HTML and CSS work together. Style one element with the <code>style</code> attribute, many with a <code>&lt;style&gt;</code> block, or a whole site with a separate file linked by <code>&lt;link rel="stylesheet" href="..."&gt;</code>. A <code>&lt;style&gt;</code> block with classes is usually best.</p>`,
								explain: `<p>There are three ways to add CSS. <b>Inline</b> (<code>style="..."</code> on one element) is quick but hard to reuse. A <b>style block</b> (<code>&lt;style&gt;</code>) styles the whole page by selector or class. An <b>external stylesheet</b> (<code>&lt;link rel="stylesheet" href="style.css"&gt;</code>) is shared by every page of a site, which is what real sites do.</p><p>When rules clash, the more specific one wins: inline beats a class, and a class beats a plain element selector.</p>`,
								tryit: [
									`Change the colour of the .card border`,
									`Add a third card with a different class`,
									`Add an inline style to a card and see it override the class`
								],
								example: `<style>
  .card {
    padding: 12px;
    background: #eef3ff;
    border-left: 6px solid #2965f1;
  }
  .warn { border-left-color: tomato; }
</style>
<div class="card">A styled card.</div>
<div class="card warn">A second card, with a different class.</div>
<p style="color: seagreen;">Inline style on one paragraph.</p>`,
								starter: `<style>
  p { color: tomato; }
</style>
<p>Style me!</p>`
							},
							{
								id: 'html-a2', title: 'A complete form with validation',
								content: `<p>Browsers can check input for you. <code>required</code>, <code>minlength</code>, <code>pattern</code> and <code>type="email"</code> add rules. Group related fields with <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code>, and connect every <code>&lt;label&gt;</code> to its input with <code>for</code> and <code>id</code>.</p>`,
								explain: `<p>Browsers can check a form before it is sent. <code>required</code> blocks empty fields, <code>minlength</code> and <code>maxlength</code> limit the text length, <code>type="email"</code> expects an address, and <code>pattern</code> takes a regular expression (<code>[0-9]{3}</code> means three digits). <code>title</code> explains the rule to the user.</p><p><code>&lt;fieldset&gt;</code> with <code>&lt;legend&gt;</code> groups related controls. Always link each <code>&lt;label&gt;</code> to its input with <code>for</code> and <code>id</code>. This Result window does not send forms, and its validation messages may not appear; on a real page the browser shows them when the button is pressed.</p>`,
								tryit: [
									`Make the name field need at least 5 characters`,
									`Add a password field with minlength 8`,
									`Add a drop-down inside the fieldset`
								],
								example: `<form>
  <fieldset>
    <legend>Sign up</legend>
    <p>
      <label for="name">Name</label><br>
      <input id="name" name="name" required minlength="2">
    </p>
    <p>
      <label for="email">Email</label><br>
      <input id="email" name="email" type="email" required placeholder="you@example.com">
    </p>
    <p>
      <label for="code">Code (3 digits)</label><br>
      <input id="code" name="code" pattern="[0-9]{3}" title="Three digits">
    </p>
    <button type="submit">Join</button>
  </fieldset>
</form>`,
								starter: `<form>
  <label for="age">Age</label>
  <input id="age" type="number" min="1" max="120" required>
  <button type="submit">Send</button>
</form>`
							},
							{
								id: 'html-a3', title: 'Accessibility',
								content: `<p>Good HTML works for everyone, including people using screen readers. Use real <code>&lt;button&gt;</code> and <code>&lt;a&gt;</code> elements, write meaningful <code>alt</code> text, keep headings in order, connect labels to inputs, and use <code>aria-label</code> when an icon has no text.</p>`,
								explain: `<p>Accessibility means your page works for people who use screen readers, keyboards or magnifiers. The habits that help most: write <b>alt text</b> that describes what the picture means; keep <b>headings in order</b> (h1, then h2, then h3, no skipping); <b>label</b> every input; use real <code>&lt;button&gt;</code> and <code>&lt;a&gt;</code> elements, which work with the keyboard for free; and add <code>aria-label</code> when a control has only an icon.</p><p>Try pressing Tab in the Result window: every control should be reachable.</p>`,
								tryit: [
									`Press Tab and watch the order the controls are reached`,
									`Write a better alt text for the picture`,
									`Add another icon-only button with an aria-label`
								],
								example: `<h1>Accessible page</h1>
<img alt="A red circle, used as a logo" src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><circle cx='25' cy='25' r='22' fill='tomato'/></svg>">
<h2>Search</h2>
<label for="q">Search the site</label>
<input id="q" type="search">
<button aria-label="Close the menu">&times;</button>
<h2>Next section</h2>
<p>Headings go in order: h1, then h2, then h3.</p>`,
								starter: `<button aria-label="Close">&times;</button>
<label for="x">Name</label>
<input id="x">`
							},
							{
								id: 'html-a4', title: 'Figure, picture and inline SVG',
								content: `<p><code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> attach a caption to an image. <code>&lt;picture&gt;</code> lets the browser pick between images. <code>&lt;svg&gt;</code> draws shapes straight in the page, so they stay sharp at any size.</p>`,
								explain: `<p><code>&lt;figure&gt;</code> wraps self-contained content, such as a picture, diagram or code sample, and <code>&lt;figcaption&gt;</code> is its caption. <code>&lt;picture&gt;</code> contains several <code>&lt;source&gt;</code> options and a fallback <code>&lt;img&gt;</code>, so the browser can pick a size or format.</p><p><b>SVG</b> is a drawing language written as HTML-like tags: <code>&lt;rect&gt;</code>, <code>&lt;circle&gt;</code>, <code>&lt;line&gt;</code>, <code>&lt;text&gt;</code>. Because it is vector, it stays sharp at any size.</p>`,
								tryit: [
									`Change the circle's r, cx and fill`,
									`Add a rect or a line to the drawing`,
									`Draw a tiny house from a rect and a polygon`
								],
								example: `<figure>
  <svg width="160" height="90" viewBox="0 0 160 90">
    <rect width="160" height="90" fill="#eef3ff"/>
    <circle cx="50" cy="45" r="28" fill="tomato"/>
    <rect x="90" y="20" width="50" height="50" fill="#2965f1"/>
  </svg>
  <figcaption>Figure 1: a circle and a square.</figcaption>
</figure>
<picture>
  <source media="(min-width: 600px)" srcset="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><rect width='60' height='60' fill='seagreen'/></svg>">
  <img alt="A green square" src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><rect width='60' height='60' fill='gold'/></svg>">
</picture>`,
								starter: `<figure>
  <svg width="100" height="60">
    <circle cx="30" cy="30" r="25" fill="tomato"/>
  </svg>
  <figcaption>My drawing</figcaption>
</figure>`
							},
							{
								id: 'html-a5', title: 'Data attributes and a little JavaScript',
								content: `<p>Any attribute starting with <code>data-</code> can hold your own information. JavaScript reads it with <code>element.dataset</code>. This is how HTML and JavaScript talk to each other.</p>`,
								explain: `<p>Any attribute that begins with <code>data-</code> is yours to invent, like <code>data-colour="tomato"</code>. JavaScript reads it from <code>element.dataset.colour</code>. This keeps information in the HTML where it belongs while the script stays short and reusable.</p><p>The <code>&lt;script&gt;</code> here finds every button, listens for a click, and uses the clicked button's data. Do not worry about every line yet; the JavaScript path explains them.</p>`,
								tryit: [
									`Add a yellow button by adding one more button line`,
									`Add a data-text attribute to each button and show it in the message`,
									`Add a data-size attribute and use it to set the font size`
								],
								example: `<button data-colour="tomato">Red</button>
<button data-colour="seagreen">Green</button>
<button data-colour="royalblue">Blue</button>
<p id="msg">Pick a colour</p>
<script>
  document.querySelectorAll("button").forEach(b => {
    b.addEventListener("click", () => {
      const msg = document.getElementById("msg");
      msg.style.color = b.dataset.colour;
      msg.textContent = "You picked " + b.dataset.colour;
    });
  });
</script>`,
								starter: `<button data-greeting="Hello!">Say hi</button>
<p id="out"></p>
<script>
  const b = document.querySelector("button");
  b.addEventListener("click", () => {
    document.getElementById("out").textContent = b.dataset.greeting;
  });
</script>`
							},
							{
								id: 'html-a6', title: 'Project: a profile card',
								content: `<p>Time to combine: an <code>&lt;article&gt;</code>, an image, headings, a list, a link and a <code>&lt;style&gt;</code> block make a profile card. Change the details to be about you.</p>`,
								explain: `<p>This is where everything comes together. A real page uses a <b>semantic</b> element (<code>article</code>), <b>content</b> elements (heading, image, paragraph, list, link) and a <b>style block</b> to polish them. Read it in layers: first the HTML alone (what is on the page), then the CSS (how it looks).</p><p>Notice how the CSS selects by class (<code>.profile</code>) and by element inside the class (<code>.profile img</code>).</p>`,
								tryit: [
									`Change the name, description and list to be about you`,
									`Change the accent colour in the CSS`,
									`Add a second link or a third list item`
								],
								example: `<style>
  body { font-family: sans-serif; background: #f2f4f7; }
  .profile { max-width: 260px; padding: 16px; background: white; border-radius: 12px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,.2); }
  .profile img { border-radius: 50%; }
  .profile ul { list-style: none; padding: 0; }
  .profile a { color: #2965f1; }
</style>
<article class="profile">
  <img alt="Avatar" src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='%232965f1'/><circle cx='40' cy='32' r='14' fill='white'/><rect x='18' y='52' width='44' height='28' rx='14' fill='white'/></svg>">
  <h2>Sam Rivers</h2>
  <p>Learning to code, one tag at a time.</p>
  <ul>
    <li>Likes: HTML, CSS</li>
    <li>Learning: JavaScript</li>
  </ul>
  <a href="#">Say hello</a>
</article>`,
								starter: `<article>
  <h2>Your name</h2>
  <p>Write about yourself.</p>
  <ul>
    <li>A hobby</li>
  </ul>
</article>`
							},
							{
								id: 'html-a7', title: 'Project: a one-page website',
								content: `<p>Finally, a whole site in one page: a header with a menu, sections the menu jumps to, a table, a contact form and a footer, all styled with one <code>&lt;style&gt;</code> block.</p>`,
								explain: `<p>A real website is many of these ideas at once: a <code>header</code> with a <code>nav</code> of anchor links; <code>section</code>s with ids that those links jump to; a <code>table</code> of data; a <code>form</code> to collect input; and a <code>footer</code>. One <code>style</code> block gives all of it a consistent look.</p><p>When building your own, plan first: list the sections, decide the menu items, then write the HTML structure before touching the CSS.</p>`,
								tryit: [
									`Add an About section and a menu link for it`,
									`Add a row to the price table`,
									`Change the header colour and font in the style block`
								],
								example: `<style>
  body { margin: 0; font-family: sans-serif; }
  header { padding: 12px 16px; background: #2965f1; color: white; }
  nav a { color: white; margin-right: 12px; }
  section { padding: 16px; }
  table { border-collapse: collapse; }
  td, th { border: 1px solid #bbb; padding: 4px 10px; }
  footer { padding: 10px 16px; background: #eee; font-size: 12px; }
</style>
<header>
  <h1>Pet Shop</h1>
  <nav><a href="#prices">Prices</a><a href="#contact">Contact</a></nav>
</header>
<section id="prices">
  <h2>Prices</h2>
  <table>
    <tr><th>Pet</th><th>Price</th></tr>
    <tr><td>Fish</td><td>$5</td></tr>
    <tr><td>Hamster</td><td>$12</td></tr>
  </table>
</section>
<section id="contact">
  <h2>Contact</h2>
  <form>
    <label>Email <input type="email" required></label>
    <button type="submit">Send</button>
  </form>
</section>
<footer>&copy; 2026 Pet Shop</footer>`,
								starter: `<header>
  <h1>My Site</h1>
  <nav><a href="#about">About</a></nav>
</header>
<section id="about">
  <h2>About</h2>
  <p>Build your page here.</p>
</section>
<footer>&copy; 2026</footer>`
							}
					]
				}
			]
		},
		{
			id: 'css',
			name: 'CSS',
			color: '#2965F1',
			blurb: 'The style of a page',
			levels: [
				{
					id: 'beginner', name: 'Beginner',
					blurb: 'Start here, no experience needed: how CSS connects to HTML, how to point at elements, and the basic properties.',
					lessons: [
							{
								id: 'css-b1', title: 'What is CSS?',
								content: `<p>CSS (Cascading Style Sheets) is the language that controls how an HTML page <b>looks</b>: colours, fonts, spacing, sizes and layout.</p>`,
								explain: `<p><b>The problem it solves.</b> HTML only says what each piece of content <i>is</i> (a heading, a paragraph, a list). With no CSS every page looks the same: black text on white in a default font. CSS lets you change that, and because you write a style <i>once</i> and it applies to many elements, you can restyle a whole website by changing one line.</p><p><b>The idea in one sentence:</b> "find these elements, and change these properties." That is written as a <b>rule</b>:</p><pre>p {
  color: tomato;
}</pre><p>Read it as: "find every <code>p</code> (paragraph) and make its text colour tomato." The part before the braces is the <b>selector</b> (which elements); inside the braces are the <b>declarations</b> (what to change).</p><p><b>How to read these lessons.</b> Three windows work together. The <b>HTML</b> box shows the page being styled, the <b>CSS</b> box holds the rules, and the <b>Result</b> shows what the browser draws. In the Testing area you may change <i>both</i> the HTML and the CSS. Look at the HTML first, then the CSS, then the Result, and connect the three.</p>`,
								tryit: [
									`Change the word tomato to another colour such as seagreen`,
									`Change font-size from 20px to 40px`,
									`Add a second rule that makes the h1 blue: h1 { color: blue; }`
								],
								example: `p {
  color: tomato;
  font-size: 20px;
}`,
								starter: `p {
  color: tomato;
}`,
								demo: `<h1>A heading</h1>
<p>The first paragraph.</p>
<p>The second paragraph.</p>`
							},
							{
								id: 'css-b2', title: 'How CSS reaches the HTML',
								content: `<p>CSS does nothing until a page is connected to it. There are three ways to connect CSS to HTML.</p>`,
								explain: `<p><b>1. A style block.</b> Put CSS between <code>&lt;style&gt;</code> tags, usually in the <code>&lt;head&gt;</code>:</p><pre>&lt;head&gt;
  &lt;style&gt;
    p { color: tomato; }
  &lt;/style&gt;
&lt;/head&gt;</pre><p><b>2. An external stylesheet.</b> Save the CSS in its own file such as <code>style.css</code> and link it. Every page that links it shares the same style, which is how real sites stay consistent:</p><pre>&lt;link rel="stylesheet" href="style.css"&gt;</pre><p><b>3. An inline style.</b> Put CSS in one element's <code>style</code> attribute. It only affects that element, so it suits quick tests:</p><pre>&lt;p style="color: tomato;"&gt;Red text&lt;/p&gt;</pre><p>On this website the CSS box is wrapped in a style block for you, so you can focus on the rules. In the demo, the second paragraph has an <b>inline style</b> in the HTML box (green), while the CSS box colours every paragraph red. The inline style wins on that paragraph, because it is the most specific. Start your own pages with method 1 and move to method 2 once you have more than one page.</p>`,
								tryit: [
									`Colour the h1 using the CSS box`,
									`Find which paragraph has an inline style in the HTML box`,
									`Change the inline colour in the HTML box and watch that paragraph change while the CSS rule still styles the other one`
								],
								example: `p {
  color: tomato;
}`,
								starter: `h1 {
  color: royalblue;
}
p {
  color: tomato;
}`,
								demo: `<h1>My page</h1>
<p>A normal paragraph.</p>
<p style="color: seagreen;">A paragraph with an inline style.</p>`
							},
							{
								id: 'css-b3', title: 'Reading the HTML: tags, classes and ids',
								content: `<p>To style something you first need to know how to <b>point at it</b>. CSS points at elements by their <b>tag name</b>, their <b>class</b> or their <b>id</b>. Before writing more CSS, learn to read all three in the HTML.</p>`,
								explain: `<p>Look at one line of HTML:</p><pre>&lt;p class="note" id="intro"&gt;Hello&lt;/p&gt;</pre><ul><li><b>p</b> is the <b>tag</b>: the kind of element (a paragraph).</li><li><b>class="note"</b> is a <b>class</b>: a name shared by a group of elements.</li><li><b>id="intro"</b> is an <b>id</b>: a name belonging to this one element.</li></ul><p>CSS can point at that element in three ways, and each is written differently:</p><pre>p      { ... }   /* by tag: every paragraph */
.note  { ... }   /* by class: a dot, then the class name */
#intro { ... }   /* by id: a hash, then the id name */</pre><p>The <b>dot</b> and the <b>hash</b> exist only in CSS. In the HTML the class is written as <code>note</code>, with no dot.</p><p><b>On this site:</b> in the HTML box every <code>class</code> and <code>id</code> is highlighted, and the line under the lesson lists every tag, class and id found in the demo page. Every name used in the CSS must exist in the HTML: a rule only works if what it points at exists. A typo such as <code>.nots</code> silently does nothing, which is the most common reason a style "does not work".</p>`,
								tryit: [
									`Find each class and id in the HTML box and match it with the list under the lesson`,
									`Change .note to .notes in the CSS (a typo) and watch the yellow background disappear`,
									`Add class="note" to the plain paragraph in the Testing area's HTML box and watch it change`
								],
								example: `h1 {
  color: seagreen;
}
.note {
  background: #fff3b0;
}
#intro {
  font-size: 24px;
}`,
								starter: `.note {
  background: #fff3b0;
}`,
								demo: `<h1>Reading HTML</h1>
<p id="intro">I have the id "intro".</p>
<p class="note">I have the class "note".</p>
<p class="note">I also have the class "note".</p>
<p>I have neither.</p>`
							},
							{
								id: 'css-b4', title: 'Anatomy of a rule',
								content: `<p>A rule has a <b>selector</b> (what to style) and a <b>declaration block</b> in <code>{ }</code>. Each declaration is a <b>property</b>, a colon, a <b>value</b> and a semicolon. Notes between <code>/* */</code> are comments.</p>`,
								explain: `<p>Look at the pieces: <code>h1</code> is the <b>selector</b>; <code>color</code> is a <b>property</b> (what to change); <code>seagreen</code> is a <b>value</b> (what to change it to); a property and value together, ending with <code>;</code>, make a <b>declaration</b>. A rule can hold as many declarations as you like.</p><p>Missing semicolons or braces are the most common beginner errors, and they usually make the rest of the rule stop working. Text between <code>/* */</code> is a comment the browser ignores.</p>`,
								tryit: [
									`Add text-align: center to the h1`,
									`Delete a semicolon and see which style breaks`,
									`Add a comment that explains one of the rules`
								],
								example: `/* selector { property: value; } */
h1 {
  color: seagreen;     /* property: value; */
  text-align: center;
}
p {
  color: gray;
  font-size: 18px;
}`,
								starter: `h1 {
  color: seagreen;
}
/* add a rule for p below */
`,
								demo: `<h1>Title</h1><p>Paragraph one.</p><p>Paragraph two.</p>`
							},
							{
								id: 'css-b5', title: 'Type selectors: styling by tag name',
								content: `<p>The simplest selector is just the name of an HTML tag. It matches <b>every</b> element of that kind on the page.</p>`,
								explain: `<p><code>p { color: gray; }</code> styles every paragraph; <code>h1 { ... }</code> every main heading; <code>li { ... }</code> every list item. This is called a <b>type selector</b> (or element selector). Write only the name: <code>p</code>, not <code>&lt;p&gt;</code>.</p><p>Use type selectors for general rules such as "all text uses this font" or "all links are green". Because they hit everything of that kind, they are not the right tool when you want to style <i>some</i> paragraphs and not others. That is what classes (next lesson) are for.</p><p>Check the HTML box: there is one h1, two h2, three paragraphs and a list. Each rule in the CSS changes all the elements of its tag at once. Count how many things change in the Result for each rule.</p>`,
								tryit: [
									`Add a rule for li that makes the list items bold`,
									`Change the p colour and watch all three paragraphs change together`,
									`Add an h3 element in the HTML box, then write an h3 rule for it`
								],
								example: `h1 {
  color: royalblue;
}
h2 {
  color: seagreen;
}
p {
  color: gray;
  font-size: 18px;
}`,
								starter: `p {
  color: gray;
}`,
								demo: `<h1>Main title</h1>
<h2>First section</h2>
<p>Paragraph one.</p>
<p>Paragraph two.</p>
<h2>Second section</h2>
<p>Paragraph three.</p>
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>`
							},
							{
								id: 'css-b6', title: 'Class selectors: styling a group',
								content: `<p>A <b>class selector</b> starts with a <b>dot</b> and styles every element that has that class. It lets you style some elements and leave others alone.</p>`,
								explain: `<p>In the HTML you give elements a class: <code>&lt;p class="highlight"&gt;</code>. In the CSS you write a dot and the same name: <code>.highlight { background: yellow; }</code>. Only elements carrying the class change, however many there are and whatever their tag.</p><p>One element can have <b>several classes</b>, separated by spaces in the HTML (<code>class="highlight big"</code>), and it receives the rules of all of them. You can also tie a class to a tag: <code>p.highlight</code> matches only paragraphs with that class.</p><p>Classes are the most used selector in real CSS because they are reusable and do not depend on the tag. In the demo, a <code>p</code> and a <code>div</code> both have <code>class="highlight"</code>, so one rule styles both, and one paragraph has two classes, so it gets two rules. The plain paragraph has no class, so nothing touches it.</p>`,
								tryit: [
									`Add class="highlight" to the plain paragraph in the HTML box`,
									`Make .big have font-size: 40px`,
									`Write p.highlight instead of .highlight and see which elements still change`
								],
								example: `.highlight {
  background: #fff3b0;
  padding: 6px;
}
.big {
  font-size: 24px;
}`,
								starter: `.highlight {
  background: #fff3b0;
}`,
								demo: `<p class="highlight">A paragraph with the class "highlight".</p>
<div class="highlight">A div with the same class.</div>
<p class="highlight big">Two classes: "highlight" and "big".</p>
<p>A plain paragraph with no class.</p>`
							},
							{
								id: 'css-b7', title: 'Id selectors: styling one element',
								content: `<p>An <b>id selector</b> starts with a <b>hash</b> and styles the one element that has that id.</p>`,
								explain: `<p>In the HTML: <code>&lt;h1 id="main-title"&gt;</code>. In the CSS: <code>#main-title { color: tomato; }</code>. An id may be used on <b>only one element</b> per page, so an id selector styles exactly one thing: the page title, the main menu, the footer.</p><p><b>Class or id?</b> If you might want the same style on more than one element, use a class. If it is truly unique an id is fine. Many developers use classes for nearly all styling and keep ids for link targets and JavaScript.</p><p><b>Which wins?</b> An id selector is more <b>specific</b> than a class selector, and a class is more specific than a tag. When two rules set the same property on the same element, the more specific one wins. In the demo the last paragraph has the class <code>note</code> (blue) <i>and</i> the id <code>special</code> (green): the id rule wins, so it turns green. Try swapping the order of the rules: it makes no difference, because specificity decides, not order.</p>`,
								tryit: [
									`Change the colour of #special`,
									`Delete the #special rule and watch the paragraph fall back to the class colour`,
									`Add a rule for p with a colour and see that the class and id still beat it`
								],
								example: `#main-title {
  color: tomato;
}
.note {
  color: royalblue;
}
#special {
  color: seagreen;
}`,
								starter: `#main-title {
  color: tomato;
}`,
								demo: `<h1 id="main-title">The page title</h1>
<p class="note">A paragraph with a class.</p>
<p class="note" id="special">A paragraph with a class and an id.</p>`
							},
							{
								id: 'css-b8', title: 'Colours and backgrounds',
								content: `<p>Colours can be names (<code>tomato</code>), hex codes (<code>#2965f1</code>) or <code>rgb(200, 50, 50)</code>. <code>color</code> is the text; <code>background-color</code> sits behind it.</p>`,
								explain: `<p>Colours can be written as a <b>name</b> (<code>tomato</code>), a <b>hex code</b> (<code>#2965f1</code>: red, green and blue as pairs of digits) or <code>rgb(200, 50, 50)</code>. <code>color</code> sets the <i>text</i> colour and <code>background-color</code> the area behind it.</p><p>Always check contrast: light text on a light background is hard to read.</p>`,
								tryit: [
									`Change the body background to a different hex code`,
									`Colour the h1 with rgb(0, 150, 100)`,
									`Give the paragraph a dark background and light text`
								],
								example: `body { background-color: #f4f4f8; }
h1 { color: #2965f1; }
p {
  color: rgb(200, 50, 50);
  background-color: lightyellow;
}`,
								starter: `h1 { color: #2965f1; }`,
								demo: `<h1>Colours</h1><p>Text can have a colour and a background.</p>`,
								branches: [
									{
										id: 'css-b8-1', title: 'Colour formats: names, hex, rgb and hsl',
										content: `<p>The same colour can be written four ways. Knowing them all lets you read anyone's CSS.</p>`,
										explain: `<p><b>Names</b>: about 140 words such as <code>tomato</code>. <b>Hex</b>: <code>#RRGGBB</code>, two hexadecimal digits (00 to ff) each for red, green and blue; <code>#f80</code> is shorthand for <code>#ff8800</code>. <b>rgb()</b>: the same three amounts as ordinary numbers 0 to 255. <b>hsl()</b>: hue (0 to 360, a position on the colour wheel: 0 red, 120 green, 240 blue), saturation (grey to vivid, in %) and lightness (black 0% to white 100%). HSL is the easiest to adjust: keep the hue and change the lightness to get lighter or darker versions of one colour.</p>`,
										tryit: [
											`Change the hsl hue to 240 for blue`,
											`Lower the lightness of the hsl colour to make it darker`,
											`Write #ff0000, rgb(255, 0, 0) and red: they are all the same`
										],
										example: `.name { color: tomato; }
.hex  { color: #2965f1; }
.hex3 { color: #f80; }
.rgb  { color: rgb(41, 101, 241); }
.hsl  { color: hsl(150, 60%, 35%); }`,
										starter: `.hsl {
  color: hsl(150, 60%, 35%);
}`,
										demo: `<p class="name">Colour name: tomato</p>
<p class="hex">Hex: #2965f1</p>
<p class="hex3">Short hex: #f80</p>
<p class="rgb">rgb(41, 101, 241)</p>
<p class="hsl">hsl(150, 60%, 35%)</p>`
									},
									{
										id: 'css-b8-2', title: 'Transparency: rgba, hsla and opacity',
										content: `<p>Colours can be see-through. There are two different tools, and the difference matters.</p>`,
										explain: `<p><code>rgba(r, g, b, a)</code> and <code>hsla(h, s, l, a)</code> add an <b>alpha</b> value from 0 (invisible) to 1 (solid) to <i>one colour</i>, such as a background. The text on top stays solid. <code>opacity</code> makes the <b>whole element</b> see-through, including its text and its children. Use rgba for a faint background behind readable text, and opacity for fading an entire element.</p>`,
										tryit: [
											`Change the alpha of .half to 0.2 and then 0.9`,
											`Compare the text in .faint and .fade: which one is faded too?`,
											`Add a new box with background rgba(0, 0, 0, 0.5)`
										],
										example: `body { background: #dfe9ff; }
div { padding: 10px; margin: 6px 0; }
.solid { background: rgb(41, 101, 241); color: white; }
.half  { background: rgba(41, 101, 241, 0.5); }
.faint { background: hsla(10, 90%, 55%, 0.25); }
.fade  { opacity: 0.4; background: seagreen; color: white; }`,
										starter: `.half {
  background: rgba(41, 101, 241, 0.5);
  padding: 10px;
}`,
										demo: `<div class="solid">Solid colour</div>
<div class="half">Half-transparent background, text solid</div>
<div class="faint">Faint hsla background</div>
<div class="fade">Whole element faded with opacity</div>`
									}
								]
							},
							{
								id: 'css-b9', title: 'Text and fonts',
								content: `<p>Change how text looks with <code>font-family</code>, <code>font-size</code>, <code>font-weight</code>, <code>text-align</code> and <code>line-height</code>.</p>`,
								explain: `<p>The main text properties: <code>font-family</code> (a list; the browser uses the first one available, so end with <code>serif</code> or <code>sans-serif</code>), <code>font-size</code>, <code>font-weight</code> (<code>bold</code> or 100 to 900), <code>font-style</code> (<code>italic</code>), <code>text-align</code> (left, center, right, justify), <code>line-height</code> (a plain number such as 1.6 is easy to read), <code>text-decoration</code> and <code>letter-spacing</code>.</p>`,
								tryit: [
									`Change font-family to monospace`,
									`Change line-height to 2`,
									`Add letter-spacing: 3px and text-transform: uppercase`
								],
								example: `p {
  font-family: Georgia, serif;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  line-height: 1.6;
}`,
								starter: `p {
  font-size: 20px;
}`,
								demo: `<p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>`,
								branches: [
									{
										id: 'css-b9-1', title: 'Font properties',
										content: `<p>Font properties choose <b>which typeface</b> is used and how big, heavy and slanted it is.</p>`,
										explain: `<p><code>font-family</code> is a list in order of preference, ending with a generic fallback (<code>serif</code>, <code>sans-serif</code>, <code>monospace</code>) in case none of the named fonts is installed. Names with spaces go in quotes: <code>"Times New Roman"</code>. <code>font-size</code> sets the size. <code>font-weight</code> is <code>normal</code>, <code>bold</code> or 100 to 900. <code>font-style: italic</code> slants. <code>font-variant: small-caps</code> uses small capitals. The shorthand <code>font: italic bold 18px/1.5 Georgia, serif</code> sets several at once (size and family are required).</p>`,
										tryit: [
											`Put monospace first in .family`,
											`Make .weight a heavy 900`,
											`Try the font shorthand on a new class`
										],
										example: `.family { font-family: Georgia, "Times New Roman", serif; }
.size   { font-size: 28px; }
.weight { font-weight: 700; }
.style  { font-style: italic; }
.caps   { font-variant: small-caps; }
.short  { font: italic bold 18px/1.5 Verdana, sans-serif; }`,
										starter: `.family {
  font-family: Georgia, serif;
  font-size: 22px;
}`,
										demo: `<p class="family">font-family: a serif font</p>
<p class="size">font-size: 28px</p>
<p class="weight">font-weight: 700</p>
<p class="style">font-style: italic</p>
<p class="caps">font-variant: small-caps</p>
<p class="short">The font shorthand</p>`
									},
									{
										id: 'css-b9-2', title: 'Text properties',
										content: `<p>Text properties control how lines of text are <b>laid out and decorated</b>, whatever the font.</p>`,
										explain: `<p><code>text-align</code> (left, center, right, justify) lines up text. <code>text-decoration</code> adds <code>underline</code>, <code>overline</code>, <code>line-through</code> or <code>none</code>. <code>text-transform</code> changes capitals (<code>uppercase</code>, <code>lowercase</code>, <code>capitalize</code>). <code>letter-spacing</code> and <code>word-spacing</code> add gaps. <code>line-height</code> sets the space between lines (a plain number like 1.6 is best). <code>text-indent</code> indents the first line, and <code>text-shadow</code> (x, y, blur, colour) adds a shadow.</p>`,
										tryit: [
											`Change .align to right`,
											`Give .shadow a bigger blur`,
											`Combine uppercase and letter-spacing in one rule`
										],
										example: `.align  { text-align: center; }
.deco   { text-decoration: underline overline; }
.strike { text-decoration: line-through; }
.upper  { text-transform: uppercase; letter-spacing: 3px; }
.height { line-height: 2; }
.indent { text-indent: 30px; }
.shadow { font-size: 30px; text-shadow: 2px 2px 4px gray; }`,
										starter: `.upper {
  text-transform: uppercase;
  letter-spacing: 3px;
}`,
										demo: `<p class="align">text-align: center</p>
<p class="deco">underline and overline</p>
<p class="strike">line-through</p>
<p class="upper">uppercase with letter-spacing</p>
<p class="height">line-height: 2. This sentence is long enough to wrap onto a second line so you can see the gap between lines.</p>
<p class="indent">text-indent pushes in only the first line of a paragraph, as in a book.</p>
<p class="shadow">text-shadow</p>`
									}
								]
							},
							{
								id: 'css-b10', title: 'Units: px, %, em and rem',
								content: `<p>Sizes need a unit. <code>px</code> is a fixed pixel. <code>%</code> is relative to the parent. <code>em</code> is relative to the current font size, <code>rem</code> to the page's base size and <code>vw</code> to the width of the window.</p>`,
								explain: `<p>Sizes need units. <code>px</code> is a fixed pixel. <code>%</code> is relative to the parent element. <code>em</code> is relative to the element's font size, <code>rem</code> to the page's root font size (usually 16px), and <code>vw</code> to 1% of the window's width.</p><p>Prefer <code>rem</code> for text and <code>%</code> or <code>vw</code> for widths: they adapt to the user's settings and screen. Resize the window to watch <code>%</code> and <code>vw</code> change.</p>`,
								tryit: [
									`Resize the window and watch the % and vw paragraphs`,
									`Change 1.5rem to 3rem`,
									`Make .pct 80% wide`
								],
								example: `.px  { font-size: 14px; }
.em  { font-size: 1.5em; }
.rem { font-size: 1.5rem; }
.pct { width: 50%; background: #e3ecff; }
.vw  { width: 40vw; background: #ffe3e3; }`,
								starter: `.pct { width: 50%; background: #e3ecff; }`,
								demo: `<p class="px">14px text</p><p class="em">1.5em text</p><p class="rem">1.5rem text</p><p class="pct">50% wide</p><p class="vw">40vw wide</p>`,
								branches: [
									{
										id: 'css-b10-1', title: 'Absolute units: px and friends',
										content: `<p><b>Absolute</b> units always mean the same size, whatever else is on the page.</p>`,
										explain: `<p><code>px</code> (pixel) is the unit of screens, and the one you will use most. <code>pt</code> (point, 1/72 inch), <code>cm</code>, <code>mm</code> and <code>in</code> are real-world units, meant for printing. On a screen "1cm" is only roughly a centimetre. Pixels are easy to reason about but do not adapt to the user's settings; the next branch covers units that do.</p>`,
										tryit: [
											`Make .px 300px wide`,
											`Compare 1cm and 10mm: they are equal`,
											`Change .pt to 24pt`
										],
										example: `div { background: #dfe9ff; margin-bottom: 6px; padding: 4px; }
.px { width: 200px; }
.cm { width: 4cm; }
.mm { width: 40mm; }
.pt { font-size: 18pt; }`,
										starter: `.px {
  width: 200px;
  background: #dfe9ff;
}`,
										demo: `<div class="px">width: 200px</div>
<div class="cm">width: 4cm</div>
<div class="mm">width: 40mm</div>
<div class="pt">font-size: 18pt</div>`
									},
									{
										id: 'css-b10-2', title: 'Relative units: %, em and rem',
										content: `<p><b>Relative</b> units are measured against something else, so they adapt: a good design uses them for text and widths.</p>`,
										explain: `<p><code>%</code> is a share of the <b>parent's</b> size (for <code>width</code>) . <code>em</code> is a multiple of the element's <b>own font size</b> (and for <code>font-size</code>, of the parent's), so nested ems <i>multiply</i>: 1.5em inside 1.5em is 2.25 times the original. <code>rem</code> is a multiple of the <b>root</b> font size (normally 16px), so it never compounds: 1.5rem is always 24px. Rule of thumb: <code>rem</code> for font sizes, <code>%</code> for widths, <code>em</code> for spacing that should scale with the text.</p>`,
										tryit: [
											`Make .parent font-size 30px: see .em children grow but .rem stay`,
											`Change .half to 25%`,
											`Predict the size of .em inside .em before checking`
										],
										example: `.parent { font-size: 20px; background: #eef3ff; padding: 6px; }
.em     { font-size: 1.5em; }
.rem    { font-size: 1.5rem; }
.half   { width: 50%; background: #ffe3e3; }`,
										starter: `.parent {
  font-size: 20px;
}
.em  { font-size: 1.5em; }
.rem { font-size: 1.5rem; }`,
										demo: `<div class="parent">
  Parent: 20px
  <p class="em">1.5em: 30px, because the parent is 20px</p>
  <div class="em">
    <p class="em">nested em: 1.5em of 1.5em</p>
  </div>
  <p class="rem">1.5rem: always 24px</p>
  <p class="half">width: 50% of the parent</p>
</div>`
									},
									{
										id: 'css-b10-3', title: 'Viewport units and calc()',
										content: `<p>Some units follow the <b>size of the window</b>, and <code>calc()</code> lets you mix units in one measurement.</p>`,
										explain: `<p><code>vw</code> is 1% of the viewport's width, <code>vh</code> 1% of its height, and <code>vmin</code> / <code>vmax</code> the smaller / larger of the two. They are handy for full-screen sections and text that grows with the window. <code>calc()</code> does arithmetic with mixed units, for example <code>calc(100% - 40px)</code> is "everything except 40 pixels"; spaces around <code>+</code> and <code>-</code> are required. In this lesson the "window" is the Result frame, so resizing the window changes the sizes.</p>`,
										tryit: [
											`Resize the window and watch .vw and .calc`,
											`Change .tall to 60vh`,
											`Make .calc take 100% minus 100px`
										],
										example: `div { background: #dfe9ff; margin-bottom: 6px; padding: 4px; }
.vw   { width: 50vw; }
.tall { height: 30vh; background: #ffe3e3; }
.calc { width: calc(100% - 40px); background: #e3ffe9; }`,
										starter: `.vw {
  width: 50vw;
  background: #dfe9ff;
}`,
										demo: `<div class="vw">width: 50vw</div>
<div class="tall">height: 30vh</div>
<div class="calc">width: calc(100% - 40px)</div>`
									}
								]
							},
							{
								id: 'css-b11', title: 'The box model',
								content: `<p>Every element is a box: the content, then <code>padding</code> (space inside), the <code>border</code>, then <code>margin</code> (space outside).</p>`,
								explain: `<p>Every element is a rectangle made of four layers, from the inside out: <b>content</b>, <b>padding</b> (space inside the border), <b>border</b> and <b>margin</b> (space outside). <code>width</code> and <code>height</code> size the content, so the total is bigger than the width you set. With <code>box-sizing: border-box</code> the width includes padding and border, which is easier to plan with.</p><p>Shorthands: <code>padding: 10px 20px</code> is top and bottom, then left and right; four values go clockwise from the top.</p>`,
								tryit: [
									`Change padding to 4px 40px`,
									`Add box-sizing: border-box and compare the width`,
									`Set margin: 0 auto to centre the box`
								],
								example: `.box {
  width: 200px;
  padding: 16px;
  border: 4px solid #2965f1;
  margin: 20px;
  background: #eef3ff;
}`,
								starter: `.box {
  padding: 16px;
  border: 4px solid #2965f1;
}`,
								demo: `<div class="box">Content, padding, border and margin.</div>`,
								branches: [
									{
										id: 'css-b11-1', title: 'Padding in depth',
										content: `<p><b>Padding</b> is the space between an element's content and its border. It is inside the element, so the background colour shows in it.</p>`,
										explain: `<p>Set one side at a time (<code>padding-top</code>, <code>-right</code>, <code>-bottom</code>, <code>-left</code>) or use the shorthand: <b>one value</b> = all sides; <b>two values</b> = top and bottom, then left and right; <b>three</b> = top, left and right, bottom; <b>four</b> = top, right, bottom, left (clockwise, like a clock). Padding is never negative, and it makes the element bigger (unless you use <code>box-sizing: border-box</code>, see below).</p>`,
										tryit: [
											`Change .two to 5px 40px`,
											`Write the four-value version of .one using different numbers`,
											`Add padding-left only`
										],
										example: `div { background: #dfe9ff; border: 2px solid #2965f1; margin-bottom: 8px; }
.one   { padding: 10px; }
.two   { padding: 10px 30px; }
.three { padding: 5px 20px 30px; }
.four  { padding: 5px 10px 20px 40px; }
.side  { padding-left: 50px; }`,
										starter: `.one {
  padding: 10px;
  background: #dfe9ff;
}`,
										demo: `<div class="one">padding: 10px</div>
<div class="two">padding: 10px 30px</div>
<div class="three">padding: 5px 20px 30px</div>
<div class="four">padding: 5px 10px 20px 40px</div>
<div class="side">padding-left: 50px</div>`
									},
									{
										id: 'css-b11-2', title: 'Margin in depth',
										content: `<p><b>Margin</b> is the space <i>outside</i> an element's border, pushing other elements away. It is always transparent.</p>`,
										explain: `<p>Margin uses the same one-to-four value shorthand as padding. Special tricks: <code>margin: 0 auto</code> on a block with a <code>width</code> <b>centres</b> it horizontally; a <b>negative</b> margin pulls an element toward its neighbour. <b>Margin collapsing</b>: when the vertical margins of two blocks touch, they do not add up: the larger one wins. Two blocks with 20px and 30px between them are 30px apart, not 50.</p>`,
										tryit: [
											`Remove margin: 0 auto from .centre and watch it jump left`,
											`Change the margins of .a and .b and measure the gap`,
											`Give .pull a negative top margin`
										],
										example: `.centre { width: 150px; margin: 0 auto; background: #dfe9ff; padding: 6px; }
.a { margin-bottom: 20px; background: #ffe3e3; padding: 6px; }
.b { margin-top: 30px; background: #e3ffe9; padding: 6px; }`,
										starter: `.centre {
  width: 150px;
  margin: 0 auto;
  background: #dfe9ff;
}`,
										demo: `<div class="centre">margin: 0 auto</div>
<div class="a">margin-bottom: 20px</div>
<div class="b">margin-top: 30px (the gap is 30px, not 50px)</div>`
									},
									{
										id: 'css-b11-3', title: 'box-sizing, width and height',
										content: `<p>By default <code>width</code> only measures the <b>content</b>, so padding and border make the box bigger than you asked. <code>box-sizing</code> changes that.</p>`,
										explain: `<p>With the default <code>content-box</code>, a box with <code>width: 200px; padding: 20px; border: 5px</code> is 250px wide. With <code>box-sizing: border-box</code> the width <b>includes</b> padding and border, so it is exactly 200px. Most developers set <code>* { box-sizing: border-box; }</code> at the top of every stylesheet because it makes layouts easier to plan. <code>min-width</code> / <code>max-width</code> and <code>min-height</code> / <code>max-height</code> set limits: <code>max-width: 100%</code> keeps something from overflowing its parent, and a height left alone is automatic and grows with the content.</p>`,
										tryit: [
											`Add border-box to .content and compare the widths`,
											`Set max-width: 150px on .max`,
											`Add * { box-sizing: border-box; } at the top`
										],
										example: `div { width: 200px; padding: 20px; border: 5px solid #2965f1; background: #dfe9ff; margin-bottom: 8px; }
.border { box-sizing: border-box; }
.max { max-width: 120px; }`,
										starter: `div {
  width: 200px;
  padding: 20px;
  border: 5px solid #2965f1;
}`,
										demo: `<div class="content">content-box (default): 250px wide in total</div>
<div class="border">border-box: exactly 200px wide</div>
<div class="max">max-width: 120px</div>`
									}
								]
							},
							{
								id: 'css-b12', title: 'Borders and rounded corners',
								content: `<p>A border has a width, a style (<code>solid</code>, <code>dashed</code>, <code>dotted</code>, <code>double</code>) and a colour. <code>border-radius</code> rounds the corners, and <code>50%</code> on a square makes a circle.</p>`,
								explain: `<p>The <code>border</code> shorthand is width, style, colour. Styles include <code>solid</code>, <code>dashed</code>, <code>dotted</code> and <code>double</code>. You can style one side only (<code>border-bottom</code>). <code>border-radius</code> rounds corners: a pixel value for soft corners, and <code>50%</code> on a square makes a circle.</p>`,
								tryit: [
									`Round .a with border-radius: 20px`,
									`Turn .e into a square by changing border-radius`,
									`Give .d a thick red border-left`
								],
								example: `.a { border: 3px solid tomato; padding: 8px; margin: 8px 0; }
.b { border: 3px dashed seagreen; padding: 8px; margin: 8px 0; }
.c { border: 3px dotted royalblue; border-radius: 12px; padding: 8px; margin: 8px 0; }
.d { border-bottom: 4px double #333; padding: 8px; margin: 8px 0; }
.e { width: 70px; height: 70px; background: gold; border-radius: 50%; }`,
								starter: `.a {
  border: 3px solid tomato;
  border-radius: 12px;
  padding: 8px;
}`,
								demo: `<div class="a">solid</div><div class="b">dashed</div><div class="c">dotted + rounded</div><div class="d">double bottom</div><div class="e"></div>`,
								branches: [
									{
										id: 'css-b12-1', title: 'Border sides and shorthands',
										content: `<p>A border can be set all at once, side by side, or property by property.</p>`,
										explain: `<p><code>border: 2px solid red</code> sets width, style and colour on all four sides. Name a side to style only that one: <code>border-top</code>, <code>border-right</code>, <code>border-bottom</code>, <code>border-left</code>. Or set one aspect at a time: <code>border-width</code>, <code>border-style</code> and <code>border-color</code>, each of which accepts one to four values (clockwise from the top). A border needs a <b>style</b> to show: without one nothing is drawn.</p>`,
										tryit: [
											`Give .sides a thicker border-left`,
											`Change the border-style values to dashed double dotted solid`,
											`Remove the style from .none and see no border appear`
										],
										example: `div { padding: 8px; margin-bottom: 10px; }
.all   { border: 3px solid tomato; }
.sides { border-top: 4px solid #2965f1; border-bottom: 4px solid seagreen; }
.four  { border-width: 2px 6px 2px 6px; border-style: dashed double dotted solid; border-color: #444; }
.none  { border: 3px red; }`,
										starter: `.all {
  border: 3px solid tomato;
  padding: 8px;
}`,
										demo: `<div class="all">border: 3px solid tomato</div>
<div class="sides">top and bottom borders only</div>
<div class="four">four different values</div>
<div class="none">no style given, so no border</div>`
									},
									{
										id: 'css-b12-2', title: 'Outlines and rounded shapes',
										content: `<p><code>outline</code> draws a line outside the border without changing the layout, and <code>border-radius</code> can make pills and circles.</p>`,
										explain: `<p><code>outline</code> works like <code>border</code> but takes no space, so it can never push things around; <code>outline-offset</code> moves it away from the element. Browsers draw one on focus, so do not remove it without a replacement. <code>border-radius</code> takes one to four values (top-left, top-right, bottom-right, bottom-left): a small value for soft corners, <code>999px</code> for a pill shape and <code>50%</code> on a square for a circle. An ellipse needs two numbers separated by a slash.</p>`,
										tryit: [
											`Increase outline-offset to 8px`,
											`Make .pill taller and see it stay round`,
											`Give .leaf radii of 0 40px 0 40px`
										],
										example: `div { margin: 12px 0; padding: 10px; background: #eef3ff; }
.outline { outline: 3px solid tomato; outline-offset: 4px; }
.pill    { border-radius: 999px; background: #2965f1; color: white; text-align: center; }
.circle  { width: 70px; height: 70px; border-radius: 50%; background: seagreen; }
.leaf    { border-radius: 0 40px 0 40px; background: gold; }`,
										starter: `.pill {
  border-radius: 999px;
  background: #2965f1;
  color: white;
  padding: 10px;
}`,
										demo: `<div class="outline">An outline with an offset</div>
<div class="pill">A pill</div>
<div class="circle"></div>
<div class="leaf">Two opposite rounded corners</div>`
									}
								]
							},
							{
								id: 'css-b13', title: 'Inheritance and the cascade',
								content: `<p>Two questions every beginner asks: "why did the elements inside change too?" and "why did my rule not work?" The answers are <b>inheritance</b> and the <b>cascade</b>.</p>`,
								explain: `<p><b>Inheritance.</b> Some properties, mainly text ones such as <code>color</code>, <code>font-family</code> and <code>font-size</code>, are passed from an element to everything inside it. Set a <code>color</code> on the <code>div</code> and the paragraphs inside become that colour without extra rules. Others, like <code>border</code>, <code>padding</code> and <code>background</code>, are <b>not</b> inherited.</p><p><b>The cascade.</b> When several rules set the same property on the same element, the browser picks one winner by three checks in this order: (1) <b>specificity</b>: id beats class beats tag; (2) if equal, the rule written <b>later</b> wins; (3) an inline <code>style</code> attribute beats rules in a style block. A rule that targets an element directly also beats an inherited value.</p><p>In the demo the box sets a colour, the <code>p</code> rule sets another, and <code>.special</code> sets a third. If a rule seems ignored, ask: is another rule more specific, or later? Delete the <code>p</code> rule and watch the first paragraph inherit the box's colour again. <code>!important</code> forces a rule to win; treat it as a last resort.</p>`,
								tryit: [
									`Delete the p rule: the first paragraph now inherits royalblue from .box`,
									`Move .special above the p rule: it still wins, because a class is more specific than a tag`,
									`Notice the border is not inherited: the paragraphs have none`
								],
								example: `.box {
  color: royalblue;
  border: 2px solid gray;
  padding: 10px;
}
p {
  color: seagreen;
}
.special {
  color: tomato;
}`,
								starter: `.box {
  color: royalblue;
}
p {
  color: seagreen;
}`,
								demo: `<div class="box">
  <p>A paragraph inside the box.</p>
  <p class="special">A paragraph with a class.</p>
</div>`
							},
							{
								id: 'css-b14', title: 'Styling links and lists',
								content: `<p>Links and lists are everywhere on the web, and both have default styles (blue underlined links, round bullets) that you will often want to change.</p>`,
								explain: `<p><b>Links</b> (<code>a</code>): <code>color</code> changes the text and <code>text-decoration: none</code> removes the underline. <b>Lists</b> (<code>ul</code>, <code>ol</code>, <code>li</code>): <code>list-style</code> changes or removes the markers (<code>none</code>, <code>square</code>, <code>circle</code>, <code>decimal</code>), and <code>padding-left</code> controls the indent. A very common pattern is a menu: a list with no bullets and no left padding.</p><p>In the demo, <code>a</code> is a type selector and <code>.menu</code> is a class selector. The rule <code>.menu li</code> has a space between the two names: it means "every li <i>inside</i> an element with the class menu", so the first list is styled and the second is not. The Experienced level explains combining selectors fully.</p>`,
								tryit: [
									`Change the link colour and put the underline back with text-decoration: underline`,
									`Change list-style on the ordered list to upper-roman`,
									`Add class="menu" to the ol in the HTML box and see what changes`
								],
								example: `a {
  color: seagreen;
  text-decoration: none;
}
.menu {
  list-style: none;
  padding-left: 0;
}
.menu li {
  padding: 4px 0;
}
ol {
  list-style: square;
}`,
								starter: `a {
  color: seagreen;
  text-decoration: none;
}`,
								demo: `<a href="#">A normal link</a>
<ul class="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>
<ol>
  <li>First</li>
  <li>Second</li>
</ol>`
							}
					]
				},
				{
					id: 'experienced', name: 'Experienced',
					blurb: 'What you can do with those pieces: layout, states and responsive pages.',
					lessons: [
							{
								id: 'css-e1', title: 'Display and size',
								content: `<p><code>display</code> decides how an element flows: <code>block</code> (own line), <code>inline</code> (inside text) or <code>inline-block</code> (inside text, but with a size). <code>width</code> and <code>height</code> set the size.</p>`,
								explain: `<p>Every element has a <code>display</code> value. <b>block</b> elements (div, p, h1) start on a new line and fill the width. <b>inline</b> elements (span, a) flow within text and ignore width and height. <b>inline-block</b> flows in text but accepts width, height and vertical margin. <b>none</b> removes the element completely.</p><p>Changing <code>display</code> is the first step of every layout.</p>`,
								tryit: [
									`Change .tag to display: block and see what happens`,
									`Give .note a height of 80px`,
									`Set .tag to display: none, then bring it back`
								],
								example: `.tag {
  display: inline-block;
  padding: 4px 12px;
  margin: 2px;
  background: #e3ecff;
  border-radius: 12px;
}
.note {
  display: block;
  width: 60%;
  background: lightyellow;
}`,
								starter: `.tag {
  display: inline-block;
  padding: 4px 12px;
  background: #e3ecff;
}`,
								demo: `<span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">JS</span><div class="note">I am a block with a width.</div>`,
								branches: [
									{
										id: 'css-e1-1', title: 'Block, inline and inline-block compared',
										content: `<p>The three common <code>display</code> values react differently to width, height and margin. Seeing them side by side explains most layout surprises.</p>`,
										explain: `<p><b>block</b>: starts on a new line, fills the available width, accepts width, height and all margins. <b>inline</b>: flows within the text, is only as big as its content, <i>ignores</i> width, height and vertical margin. <b>inline-block</b>: flows within the text like inline, but accepts width, height and margin like a block. Each row below uses the same box: only <code>display</code> differs. Many elements already have a default: div, p and h1 are block; span, a and strong are inline.</p>`,
										tryit: [
											`Change .inline to inline-block`,
											`Change .block width and watch whether neighbours move up`,
											`Add display: block to a span in the HTML box`
										],
										example: `span { background: #ffe3e3; margin: 6px; padding: 4px; width: 120px; height: 40px; }
.block        { display: block; }
.inline       { display: inline; }
.inline-block { display: inline-block; }`,
										starter: `span {
  background: #ffe3e3;
  padding: 4px;
  width: 120px;
  height: 40px;
  display: inline-block;
}`,
										demo: `<span class="block">block</span>
<span class="block">block</span>
<br>
<span class="inline">inline</span>
<span class="inline">inline</span>
<br>
<span class="inline-block">inline-block</span>
<span class="inline-block">inline-block</span>`
									},
									{
										id: 'css-e1-2', title: 'Hiding elements: display, visibility, opacity',
										content: `<p>There are three ways to make an element disappear, and they differ in what happens to the <b>space</b> it occupied.</p>`,
										explain: `<p><code>display: none</code> removes the element completely: it takes no space and its neighbours close up. <code>visibility: hidden</code> hides it but <b>keeps its space</b>. <code>opacity: 0</code> makes it fully see-through, keeps its space <b>and</b> it can still be clicked. Choose <code>display: none</code> to remove something, and <code>visibility</code> or <code>opacity</code> when the layout must not shift (opacity can also be animated).</p>`,
										tryit: [
											`Change .gone to visibility: hidden and watch the gap appear`,
											`Try opacity: 0.5`,
											`Remove all three rules to see the original page`
										],
										example: `div { background: #dfe9ff; margin: 4px 0; padding: 8px; }
.gone   { display: none; }
.hidden { visibility: hidden; }
.clear  { opacity: 0; }`,
										starter: `.gone {
  display: none;
}`,
										demo: `<div>Always visible (top)</div>
<div class="gone">display: none (no space)</div>
<div class="hidden">visibility: hidden (keeps space)</div>
<div class="clear">opacity: 0 (keeps space)</div>
<div>Always visible (bottom)</div>`
									}
								]
							},
							{
								id: 'css-e2', title: 'Combining selectors',
								content: `<p>Selectors can be combined. <code>h1, h2</code> styles both. <code>.menu a</code> means links <i>inside</i> .menu. <code>.menu &gt; li</code> means direct children only. <code>li:first-child</code> picks the first, and <code>input[type="text"]</code> picks by attribute.</p>`,
								explain: `<p>Selectors can describe relationships. A space (<code>.menu a</code>) means "any a anywhere inside .menu"; <code>&gt;</code> (<code>.menu &gt; li</code>) means direct children only; a comma (<code>h1, h2</code>) applies one rule to several selectors; <code>:first-child</code> and <code>:nth-child(2)</code> pick by position; <code>[type="text"]</code> picks by attribute.</p><p>Combining selectors lets you style precisely without adding a class to every element.</p>`,
								tryit: [
									`Style the last item with li:last-child`,
									`Use li:nth-child(2) to colour the second item`,
									`Change the attribute selector to input[type="number"]`
								],
								example: `h1, h2 { color: #2965f1; }
.menu a { color: tomato; text-decoration: none; }
.menu > li { font-weight: bold; }
li:first-child { color: seagreen; }
input[type="text"] { border: 2px solid #2965f1; }`,
								starter: `.menu a {
  color: tomato;
}
li:first-child {
  color: seagreen;
}`,
								demo: `<h1>Title</h1><h2>Subtitle</h2><ul class="menu"><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul><input type="text" placeholder="text"> <input type="number">`
							},
							{
								id: 'css-e3', title: 'Hover, focus and active',
								content: `<p>Pseudo-classes style an element in a certain state: <code>:hover</code> (mouse over), <code>:focus</code> (selected for typing) and <code>:active</code> (being pressed). Try each one in the Result window.</p>`,
								explain: `<p>Pseudo-classes style an element in a particular <b>state</b>. <code>:hover</code> is when the mouse is over it, <code>:focus</code> when it is selected with the mouse, a tap or the keyboard, and <code>:active</code> while it is pressed. For links, put the hover rule after the normal rule.</p><p>Never remove the focus outline without adding another style, because keyboard users need to see where they are.</p>`,
								tryit: [
									`Change the colour that the field turns on :focus`,
									`Make the link bold on hover`,
									`Make the button shrink while active with transform: scale(0.95)`
								],
								example: `.link:hover { color: tomato; text-decoration: underline; }
.field { padding: 6px; border: 2px solid #bbb; outline: none; }
.field:focus { border-color: #2965f1; background: #eef3ff; }
.btn { padding: 8px 16px; border: 0; border-radius: 6px; background: #2965f1; color: white; }
.btn:hover { background: #1c47a8; }
.btn:active { background: seagreen; }`,
								starter: `.btn {
  padding: 8px 16px;
  background: #2965f1;
  color: white;
}
.btn:hover {
  background: tomato;
}`,
								demo: `<a href="#" class="link">Hover me</a><br><br><input class="field" placeholder="Click to focus"><br><br><button class="btn">Press me</button>`
							},
							{
								id: 'css-e4', title: 'Shadows and cards',
								content: `<p><code>box-shadow</code> adds a shadow (x, y, blur, colour). Together with <code>border-radius</code> and <code>padding</code> it makes a "card".</p>`,
								explain: `<p><code>box-shadow</code> takes: x offset, y offset, blur, (optional spread), colour. An <code>rgba</code> colour makes the shadow soft and see-through. A card is just padding, a white background, rounded corners and a gentle shadow on a tinted page.</p><p>Several shadows can be combined, separated by commas.</p>`,
								tryit: [
									`Increase the blur to 30px`,
									`Add an inset shadow: box-shadow: inset 0 0 8px gray`,
									`Add a second shadow after a comma`
								],
								example: `body {
  background: #eef3ff;
  padding: 20px;
}
.card {
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}`,
								starter: `.card {
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}`,
								demo: `<div class="card">I am a card.</div>`
							},
							{
								id: 'css-e5', title: 'Gradients and opacity',
								content: `<p><code>linear-gradient</code> and <code>radial-gradient</code> blend colours as a background. <code>opacity</code> fades a whole element, while a colour like <code>rgba(41, 101, 241, 0.3)</code> fades only that colour.</p>`,
								explain: `<p>A <b>gradient</b> is an image made by CSS, used through <code>background</code>. <code>linear-gradient(90deg, tomato, gold)</code> goes from left to right; angles and extra colours are allowed. <code>radial-gradient</code> spreads out from a centre.</p><p><code>opacity</code> fades the whole element including its text; an <code>rgba()</code> colour fades only that colour. Use rgba for see-through backgrounds with readable text.</p>`,
								tryit: [
									`Change the angle 90deg to 180deg`,
									`Add a third colour to the linear gradient`,
									`Change the opacity of .fade to 0.8`
								],
								example: `.grad { height: 60px; background: linear-gradient(90deg, tomato, gold); }
.radial { height: 60px; background: radial-gradient(circle, white, #2965f1); }
.fade { height: 40px; opacity: 0.4; background: seagreen; }
.tint { height: 40px; background: rgba(41, 101, 241, 0.3); }`,
								starter: `.grad {
  height: 60px;
  background: linear-gradient(90deg, tomato, gold);
}`,
								demo: `<div class="grad"></div><div class="radial"></div><div class="fade"></div><div class="tint"></div>`
							},
							{
								id: 'css-e6', title: 'Flexbox',
								content: `<p>Put <code>display: flex</code> on a parent to line its children up. <code>justify-content</code> spaces them along the row, <code>align-items</code> lines them up across, and <code>gap</code> adds space between.</p>`,
								explain: `<p>Flexbox arranges children in one direction. On the <b>parent</b>: <code>display: flex</code>; <code>flex-direction</code> (row or column); <code>justify-content</code> distributes along the main direction (flex-start, center, space-between, space-around); <code>align-items</code> aligns across it; <code>gap</code> adds space; <code>flex-wrap: wrap</code> lets items drop onto a new line.</p><p>On a <b>child</b>, <code>flex: 1</code> makes it grow to share the free space.</p>`,
								tryit: [
									`Try justify-content: center, then flex-end`,
									`Change flex-direction to column`,
									`Add flex: 1 to .row div`
								],
								example: `.row {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #eef3ff;
}
.row div {
  background: #2965f1;
  color: white;
  padding: 14px 20px;
}`,
								starter: `.row {
  display: flex;
  gap: 10px;
}
.row div {
  background: #2965f1;
  color: white;
  padding: 14px 20px;
}`,
								demo: `<div class="row"><div>1</div><div>2</div><div>3</div></div>`,
								branches: [
									{
										id: 'css-e6-1', title: 'Flex container properties',
										content: `<p>These properties go on the <b>parent</b> (the flex container) and decide how all its children are arranged.</p>`,
										explain: `<p><code>display: flex</code> turns it on. <code>flex-direction</code>: <code>row</code> (default, left to right) or <code>column</code> (top to bottom); this sets the <b>main axis</b>. <code>justify-content</code> distributes items along the main axis (<code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code>). <code>align-items</code> aligns them on the <b>cross axis</b> (<code>stretch</code>, <code>flex-start</code>, <code>center</code>, <code>flex-end</code>). <code>flex-wrap: wrap</code> lets items drop onto a new line, and <code>gap</code> adds space between them.</p>`,
										tryit: [
											`Try each value of justify-content`,
											`Change flex-direction to column`,
											`Add flex-wrap: wrap and make the container narrower`
										],
										example: `.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  height: 120px;
  background: #eef3ff;
  padding: 8px;
}
.container div { background: #2965f1; color: white; padding: 10px 16px; }`,
										starter: `.container {
  display: flex;
  justify-content: center;
  gap: 8px;
}
.container div { background: #2965f1; color: white; padding: 10px; }`,
										demo: `<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>`
									},
									{
										id: 'css-e6-2', title: 'Flex item properties',
										content: `<p>These properties go on the <b>children</b> of a flex container to control how each item grows, shrinks and aligns.</p>`,
										explain: `<p><code>flex-grow</code> says how much of the leftover space an item takes (0 = none, 1 = a share, 2 = double share). <code>flex-shrink</code> says how willing it is to shrink when space runs out. <code>flex-basis</code> is its starting size. The shorthand <code>flex: 1</code> means "grow equally"; <code>flex: 0 0 100px</code> means "fixed 100px". <code>order</code> reorders items without changing the HTML, and <code>align-self</code> overrides <code>align-items</code> for one item.</p>`,
										tryit: [
											`Give .a flex: 2 so it is twice as wide as .b`,
											`Move .c first with order: -1`,
											`Use align-self: flex-end on .b`
										],
										example: `.row { display: flex; gap: 8px; height: 100px; background: #eef3ff; padding: 8px; }
.row div { padding: 10px; color: white; }
.a { flex: 1; background: #2965f1; }
.b { flex: 2; background: seagreen; align-self: flex-end; }
.c { flex: 0 0 80px; background: tomato; order: -1; }`,
										starter: `.row { display: flex; gap: 8px; }
.row div { padding: 10px; color: white; background: #2965f1; }
.a { flex: 1; }
.b { flex: 2; }`,
										demo: `<div class="row">
  <div class="a">a: flex 1</div>
  <div class="b">b: flex 2</div>
  <div class="c">c: fixed 80px, order -1</div>
</div>`
									}
								]
							},
							{
								id: 'css-e7', title: 'Grid',
								content: `<p><code>display: grid</code> with <code>grid-template-columns</code> lays items out in rows and columns. <code>1fr</code> means "one equal share".</p>`,
								explain: `<p>Grid arranges in rows <i>and</i> columns. <code>grid-template-columns: 1fr 1fr 1fr</code> makes three equal columns (<code>fr</code> is a share of the free space); <code>repeat(3, 1fr)</code> is a shorthand; you can mix units like <code>200px 1fr</code>. Rows are created automatically. <code>gap</code> spaces the cells, and an item can stretch with <code>grid-column: span 2</code>.</p>`,
								tryit: [
									`Change to three columns, then four`,
									`Make the first column 100px and the rest 1fr`,
									`Make the first item span two columns with .grid div:first-child { grid-column: span 2; }`
								],
								example: `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
.grid div {
  background: #2965f1;
  color: white;
  padding: 16px;
  text-align: center;
}`,
								starter: `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.grid div {
  background: #2965f1;
  color: white;
  padding: 16px;
}`,
								demo: `<div class="grid"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></div>`,
								branches: [
									{
										id: 'css-e7-1', title: 'Defining rows, columns and gaps',
										content: `<p>The grid is defined on the <b>parent</b>. You describe the tracks (columns and rows) and the browser places the children into the cells.</p>`,
										explain: `<p><code>grid-template-columns: 100px 1fr 2fr</code> makes three columns: a fixed one, then two that share the leftover space in a 1:2 ratio. <code>repeat(3, 1fr)</code> is shorthand for three equal columns. <code>minmax(100px, 1fr)</code> means "at least 100px, up to an equal share". <code>grid-template-rows</code> sets row heights; rows you do not define are created automatically and sized by <code>grid-auto-rows</code>. <code>gap</code> (or <code>row-gap</code> and <code>column-gap</code>) spaces the cells.</p>`,
										tryit: [
											`Change the columns to repeat(4, 1fr)`,
											`Set grid-auto-rows: 60px`,
											`Use different row-gap and column-gap values`
										],
										example: `.grid {
  display: grid;
  grid-template-columns: 80px 1fr 2fr;
  grid-auto-rows: 50px;
  gap: 8px 12px;
}
.grid div { background: #2965f1; color: white; padding: 8px; }`,
										starter: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
.grid div { background: #2965f1; color: white; padding: 8px; }`,
										demo: `<div class="grid">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>`
									},
									{
										id: 'css-e7-2', title: 'Placing and spanning items',
										content: `<p>By default items fill the cells in order. You can place an item in a chosen position and make it cover several cells.</p>`,
										explain: `<p>Grid lines are numbered from 1: a three-column grid has four column lines. <code>grid-column: 1 / 3</code> means "from line 1 to line 3" (two columns). <code>grid-column: span 2</code> means "cover two columns from where you are". <code>grid-row</code> works the same for rows. Use these for a wide header, a tall sidebar or an item that must start in a particular cell.</p>`,
										tryit: [
											`Make .wide span all 3 columns`,
											`Move .tall to the second column with grid-column: 2`,
											`Make .big span 2 columns and 2 rows`
										],
										example: `.grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 40px; gap: 6px; }
.grid div { background: #dfe9ff; padding: 6px; }
.wide { grid-column: 1 / 3; background: #2965f1; color: white; }
.tall { grid-row: span 2; background: tomato; color: white; }`,
										starter: `.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
.grid div { background: #dfe9ff; padding: 6px; }
.wide { grid-column: span 2; }`,
										demo: `<div class="grid">
  <div class="wide">wide: columns 1 to 3</div>
  <div>b</div>
  <div class="tall">tall: spans 2 rows</div>
  <div>d</div>
  <div>e</div>
  <div>f</div>
</div>`
									}
								]
							},
							{
								id: 'css-e8', title: 'Positioning',
								content: `<p><code>position: relative</code> on a parent lets a child with <code>position: absolute</code> sit exactly where you say, using <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code>.</p>`,
								explain: `<p><code>position</code> takes elements out of the normal flow in different ways. <b>relative</b> keeps its place but can be nudged and becomes the anchor for its children. <b>absolute</b> is placed relative to its nearest positioned ancestor. <b>fixed</b> stays in the window when scrolling, and <b>sticky</b> sticks when it would scroll away.</p><p>Without a positioned parent, an absolute child uses the whole page as its reference.</p>`,
								tryit: [
									`Move the badge to the bottom left`,
									`Remove position: relative from .parent and see where the badge goes`,
									`Make the badge a circle`
								],
								example: `.parent {
  position: relative;
  width: 220px;
  height: 100px;
  padding: 10px;
  background: #eef3ff;
}
.badge {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 2px 8px;
  background: tomato;
  color: white;
  border-radius: 4px;
}`,
								starter: `.parent {
  position: relative;
  height: 100px;
  background: #eef3ff;
}
.badge {
  background: tomato;
  color: white;
  padding: 2px 8px;
}`,
								demo: `<div class="parent">Parent box<div class="badge">New</div></div>`,
								branches: [
									{
										id: 'css-e8-1', title: 'relative and absolute in depth',
										content: `<p>These two work as a pair: <b>relative</b> makes a reference point, <b>absolute</b> positions something precisely against it.</p>`,
										explain: `<p><code>position: relative</code> leaves the element where it is, lets you nudge it with <code>top</code>/<code>left</code> (the gap it left stays), and makes it the <b>anchor</b> for absolute children. <code>position: absolute</code> removes the element from the normal flow (neighbours act as if it were not there) and places it using <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> relative to the <b>nearest positioned ancestor</b>; with none, it uses the whole page. Remove <code>position: relative</code> from the parent below and watch the badge fly away.</p>`,
										tryit: [
											`Remove position: relative from .parent`,
											`Move .badge to bottom: 0; left: 0`,
											`Nudge .nudge with top: 10px; left: 20px`
										],
										example: `.parent { position: relative; height: 110px; background: #eef3ff; padding: 8px; }
.badge  { position: absolute; top: 8px; right: 8px; background: tomato; color: white; padding: 2px 8px; }
.nudge  { position: relative; top: 6px; left: 20px; background: gold; display: inline-block; }`,
										starter: `.parent { position: relative; height: 100px; background: #eef3ff; }
.badge  { position: absolute; top: 8px; right: 8px; background: tomato; color: white; padding: 2px 8px; }`,
										demo: `<div class="parent">
  Parent (position: relative)
  <div class="badge">absolute</div>
  <p><span class="nudge">relative: nudged</span> from where it would be</p>
</div>`
									},
									{
										id: 'css-e8-2', title: 'fixed and sticky',
										content: `<p>Two more values keep elements in view while the page scrolls.</p>`,
										explain: `<p><code>position: fixed</code> pins an element to the <b>window</b>: it stays put however much you scroll (navigation bars, chat buttons). <code>position: sticky</code> behaves normally until it would scroll out of view, then sticks at the offset you give (<code>top: 0</code>), good for table headings and section titles. In this lesson the window is the Result frame: scroll inside it to see both. A fixed element no longer takes space, so add padding to the page so it does not cover content.</p>`,
										tryit: [
											`Move the fixed box to bottom: 8px; left: 8px`,
											`Change the sticky top value to 20px`,
											`Remove position: sticky and scroll again`
										],
										example: `.fixed  { position: fixed; top: 8px; right: 8px; background: tomato; color: white; padding: 6px 10px; }
.sticky { position: sticky; top: 0; background: #2965f1; color: white; padding: 8px; }
.filler { height: 300px; background: linear-gradient(#eef3ff, #dfe9ff); }`,
										starter: `.sticky {
  position: sticky;
  top: 0;
  background: #2965f1;
  color: white;
  padding: 8px;
}`,
										demo: `<div class="fixed">fixed</div>
<div class="sticky">sticky heading</div>
<div class="filler">Scroll the Result: the heading sticks, the red box stays.</div>
<div class="filler">More content</div>`
									}
								]
							},
							{
								id: 'css-e9', title: 'Overflow and z-index',
								content: `<p>When content is bigger than its box, <code>overflow</code> decides what happens: <code>auto</code> adds scrollbars, <code>hidden</code> cuts it off. When positioned elements overlap, a higher <code>z-index</code> sits on top.</p>`,
								explain: `<p><code>overflow</code> controls what happens when content is bigger than its box: <code>visible</code> (spills out), <code>hidden</code> (cut off), <code>scroll</code> and <code>auto</code> (scrollbars). <code>z-index</code> sets which positioned element sits in front: a higher number is on top, but it only works on elements that are positioned.</p>`,
								tryit: [
									`Change overflow: auto to hidden`,
									`Swap the z-index values`,
									`Make the stack boxes overlap more using left and top`
								],
								example: `.scroll {
  height: 70px;
  overflow: auto;
  border: 1px solid #999;
  padding: 6px;
}
.stack { position: relative; height: 90px; }
.s1, .s2 { position: absolute; width: 90px; height: 60px; color: white; padding: 6px; }
.s1 { left: 0; top: 0; background: #2965f1; z-index: 1; }
.s2 { left: 50px; top: 25px; background: tomato; z-index: 2; }`,
								starter: `.scroll {
  height: 70px;
  overflow: auto;
  border: 1px solid #999;
}`,
								demo: `<div class="scroll"><p>Line 1</p><p>Line 2</p><p>Line 3</p><p>Line 4</p><p>Line 5</p></div><div class="stack"><div class="s1">Blue</div><div class="s2">Red on top</div></div>`
							},
							{
								id: 'css-e10', title: 'Responsive design',
								content: `<p>An <code>@media</code> rule only applies when the screen matches, like <code>min-width: 450px</code>. Drag the corner of the Result window to change its width and watch the colour change.</p>`,
								explain: `<p>Responsive design makes one page work on every screen size. A <b>media query</b> applies its rules only when a condition is true, usually about the window width: <code>@media (min-width: 450px) { ... }</code> means "from 450px wide and up". Write the small-screen styles first and add queries for bigger screens (mobile first).</p><p>Resize the Result window by its corner to cross the breakpoint.</p>`,
								tryit: [
									`Change the breakpoint to 300px`,
									`Change the colour used on larger screens`,
									`Add a second query with max-width: 250px`
								],
								example: `.box {
  padding: 16px;
  background: lightcoral;
}

@media (min-width: 450px) {
  .box {
    background: lightgreen;
  }
}`,
								starter: `.box {
  padding: 16px;
  background: lightcoral;
}

@media (min-width: 450px) {
  .box {
    background: lightgreen;
  }
}`,
								demo: `<div class="box">Narrow window: coral. Wide window: green.</div>`
							}
					]
				},
				{
					id: 'advanced', name: 'Advanced',
					blurb: 'Combining techniques: animation, variables and real components.',
					lessons: [
							{
								id: 'css-a1', title: 'Transitions',
								content: `<p><code>transition</code> makes a change from one state to another smooth instead of instant. Name the property, the time and (optionally) the easing. Move your mouse over the button in the Result window.</p>`,
								explain: `<p>A <code>transition</code> makes a change between two states smooth instead of instant. Name the property (or <code>all</code>), the duration and, optionally, the easing: <code>transition: background 0.3s ease</code>. Put it on the <b>normal</b> state, so it also plays when going back. Only properties with numbers or colours can animate.</p><p>Transitions need a trigger such as <code>:hover</code>, <code>:focus</code> or a class added by JavaScript.</p>`,
								tryit: [
									`Make the transition slower, 1s`,
									`Add transition: all 0.3s and animate more properties`,
									`Add border-radius to the hover rule to animate the corners`
								],
								example: `.btn {
  padding: 10px 18px;
  border: 0;
  border-radius: 6px;
  background: #2965f1;
  color: white;
  transition: background 0.3s, transform 0.3s;
}
.btn:hover {
  background: #e34f26;
  transform: scale(1.1);
}`,
								starter: `.btn {
  padding: 10px 18px;
  border: 0;
  background: #2965f1;
  color: white;
  transition: background 0.3s;
}
.btn:hover {
  background: #e34f26;
}`,
								demo: `<button class="btn">Hover over me</button>`
							},
							{
								id: 'css-a2', title: 'Transforms',
								content: `<p><code>transform</code> moves, turns and resizes an element without disturbing the layout: <code>translate()</code>, <code>rotate()</code>, <code>scale()</code> and <code>skew()</code>. Combine several in one line.</p>`,
								explain: `<p><code>transform</code> moves, turns and resizes an element without disturbing the layout around it: <code>translate(x, y)</code>, <code>rotate(deg)</code>, <code>scale(n)</code> and <code>skew(deg)</code>. Several can be written in one line and are applied left to right. It is cheap for the browser to animate, so it is the best way to make movement.</p><p>By default it pivots around the centre; change that with <code>transform-origin</code>.</p>`,
								tryit: [
									`Add transform-origin: top left to .t`,
									`Combine rotate and translate in one transform`,
									`Change the hover so the box grows to scale(2)`
								],
								example: `.t {
  display: inline-block;
  width: 56px;
  height: 56px;
  margin: 20px;
  background: #2965f1;
  color: white;
  text-align: center;
  line-height: 56px;
  transition: transform 0.4s;
}
.rot  { transform: rotate(20deg); }
.size { transform: scale(1.3); }
.move { transform: translate(20px, 10px); }
.skew { transform: skew(15deg); }
.t:hover { transform: rotate(360deg) scale(1.2); }`,
								starter: `.t {
  display: inline-block;
  width: 56px;
  height: 56px;
  margin: 20px;
  background: #2965f1;
  transition: transform 0.4s;
}
.t:hover {
  transform: rotate(45deg) scale(1.3);
}`,
								demo: `<div class="t rot">rot</div><div class="t size">size</div><div class="t move">move</div><div class="t skew">skew</div>`
							},
							{
								id: 'css-a3', title: 'Keyframe animations',
								content: `<p>An animation runs by itself. Describe the steps with <code>@keyframes</code>, then attach it with the <code>animation</code> property: name, duration, easing and how many times (<code>infinite</code> to loop).</p>`,
								explain: `<p>A transition needs a trigger; an <b>animation</b> plays by itself. Describe the steps with <code>@keyframes name { ... }</code> using percentages (or <code>from</code> and <code>to</code>), then attach it with <code>animation: name 1s ease-in-out infinite</code> (name, duration, easing, how many times).</p><p>In the bounce, the ball is at 0% and 100% on the ground and 50% in the air; the browser fills in the movement between the steps.</p>`,
								tryit: [
									`Make the spinner spin slower`,
									`Change the bounce height to -80px`,
									`Add a colour change to the bounce keyframes`
								],
								example: `@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-40px); }
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
.ball {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 60px 30px 10px;
  border-radius: 50%;
  background: tomato;
  animation: bounce 1s ease-in-out infinite;
}
.spinner {
  display: inline-block;
  width: 36px;
  height: 36px;
  border: 5px solid #ddd;
  border-top-color: #2965f1;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}`,
								starter: `@keyframes spin {
  to { transform: rotate(360deg); }
}
.spinner {
  width: 36px;
  height: 36px;
  border: 5px solid #ddd;
  border-top-color: #2965f1;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}`,
								demo: `<div class="ball"></div><div class="spinner"></div>`
							},
							{
								id: 'css-a4', title: 'Animation delays and control',
								content: `<p>Fine-tune animations with <code>animation-delay</code> (start later), <code>animation-direction</code> (<code>alternate</code> plays back and forth), <code>animation-fill-mode</code> and <code>animation-play-state</code>. Staggered delays make a classic loading indicator.</p>`,
								explain: `<p>Fine-tune an animation: <code>animation-delay</code> starts it later; <code>animation-direction: alternate</code> plays forwards then backwards; <code>animation-iteration-count</code> sets repeats; <code>animation-fill-mode: forwards</code> keeps the final state; <code>animation-play-state: paused</code> freezes it. Giving each item a different delay (here with <code>:nth-child</code>) makes a wave.</p>`,
								tryit: [
									`Change the delays to 0.4s and 0.8s`,
									`Make the dots larger on the hover pause`,
									`Try animation-direction: reverse`
								],
								example: `@keyframes pulse {
  0%, 100% { transform: scale(0.5); opacity: 0.4; }
  50%      { transform: scale(1.2); opacity: 1; }
}
.dots { padding: 20px; }
.dot {
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 5px;
  border-radius: 50%;
  background: #2965f1;
  animation: pulse 1s ease-in-out infinite;
}
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }
.dots:hover .dot { animation-play-state: paused; }`,
								starter: `@keyframes pulse {
  0%, 100% { transform: scale(0.5); }
  50%      { transform: scale(1.2); }
}
.dot {
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 20px 5px;
  border-radius: 50%;
  background: #2965f1;
  animation: pulse 1s ease-in-out infinite alternate;
}`,
								demo: `<div class="dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`
							},
							{
								id: 'css-a5', title: 'Variables and themes',
								content: `<p>Custom properties start with <code>--</code> and are used with <code>var()</code>. Define them once on <code>:root</code> and change a whole theme in one place. A variable can be overridden inside one element.</p>`,
								explain: `<p>A custom property starts with two dashes (<code>--brand</code>) and is read with <code>var(--brand)</code>. Define shared ones on <code>:root</code> so the whole page can use them: change one line and the whole theme changes. A variable can be overridden inside any element, and everything inside inherits the new value. Add a fallback with <code>var(--x, red)</code>.</p>`,
								tryit: [
									`Change --brand to a new colour`,
									`Add a --padding variable and use it in .card`,
									`Override --brand on the .green card too`
								],
								example: `:root {
  --brand: #2965f1;
  --radius: 12px;
}
.card {
  margin-bottom: 10px;
  padding: 14px;
  background: var(--brand);
  border-radius: var(--radius);
  color: white;
}
.card.alt { --brand: tomato; }
.card.green { --brand: seagreen; --radius: 0; }`,
								starter: `:root {
  --brand: #2965f1;
}
.card {
  padding: 14px;
  background: var(--brand);
  color: white;
}
.alt {
  --brand: tomato;
}`,
								demo: `<div class="card">Default theme</div><div class="card alt">Overridden to red</div><div class="card green">Green and square</div>`
							},
							{
								id: 'css-a6', title: 'Pseudo-elements',
								content: `<p><code>::before</code> and <code>::after</code> add decoration without extra HTML; they need a <code>content</code> property. <code>::first-letter</code> styles the first letter. Great for quotes, badges and icons.</p>`,
								explain: `<p><code>::before</code> and <code>::after</code> create extra content inside an element without any extra HTML. They only appear if you set <code>content</code> (even an empty <code>""</code>). Position them for badges and decoration; use escapes like <code>"\\2192"</code> for symbols. <code>::first-letter</code> and <code>::first-line</code> style the start of text.</p><p>A single colon is a state (<code>:hover</code>); a double colon is a part (<code>::after</code>).</p>`,
								tryit: [
									`Change the content of the NEW badge`,
									`Add a ::before to .link with content "Go: "`,
									`Change the first-letter colour and size`
								],
								example: `.quote::before {
  content: "\\201C";
  font-size: 40px;
  color: #2965f1;
  vertical-align: -12px;
}
.link::after { content: " \\2192"; }
.badge {
  position: relative;
  display: inline-block;
  margin-top: 14px;
  padding: 8px 14px;
  background: #eef3ff;
}
.badge::after {
  content: "NEW";
  position: absolute;
  top: -8px;
  right: -12px;
  padding: 2px 6px;
  border-radius: 8px;
  background: tomato;
  color: white;
  font-size: 10px;
}
.big::first-letter { font-size: 2em; color: seagreen; }`,
								starter: `.link::after {
  content: " >>";
  color: tomato;
}`,
								demo: `<p class="quote">A quoted sentence.</p><a class="link" href="#">Read more</a><br><span class="badge">Shop</span><p class="big">The first letter is larger.</p>`
							},
							{
								id: 'css-a7', title: 'Grid areas and auto-fit',
								content: `<p>Name the parts of a layout with <code>grid-template-areas</code> and place items with <code>grid-area</code>. <code>repeat(auto-fit, minmax(80px, 1fr))</code> makes a gallery that adds or removes columns as the width changes. Resize the Result window!</p>`,
								explain: `<p>With <code>grid-template-areas</code> you draw the layout with names, one quoted string per row; each item says <code>grid-area: name</code> to go there. Two cells with the same name merge, which is how the header spans the whole width.</p><p><code>repeat(auto-fit, minmax(80px, 1fr))</code> means "as many columns as fit, each at least 80px and sharing the rest", so the gallery needs no media query. Resize the window to see it.</p>`,
								tryit: [
									`Swap side and main in the areas`,
									`Change the 80px in minmax to 120px`,
									`Put the footer area in the starter too`
								],
								example: `.layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "head head"
    "side main"
    "foot foot";
  gap: 6px;
  margin-bottom: 10px;
}
.layout > * { padding: 8px; color: white; }
.head { grid-area: head; background: #2965f1; }
.side { grid-area: side; background: tomato; }
.main { grid-area: main; background: seagreen; }
.foot { grid-area: foot; background: #555; }
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 6px;
}
.gallery div { padding: 14px; background: #eef3ff; text-align: center; }`,
								starter: `.layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "head head"
    "side main";
  gap: 6px;
}
.head { grid-area: head; background: #2965f1; color: white; }
.side { grid-area: side; background: tomato; color: white; }
.main { grid-area: main; background: seagreen; color: white; }`,
								demo: `<div class="layout"><div class="head">Header</div><div class="side">Side</div><div class="main">Main</div><div class="foot">Footer</div></div><div class="gallery"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div></div>`
							},
							{
								id: 'css-a8', title: 'Building a card component',
								content: `<p>Real pages are built from reusable components. This one combines flexbox, a shadow, variables, a hover transform and a transition, all from earlier lessons.</p>`,
								explain: `<p>Real pages are built from reusable <b>components</b>: a class (<code>.card</code>) that styles one repeated piece. This one uses flex with wrap so cards fill the line and then wrap, variables for the accent colour, a shadow for depth, and a hover transform with a transition for feedback.</p><p>The modifiers (<code>.hot</code>, <code>.fresh</code>) only change the variable, so each variant costs one line.</p>`,
								tryit: [
									`Add a fourth card with its own accent colour`,
									`Change the hover lift from 6px to 12px`,
									`Change flex: 1 1 120px to 1 1 200px and see how the cards wrap`
								],
								example: `:root { --accent: #2965f1; }
body { background: #f2f4f7; padding: 10px; font-family: sans-serif; }
.cards { display: flex; flex-wrap: wrap; gap: 12px; }
.card {
  flex: 1 1 120px;
  padding: 14px;
  background: white;
  border-top: 5px solid var(--accent);
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s, box-shadow 0.25s;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
}
.card h3 { margin: 0 0 6px; color: var(--accent); }
.card p { margin: 0; font-size: 14px; }
.card.hot { --accent: tomato; }
.card.fresh { --accent: seagreen; }`,
								starter: `.card {
  padding: 14px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s;
}
.card:hover {
  transform: translateY(-6px);
}`,
								demo: `<div class="cards"><div class="card"><h3>Blue</h3><p>The default card.</p></div><div class="card hot"><h3>Hot</h3><p>A red variant.</p></div><div class="card fresh"><h3>Fresh</h3><p>A green variant.</p></div></div>`
							},
							{
								id: 'css-a9', title: 'Project: animated banner',
								content: `<p>A banner that moves on its own. A moving gradient (animating <code>background-position</code>), text that fades up with <code>@keyframes</code>, and floating shapes with staggered delays.</p>`,
								explain: `<p>This banner layers several techniques. A <b>moving gradient</b>: the background is three times bigger than the element, and an animation slides <code>background-position</code>. <b>Staggered fade-ins</b>: the heading and paragraph share one keyframe, with different delays and <code>both</code> fill-mode. <b>Floating shapes</b>: absolutely positioned circles rise with a keyframe, each with its own delay.</p><p>Build animations in small steps: get one working, then add the next.</p>`,
								tryit: [
									`Change the gradient colours`,
									`Make the heading fade in more slowly`,
									`Add a new keyframe that also changes the shape colour`
								],
								example: `body { margin: 0; }
.banner {
  position: relative;
  overflow: hidden;
  height: 200px;
  padding: 30px;
  background: linear-gradient(120deg, #2965f1, #e34f26, #e8c500, #2965f1);
  background-size: 300% 300%;
  animation: shift 6s ease infinite;
  color: white;
  font-family: sans-serif;
}
.banner h1 { margin: 0; animation: fadeUp 1s ease both; }
.banner p  { margin: 8px 0 0; animation: fadeUp 1s 0.4s ease both; }
.shape {
  position: absolute;
  bottom: -30px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  animation: float 4s ease-in infinite;
}
.shape:nth-child(3) { left: 60%; animation-delay: 1s; }
.shape:nth-child(4) { left: 80%; animation-delay: 2s; width: 20px; height: 20px; }
.shape:nth-child(5) { left: 40%; animation-delay: 3s; }
@keyframes shift  { 50% { background-position: 100% 50%; } }
@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
@keyframes float  { to { transform: translateY(-260px); opacity: 0; } }`,
								starter: `.banner {
  height: 160px;
  padding: 20px;
  background: linear-gradient(120deg, #2965f1, tomato, #2965f1);
  background-size: 300% 300%;
  animation: shift 5s ease infinite;
  color: white;
}
@keyframes shift {
  50% { background-position: 100% 50%; }
}`,
								demo: `<div class="banner"><h1>Hello CSS</h1><p>Everything here is animated.</p><span class="shape" style="left:20%"></span><span class="shape"></span><span class="shape"></span><span class="shape"></span></div>`
							}
					]
				}
			]
		},
		{
			id: 'js',
			name: 'JS',
			color: '#E8C500',
			blurb: 'The behaviour of a page',
			levels: [
				{
					id: 'beginner', name: 'Beginner',
					blurb: 'Start here, no experience needed: how a program runs, and the core building blocks of the language.',
					lessons: [
							{
								id: 'js-b1', title: 'What is JavaScript?',
								content: `<p>JavaScript is a <b>programming language</b>. HTML gives a page its content and CSS its looks; JavaScript gives it <b>behaviour</b>: it can calculate, make decisions, remember things and react to what the visitor does.</p>`,
								explain: `<p><b>What programming means.</b> A program is a list of instructions the computer follows one after another, from top to bottom. You write the instructions and the browser carries them out. Computers are fast but literal: they do exactly what you write, so spelling, capital letters and punctuation matter.</p><p><b>What JavaScript can do:</b> maths, storing information in variables, making choices (if this, then that), repeating work in loops, changing the HTML and CSS of the page, and reacting to clicks and typing.</p><p><b>Your first instruction:</b> <code>console.log("Hello")</code> tells the computer to <i>log</i> (print) a message to the <b>console</b>, a text area programmers use to see what their code is doing. On this site the console output is shown at the top of the Result window.</p><p>Do not worry about every symbol yet. Each lesson adds a few ideas: run the Example, then change it.</p>`,
								tryit: [
									`Change the message in quotes`,
									`Add another console.log line that prints your name`,
									`Print a calculation such as 6 * 7 (no quotes)`
								],
								example: `console.log("Hello, world!");
console.log(2 + 3);`,
								starter: `console.log("Hello!");
// Try changing the message`
							},
							{
								id: 'js-b2', title: 'Running JavaScript: script tags and the console',
								content: `<p>JavaScript needs somewhere to run. In a web page it runs inside the browser, and you can connect it to a page in two ways.</p>`,
								explain: `<p><b>A script block:</b> put code between <code>&lt;script&gt;</code> tags in your HTML file, usually at the end of the <code>&lt;body&gt;</code>:</p><pre>&lt;script&gt;
  console.log("Hello");
&lt;/script&gt;</pre><p><b>An external file:</b> save the code in <code>app.js</code> and load it with <code>&lt;script src="app.js"&gt;&lt;/script&gt;</code>. Real sites do this so many pages can share the code.</p><p><b>Seeing the output:</b> in a real browser press <b>F12</b> (or right-click and choose Inspect) and open the <b>Console</b> tab. Messages from <code>console.log</code> appear there, and so do error messages in red. Here the Result window prints them for you.</p><p>Code runs when the page loads, from the top of the script to the bottom, one line at a time. That order is the first thing to understand about programs.</p>`,
								tryit: [
									`Change the order of the lines and watch the output order change`,
									`Add a fourth line`,
									`Misspell console.log as console.lg and read the error message`
								],
								example: `console.log("1. The first line runs first");
console.log("2. The second line runs next");
console.log("3. Then the third");`,
								starter: `console.log("1. First");
console.log("2. Second");`
							},
							{
								id: 'js-b3', title: 'Statements, comments and errors',
								content: `<p>JavaScript has a few rules of grammar. Knowing them makes code easier to read and errors easier to understand.</p>`,
								explain: `<p>Each instruction is a <b>statement</b>, normally on its own line and ending with a semicolon <code>;</code>. Quotes, brackets and braces always come in pairs: if you open one, close it. JavaScript is <b>case-sensitive</b>: <code>Console.log</code> is not <code>console.log</code>. Spaces and blank lines are ignored, so use them to keep code tidy.</p><p><b>Comments</b> are notes for humans that the computer skips: <code>// a one-line comment</code> or <code>/* a comment over several lines */</code>. Putting <code>//</code> in front of a line switches it off for a moment.</p><p><b>Errors</b> are normal: every programmer sees them all day. The message says what went wrong, for example <code>ReferenceError: x is not defined</code> (you used a name that was never created). Read the message, check spelling and punctuation, and fix one thing at a time. Code before the error still ran; code after it did not.</p>`,
								tryit: [
									`Remove the // in front of the last line and run it`,
									`Change console to Console and read the error`,
									`Delete one of the quotation marks and read the error`
								],
								example: `// This is a comment: the computer ignores it
console.log("Statements end with a semicolon");
/* A comment can
   cover several lines */
console.log("Case matters: console, not Console");
// console.log("This line is switched off");`,
								starter: `// A comment
console.log("Fix me");`
							},
							{
								id: 'js-b4', title: 'Variables',
								content: `<p>Store values with <code>const</code> (cannot be changed) and <code>let</code> (can be changed), e.g. <code>const name = "Sam";</code>.</p>`,
								explain: `<p>A variable is a labelled box for a value. <code>const</code> is for values that never change; <code>let</code> for ones that will. Names are case-sensitive (<code>age</code> and <code>Age</code> differ), cannot start with a digit or contain spaces, and by convention use camelCase (<code>firstName</code>).</p><p>Trying to change a <code>const</code> is an error: try it and read the message.</p>`,
								tryit: [
									`Change age to a different number`,
									`Add a variable for your favourite colour and log it`,
									`Try age = 20 on a const variable and read the error`
								],
								example: `const name = "Sam";
let age = 12;
age = age + 1;
console.log(name, age);`,
								starter: `const name = "Sam";
let age = 12;
console.log(name, age);
// change age, then log again`
							},
							{
								id: 'js-b5', title: 'Data types',
								content: `<p>Values have types: text (<code>"hi"</code>), numbers (<code>42</code>) and booleans (<code>true</code> / <code>false</code>). <code>typeof</code> tells you which.</p>`,
								explain: `<p>The basic types: <b>string</b> (text), <b>number</b>, <b>boolean</b> (true or false), <b>undefined</b> (a variable with no value yet) and <b>null</b> (deliberately empty). <code>typeof</code> reveals the type. JavaScript decides the type from the value.</p><p>Beware: <code>"5"</code> in quotes is text, not the number 5.</p>`,
								tryit: [
									`Check the typeof of "5" and of 5`,
									`Log typeof null (a famous surprise)`,
									`Log "5" + 5 and then "5" * 5`
								],
								example: `console.log(typeof "hello");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);`,
								starter: `console.log(typeof "hello");
// try a number, or true`,
								branches: [
									{
										id: 'js-b5-1', title: 'Converting between types',
										content: `<p>Values often arrive as the wrong type (everything typed into a form is text). Converting lets you calculate with them.</p>`,
										explain: `<p><code>Number("5")</code> turns text into a number (or <code>NaN</code>, "not a number", if it cannot). <code>String(5)</code> turns anything into text, and <code>Boolean(x)</code> into true or false. JavaScript also converts <b>automatically</b>, and not always the way you hope: <code>"5" + 1</code> joins as text and gives <code>"51"</code>, but <code>"5" - 1</code> calculates and gives <code>4</code>. When in doubt, convert on purpose.</p>`,
										tryit: [
											`Predict "10" + 5 and then "10" - 5, then check`,
											`Log Number("hello") and see NaN`,
											`Convert the text "42" to a number and double it`
										],
										example: `console.log(Number("5") + 1);
console.log(String(5) + 1);
console.log("5" + 1);
console.log("5" - 1);
console.log(Boolean(0), Boolean("hi"));
console.log(Number("hello"));
console.log(typeof String(5));`,
										starter: `const text = "42";
console.log(Number(text) * 2);`
									},
									{
										id: 'js-b5-2', title: 'undefined and null',
										content: `<p>JavaScript has two values that both mean "nothing", for slightly different reasons.</p>`,
										explain: `<p><code>undefined</code> is what JavaScript gives you when a value was never set: a variable declared without a value, a missing object property, or a function that returns nothing. <code>null</code> is a value <b>you</b> choose to say "intentionally empty". <code>typeof undefined</code> is <code>"undefined"</code>, while <code>typeof null</code> is (by a famous old mistake) <code>"object"</code>. Reading a property of <code>undefined</code> or <code>null</code> is a very common error: "Cannot read properties of undefined".</p>`,
										tryit: [
											`Log the missing property person.age`,
											`Set a variable to null and log its typeof`,
											`Check x === undefined`
										],
										example: `let x;
console.log(x);
const person = { name: "Sam" };
console.log(person.age);
const empty = null;
console.log(empty);
console.log(typeof undefined, typeof null);
console.log(x === undefined);`,
										starter: `let x;
console.log(x);
x = null;
console.log(x);`
									}
								]
							},
							{
								id: 'js-b6', title: 'Numbers and math',
								content: `<p>Use <code>+ - * /</code> to calculate, <code>%</code> for the remainder and <code>**</code> for powers. <code>Math.round()</code> and <code>Math.max()</code> help too.</p>`,
								explain: `<p>The arithmetic operators are <code>+ - * /</code>. <code>%</code> (remainder) tells you whether a number is even (<code>n % 2 === 0</code>). <code>**</code> is the power. Brackets control the order, as in maths. The <code>Math</code> object has helpers: <code>Math.round</code>, <code>Math.floor</code>, <code>Math.ceil</code>, <code>Math.sqrt</code> and <code>Math.random()</code> (from 0 up to, but not including, 1).</p><p>Shortcuts: <code>x += 5</code> means <code>x = x + 5</code>, and <code>x++</code> adds 1.</p>`,
								tryit: [
									`Calculate the area of a circle of radius 5 using Math.PI`,
									`Log a random whole number from 1 to 10`,
									`Check whether 14 is even using %`
								],
								example: `console.log(10 + 5);
console.log(10 / 4);
console.log(10 % 3);
console.log(2 ** 3);
console.log(Math.round(4.6));
console.log(Math.max(3, 9, 5));`,
								starter: `console.log(10 + 5);
// try - * / % **`,
								branches: [
									{
										id: 'js-b6-1', title: 'The arithmetic operators',
										content: `<p>The six arithmetic operators and the order in which JavaScript uses them.</p>`,
										explain: `<p><code>+</code> add, <code>-</code> subtract, <code>*</code> multiply, <code>/</code> divide, <code>%</code> remainder (what is left over after dividing: <code>10 % 3</code> is 1) and <code>**</code> power (<code>2 ** 3</code> is 8). The order is the same as in maths: powers, then multiply, divide and remainder, then add and subtract; use brackets to choose your own order. Dividing by zero gives <code>Infinity</code>, not an error. Beware of tiny rounding errors: <code>0.1 + 0.2</code> is <code>0.30000000000000004</code>, because computers store decimals in binary.</p>`,
										tryit: [
											`Compare 2 + 3 * 4 with (2 + 3) * 4`,
											`Use % to test whether 15 is odd`,
											`Log 0.1 + 0.2 and think about why`
										],
										example: `console.log(7 + 2);
console.log(7 - 2);
console.log(7 * 2);
console.log(7 / 2);
console.log(7 % 2);
console.log(2 ** 10);
console.log(2 + 3 * 4);
console.log((2 + 3) * 4);
console.log(5 / 0);
console.log(0.1 + 0.2);`,
										starter: `console.log(10 % 3);
console.log(2 ** 5);`
									},
									{
										id: 'js-b6-2', title: 'Rounding: Math.round, floor, ceil and trunc',
										content: `<p>Calculations often give decimals. Four <code>Math</code> functions turn them into whole numbers, each in a different way.</p>`,
										explain: `<p><code>Math.round(x)</code> goes to the <b>nearest</b> whole number (.5 rounds up). <code>Math.floor(x)</code> always goes <b>down</b>, <code>Math.ceil(x)</code> always <b>up</b>, and <code>Math.trunc(x)</code> simply <b>chops off</b> the decimals. They only differ for decimals and negatives: <code>Math.floor(-2.5)</code> is -3 but <code>Math.trunc(-2.5)</code> is -2. To round to a number of decimal places use <code>x.toFixed(2)</code> (it returns <b>text</b>), or multiply, round and divide: <code>Math.round(x * 100) / 100</code>.</p>`,
										tryit: [
											`Try all four on 7.5, then on -7.5`,
											`Round 3.14159 to 2 decimals two different ways`,
											`How many boxes of 6 are needed for 20 items? (Math.ceil)`
										],
										example: `const n = 4.6;
console.log(Math.round(n));
console.log(Math.floor(n));
console.log(Math.ceil(n));
console.log(Math.trunc(n));
console.log(Math.round(-2.5), Math.floor(-2.5), Math.trunc(-2.5));
console.log((3.14159).toFixed(2));
console.log(Math.round(3.14159 * 100) / 100);`,
										starter: `const n = 4.6;
console.log(Math.round(n));
console.log(Math.floor(n));`
									},
									{
										id: 'js-b6-3', title: 'More Math: abs, sqrt, min, max, random and PI',
										content: `<p>The <code>Math</code> object holds many other ready-made calculations.</p>`,
										explain: `<p><code>Math.abs(x)</code> drops the minus sign. <code>Math.sqrt(x)</code> is the square root and <code>Math.pow(x, y)</code> is x to the power y (same as <code>x ** y</code>). <code>Math.min(...)</code> and <code>Math.max(...)</code> pick the smallest or largest of the numbers you give. <code>Math.PI</code> is the constant 3.14159... <code>Math.random()</code> gives a random decimal from 0 up to (but not including) 1. To get a random <b>whole number from 1 to 6</b>: <code>Math.floor(Math.random() * 6) + 1</code>: multiply to scale, floor to cut, add to shift.</p>`,
										tryit: [
											`Roll a 20-sided die`,
											`Find the area of a circle with radius 3 using Math.PI`,
											`Use Math.max to find the biggest of five numbers you choose`
										],
										example: `console.log(Math.abs(-7));
console.log(Math.sqrt(81));
console.log(Math.pow(2, 8));
console.log(Math.min(4, 9, 2));
console.log(Math.max(4, 9, 2));
console.log(Math.PI);
console.log(Math.floor(Math.random() * 6) + 1);`,
										starter: `const roll = Math.floor(Math.random() * 6) + 1;
console.log("You rolled a " + roll);`
									},
									{
										id: 'js-b6-4', title: 'Shortcut operators: ++, -- and +=',
										content: `<p>Changing a variable by adding to it is so common that JavaScript has shortcuts.</p>`,
										explain: `<p><code>x += 5</code> means <code>x = x + 5</code>. The same pattern works for <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code> and <code>**=</code>. <code>x++</code> adds 1 and <code>x--</code> takes 1 away. These need a variable created with <code>let</code> (a <code>const</code> cannot change). <code>+=</code> also works on text: <code>text += "!"</code> adds to the end.</p>`,
										tryit: [
											`Use *= to double a number three times`,
											`Build a sentence with += on a string`,
											`Count down from 5 with --`
										],
										example: `let score = 10;
score += 5;
console.log(score);
score -= 3;
console.log(score);
score *= 2;
console.log(score);
score++;
console.log(score);
score--;
console.log(score);
let text = "Hello";
text += ", world";
console.log(text);`,
										starter: `let n = 1;
n += 1;
n *= 10;
console.log(n);`
									}
								]
							},
							{
								id: 'js-b7', title: 'Strings',
								content: `<p>Strings are text. Join them with <code>+</code>, and use <code>.length</code> and methods like <code>.toUpperCase()</code>, <code>.includes()</code> and <code>.slice()</code>.</p>`,
								explain: `<p>Strings can use single or double quotes. Join them with <code>+</code>. Each character has a position starting at 0: <code>word[0]</code>. Useful tools: <code>.length</code>, <code>.toUpperCase()</code>, <code>.toLowerCase()</code>, <code>.includes()</code>, <code>.indexOf()</code> and <code>.slice(start, end)</code>. Strings cannot be changed; these methods give you a new string.</p>`,
								tryit: [
									`Log the last character of the word`,
									`Check whether the word includes "Java"`,
									`Join the word and your name into one sentence`
								],
								example: `const word = "JavaScript";
console.log(word.length);
console.log(word.toUpperCase());
console.log("I love " + word);
console.log(word.slice(0, 4));
console.log(word.includes("Script"));`,
								starter: `const word = "JavaScript";
console.log(word.length);`,
								branches: [
									{
										id: 'js-b7-1', title: 'Finding things in strings',
										content: `<p>Several string methods answer the question "is this text in there, and where?"</p>`,
										explain: `<p><code>includes("x")</code> is true or false. <code>indexOf("x")</code> returns the <b>position</b> of the first match (counting from 0) or <code>-1</code> if there is none. <code>startsWith("x")</code> and <code>endsWith("x")</code> check the ends. All of them are <b>case sensitive</b>: convert with <code>toLowerCase()</code> first when you do not care about capitals.</p>`,
										tryit: [
											`Check whether the sentence includes "FOX" and then lower-case it first`,
											`Find the position of "dog"`,
											`Test whether a file name ends with ".html"`
										],
										example: `const text = "The quick brown fox";
console.log(text.includes("quick"));
console.log(text.includes("Quick"));
console.log(text.indexOf("brown"));
console.log(text.indexOf("cat"));
console.log(text.startsWith("The"));
console.log(text.endsWith("fox"));
console.log(text.toLowerCase().includes("QUICK".toLowerCase()));`,
										starter: `const text = "The quick brown fox";
console.log(text.indexOf("fox"));`
									},
									{
										id: 'js-b7-2', title: 'Cutting and changing strings',
										content: `<p>Strings cannot be edited in place, but methods build new strings from old ones.</p>`,
										explain: `<p><code>slice(start, end)</code> copies the part from <code>start</code> up to (not including) <code>end</code>; a negative number counts from the end; leave out <code>end</code> to go to the end. <code>replace("a", "b")</code> swaps the first match (use <code>replaceAll</code> for every match). <code>trim()</code> removes spaces from both ends. <code>toUpperCase()</code> and <code>toLowerCase()</code> change case. <code>split(" ")</code> cuts into an array of words, and <code>repeat(3)</code> repeats. None of these change the original: save the result in a variable.</p>`,
										tryit: [
											`Take the last 3 letters with slice(-3)`,
											`Replace every "o" using replaceAll`,
											`Capitalise a word: first letter upper-case plus the rest`
										],
										example: `const text = "  Hello, World  ";
console.log(text.trim());
console.log(text.trim().slice(0, 5));
console.log(text.trim().slice(-5));
console.log(text.replace("World", "there"));
console.log(text.trim().toUpperCase());
console.log("a-b-c".replaceAll("-", "+"));
console.log("one two three".split(" "));
console.log("ha".repeat(3));`,
										starter: `const word = "javascript";
console.log(word.slice(0, 1).toUpperCase() + word.slice(1));`
									},
									{
										id: 'js-b7-3', title: 'Quotes and escape characters',
										content: `<p>What if the text you want contains a quotation mark, or you want a new line inside a string?</p>`,
										explain: `<p>Strings can use <code>'single'</code> or <code>"double"</code> quotes; use the other kind inside to include one without trouble: <code>"it's fine"</code>. Otherwise put a backslash before the character: <code>\\"</code> a double quote, <code>\\'</code> a single quote, <code>\\\\</code> a backslash, <code>\\n</code> a new line and <code>\\t</code> a tab. This backslash is called an <b>escape</b>. Backtick strings (a later lesson) can also run over several lines directly.</p>`,
										tryit: [
											`Print a sentence that contains a double quote`,
											`Print three lines with one console.log using \\n`,
											`Print a file path like C:\\\\folder`
										],
										example: `console.log("It's easy with double quotes");
console.log('Say "hello" with single quotes');
console.log("Escaped: \\"quoted\\" and it\\'s");
console.log("Line one\\nLine two");
console.log("Column A\\tColumn B");
console.log("A backslash: \\\\");`,
										starter: `console.log("First\\nSecond");`
									}
								]
							},
							{
								id: 'js-b8', title: 'Comparing and logic',
								content: `<p>Compare with <code>===</code>, <code>!==</code>, <code>&gt;</code> and <code>&lt;</code>. Combine with <code>&amp;&amp;</code> (and), <code>||</code> (or) and <code>!</code> (not). The answer is always <code>true</code> or <code>false</code>.</p>`,
								explain: `<p>Comparisons give a boolean. Use <code>===</code> (equal) and <code>!==</code> rather than <code>==</code>, which converts types and surprises people. <code>&amp;&amp;</code> is true when <i>both</i> sides are, <code>||</code> when <i>either</i> is, and <code>!</code> flips the answer. Text can be compared as well: <code>"a" &lt; "b"</code>.</p>`,
								tryit: [
									`Check whether age is between 10 and 20`,
									`Compare 5 === "5" and then 5 == "5"`,
									`Use ! to say that age is not 15`
								],
								example: `const age = 15;
console.log(age === 15);
console.log(age !== 15);
console.log(age > 12 && age < 18);
console.log(age < 10 || age > 60);
console.log(!true);`,
								starter: `const age = 15;
console.log(age > 12);`,
								branches: [
									{
										id: 'js-b8-1', title: 'Comparison operators',
										content: `<p>Comparison operators compare two values and always answer <code>true</code> or <code>false</code>.</p>`,
										explain: `<p><code>===</code> equal, <code>!==</code> not equal, <code>&gt;</code> greater, <code>&lt;</code> less, <code>&gt;=</code> greater or equal and <code>&lt;=</code> less or equal. Beware: a single <code>=</code> <b>assigns</b> a value; it never compares. The looser <code>==</code> converts types first, so <code>5 == "5"</code> is true but <code>5 === "5"</code> is false. Always use <code>===</code> and <code>!==</code>. Text compares alphabetically, and capital letters come before lower-case.</p>`,
										tryit: [
											`Compare 5 === "5" and 5 == "5"`,
											`Check whether "apple" < "banana"`,
											`Check whether your age is at least 13`
										],
										example: `console.log(5 === 5);
console.log(5 === "5");
console.log(5 == "5");
console.log(5 !== 6);
console.log(7 > 3, 7 < 3);
console.log(7 >= 7, 7 <= 6);
console.log("apple" < "banana");
console.log("Z" < "a");`,
										starter: `const age = 15;
console.log(age >= 13);`
									},
									{
										id: 'js-b8-2', title: 'Logical operators: &&, || and !',
										content: `<p>Logical operators combine true/false answers, so you can ask several questions at once.</p>`,
										explain: `<p><code>&amp;&amp;</code> (and) is true only if <b>both</b> sides are true. <code>||</code> (or) is true if <b>at least one</b> side is. <code>!</code> (not) flips true to false and back. They are checked left to right and stop early ("short-circuit"): in <code>a || b</code> if <code>a</code> is true, <code>b</code> is never looked at. Use brackets to group when mixing them: <code>(a || b) &amp;&amp; c</code>. A common test, "is the age between 13 and 19?", is <code>age &gt;= 13 &amp;&amp; age &lt;= 19</code>.</p>`,
										tryit: [
											`Check whether a number is between 1 and 10`,
											`Change isWeekend and isHoliday and see how the result changes`,
											`Write a condition for "not a teenager"`
										],
										example: `const age = 15;
const isWeekend = true;
const isHoliday = false;
console.log(age >= 13 && age <= 19);
console.log(isWeekend || isHoliday);
console.log(!isWeekend);
console.log(isWeekend && isHoliday);
console.log((isWeekend || isHoliday) && age > 10);`,
										starter: `const age = 15;
console.log(age >= 13 && age <= 19);`
									},
									{
										id: 'js-b8-3', title: 'Truthy and falsy values',
										content: `<p>In a condition JavaScript does not need a real true or false: every value counts as one or the other.</p>`,
										explain: `<p>Exactly these values are <b>falsy</b>: <code>false</code>, <code>0</code>, <code>""</code> (empty text), <code>null</code>, <code>undefined</code> and <code>NaN</code>. Everything else is <b>truthy</b>, including <code>"0"</code>, <code>"false"</code>, empty arrays <code>[]</code> and empty objects <code>{}</code>. That is why <code>if (name)</code> works as "if there is a name". <code>!!value</code> (double not) shows what a value counts as. The <code>||</code> operator can give a default: <code>name || "guest"</code>.</p>`,
										tryit: [
											`Check !!"" and !!"hello"`,
											`Find out whether an empty array is truthy`,
											`Give a missing value the default "guest"`
										],
										example: `console.log(!!0, !!1);
console.log(!!"", !!"hi");
console.log(!!null, !!undefined, !!NaN);
console.log(!![], !!{});
console.log(!!"0");
const name = "";
console.log(name || "guest");
if ("hello") {
  console.log("a non-empty string is truthy");
}`,
										starter: `const value = 0;
if (value) {
  console.log("truthy");
} else {
  console.log("falsy");
}`
									}
								]
							},
							{
								id: 'js-b9', title: 'Conditions (if / else)',
								content: `<p><code>if</code> runs code only when something is true. Add <code>else if</code> and <code>else</code> to handle other cases.</p>`,
								explain: `<p>A condition decides which code runs. The checks run in order and only the first true block runs; the rest are skipped. <code>else</code> is the catch-all. Values like <code>0</code>, <code>""</code>, <code>null</code> and <code>undefined</code> count as false ("falsy"); most other values are truthy.</p>`,
								tryit: [
									`Change score to 95, then to 40`,
									`Add an else if for 50 and above that logs "Pass"`,
									`Use && to require two conditions at once`
								],
								example: `const score = 72;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 70) {
  console.log("Grade B");
} else {
  console.log("Keep practising");
}`,
								starter: `const score = 72;

if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Try again");
}`
							},
							{
								id: 'js-b10', title: 'Loops',
								content: `<p>Loops repeat code. A <code>for</code> loop counts for you, and <code>while</code> keeps going until its condition is false.</p>`,
								explain: `<p>A <code>for</code> loop has three parts: the start (<code>let i = 1</code>), the keep-going test (<code>i &lt;= 5</code>) and the step (<code>i++</code>). A <code>while</code> loop just checks a condition each time, so something inside it must change that condition or it loops forever (the Result window may freeze if you do this by accident). <code>break</code> leaves a loop early and <code>continue</code> skips to the next round.</p>`,
								tryit: [
									`Count from 1 to 10`,
									`Count down from 5 to 1`,
									`Log only the even numbers up to 20`
								],
								example: `for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

let n = 3;
while (n > 0) {
  console.log(n);
  n--;
}
console.log("Go!");`,
								starter: `for (let i = 1; i <= 3; i++) {
  console.log("Count: " + i);
}`,
								branches: [
									{
										id: 'js-b10-1', title: 'The for loop in depth',
										content: `<p>A <code>for</code> loop is the tool for "do this a known number of times", and the same three parts can count in many ways.</p>`,
										explain: `<p><code>for (start; test; step) { ... }</code>: the <b>start</b> runs once; the <b>test</b> is checked before every round, and the loop stops when it is false; the <b>step</b> runs after every round. Change them to count differently: <code>i += 2</code> counts in twos, <code>i--</code> counts down, and starting at 0 with <code>i &lt; array.length</code> visits an array's items. The variable <code>i</code> only exists inside the loop. Loops can sit inside loops: the inner loop runs completely for each round of the outer one, as in a times table.</p>`,
										tryit: [
											`Count to 20 in fives`,
											`Count down from 10 to 0`,
											`Print the 7 times table`
										],
										example: `for (let i = 0; i < 5; i++) {
  console.log("i is " + i);
}
for (let i = 10; i > 0; i -= 3) {
  console.log("down: " + i);
}
const colours = ["red", "green", "blue"];
for (let i = 0; i < colours.length; i++) {
  console.log(i + ": " + colours[i]);
}
for (let row = 1; row <= 3; row++) {
  let line = "";
  for (let col = 1; col <= 3; col++) {
    line += row * col + " ";
  }
  console.log(line);
}`,
										starter: `for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}`
									},
									{
										id: 'js-b10-2', title: 'while and do...while',
										content: `<p><code>while</code> repeats "as long as something is true", which suits cases where you do not know in advance how many rounds are needed.</p>`,
										explain: `<p><code>while (condition) { ... }</code> checks the condition <b>before</b> each round, so it might never run. <code>do { ... } while (condition)</code> runs the body once <b>first</b> and then checks, so it always runs at least once. Something inside the loop must eventually make the condition false, or you get an <b>infinite loop</b> that freezes the page. A safe habit is to write the line that changes the variable first.</p>`,
										tryit: [
											`Double a number until it passes 1000`,
											`Change n to 0 and compare while with do...while`,
											`Count how many times 100 can be halved before it is below 1`
										],
										example: `let n = 1;
while (n < 100) {
  n *= 2;
  console.log("n is " + n);
}

let m = 0;
do {
  console.log("do...while runs once even though m < 0 is false");
} while (m < 0);`,
										starter: `let n = 1;
while (n < 50) {
  n = n * 3;
  console.log(n);
}`
									},
									{
										id: 'js-b10-3', title: 'break and continue',
										content: `<p>Two keywords let you change a loop while it is running.</p>`,
										explain: `<p><code>break</code> leaves the loop immediately, even if its condition is still true: use it when you have found what you were looking for. <code>continue</code> skips the rest of the current round and jumps to the next one: use it to ignore items you do not want. Both are usually used inside an <code>if</code>.</p>`,
										tryit: [
											`Stop at the first number divisible by 7`,
											`Skip multiples of 3 instead of 2`,
											`Find the first fruit that starts with "c"`
										],
										example: `for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    console.log("found 6, stopping");
    break;
  }
  console.log("checked " + i);
}

for (let i = 1; i <= 6; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("odd: " + i);
}`,
										starter: `for (let i = 1; i <= 10; i++) {
  if (i === 4) break;
  console.log(i);
}`
									}
								]
							},
							{
								id: 'js-b11', title: 'Arrays',
								content: `<p>An array is a list inside square brackets. Items are numbered from 0. <code>.push()</code> adds an item and <code>.length</code> counts them.</p>`,
								explain: `<p>Arrays hold ordered lists. Positions start at 0, so the last item is <code>list[list.length - 1]</code>. Common tools: <code>push</code> (add to the end), <code>pop</code> (remove from the end), <code>shift</code> and <code>unshift</code> (the start), <code>indexOf</code>, <code>includes</code> and <code>slice</code>. A <code>for...of</code> loop visits each item.</p>`,
								tryit: [
									`Add your favourite fruit with push`,
									`Remove the last item with pop and log it`,
									`Log the last item without typing its number`
								],
								example: `const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);
fruits.push("date");
console.log(fruits.length);

for (const fruit of fruits) {
  console.log("I like " + fruit);
}`,
								starter: `const fruits = ["apple", "banana"];
console.log(fruits[1]);`,
								branches: [
									{
										id: 'js-b11-1', title: 'Adding and removing items',
										content: `<p>Arrays are not fixed: you can add and remove items at either end, or anywhere in the middle.</p>`,
										explain: `<p><code>push(x)</code> adds to the <b>end</b> and <code>pop()</code> removes and returns the last item. <code>unshift(x)</code> adds to the <b>start</b> and <code>shift()</code> removes and returns the first. <code>splice(position, howManyToRemove, ...newItems)</code> removes and/or inserts anywhere. All of these <b>change the array itself</b>. <code>push</code> and <code>unshift</code> return the new length. To remove by value, find its position with <code>indexOf</code> first.</p>`,
										tryit: [
											`Add "date" at the start`,
											`Use splice to remove "banana"`,
											`Remove the last two items with pop twice`
										],
										example: `const fruits = ["apple", "banana", "cherry"];
fruits.push("date");
console.log(fruits);
console.log(fruits.pop());
fruits.unshift("avocado");
console.log(fruits);
console.log(fruits.shift());
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 0, "blueberry");
console.log(fruits);`,
										starter: `const list = ["a", "b", "c"];
list.push("d");
console.log(list);`
									},
									{
										id: 'js-b11-2', title: 'Finding items: indexOf, includes and find',
										content: `<p>Three ways to ask "is it in the list, and where?".</p>`,
										explain: `<p><code>includes(x)</code> answers true or false. <code>indexOf(x)</code> returns the position of the first match or <code>-1</code>. Both compare simple values exactly. To search with your own test, use <code>find(item =&gt; test)</code> (returns the first matching item or <code>undefined</code>) and <code>findIndex(...)</code> (its position). They work on lists of objects too: <code>people.find(p =&gt; p.name === "Kim")</code>.</p>`,
										tryit: [
											`Check whether the list includes "fig"`,
											`Find the first number over 10`,
											`Find the person called "Kim" and log her age`
										],
										example: `const fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana"));
console.log(fruits.indexOf("cherry"));
console.log(fruits.indexOf("fig"));

const numbers = [4, 9, 16, 25];
console.log(numbers.find(n => n > 10));
console.log(numbers.findIndex(n => n > 10));

const people = [{ name: "Sam", age: 12 }, { name: "Kim", age: 15 }];
console.log(people.find(p => p.name === "Kim").age);`,
										starter: `const numbers = [4, 9, 16, 25];
console.log(numbers.find(n => n > 10));`
									},
									{
										id: 'js-b11-3', title: 'Slicing, joining and sorting',
										content: `<p>Copy a piece of an array, turn it into text, or put it in order.</p>`,
										explain: `<p><code>slice(start, end)</code> makes a <b>copy</b> of part of an array without changing the original (the end is not included). <code>join(glue)</code> makes text from the items. <code>concat</code> or the spread <code>[...a, ...b]</code> joins arrays. <code>reverse()</code> flips the order and <code>sort()</code> sorts, and both <b>change the original</b>. Careful: <code>sort()</code> compares as text, so <code>[10, 9, 1].sort()</code> gives <code>[1, 10, 9]</code>. For numbers give it a compare function: <code>sort((a, b) =&gt; a - b)</code>.</p>`,
										tryit: [
											`Sort the numbers from biggest to smallest`,
											`Join the fruits with " and "`,
											`Copy the middle three letters with slice`
										],
										example: `const letters = ["a", "b", "c", "d", "e"];
console.log(letters.slice(1, 3));
console.log(letters.join("-"));
console.log([...letters, "f"]);

const numbers = [10, 9, 1, 25];
console.log([...numbers].sort());
console.log([...numbers].sort((a, b) => a - b));
console.log([...numbers].reverse());`,
										starter: `const numbers = [10, 9, 1, 25];
console.log([...numbers].sort((a, b) => a - b));`
									}
								]
							},
							{
								id: 'js-b12', title: 'Objects',
								content: `<p>An object groups related values as <code>name: value</code> pairs. Read or change them with <code>object.name</code>.</p>`,
								explain: `<p>Objects store named values (<b>properties</b>). Access them with a dot (<code>dog.name</code>) or brackets (<code>dog["name"]</code>, handy when the name is in a variable). Properties can be added, changed or deleted at any time, can hold arrays or other objects, and can even hold functions (called <b>methods</b>).</p><p><code>Object.keys(obj)</code> lists the property names.</p>`,
								tryit: [
									`Add a colour property and log it`,
									`Log Object.keys(dog)`,
									`Add a method, speak() { return "Woof"; }, and call it`
								],
								example: `const dog = {
  name: "Rex",
  age: 3,
  tricks: ["sit", "roll"]
};
console.log(dog.name);
dog.age = 4;
console.log(dog.age);
console.log(dog.tricks[1]);
console.log(dog);`,
								starter: `const dog = { name: "Rex", age: 3 };
console.log(dog.name);`,
								branches: [
									{
										id: 'js-b12-1', title: 'Reading, changing and deleting properties',
										content: `<p>An object is not fixed either: you can read its properties in two ways, and add, change or delete them at any time.</p>`,
										explain: `<p><b>Dot notation</b> (<code>dog.name</code>) is the usual way. <b>Bracket notation</b> (<code>dog["name"]</code>) is needed when the name is stored in a variable or is not a valid identifier (<code>dog["favourite toy"]</code>). Assigning to a property that does not exist <b>adds</b> it; assigning to one that exists <b>changes</b> it; <code>delete dog.age</code> removes it. <code>"age" in dog</code> checks whether a property exists. Even when the object is a <code>const</code> you may still change what is inside it; you just cannot replace the whole object.</p>`,
										tryit: [
											`Add a colour property`,
											`Delete the age and then check "age" in dog`,
											`Read a property whose name is stored in a variable`
										],
										example: `const dog = { name: "Rex", age: 3 };
console.log(dog.name);
console.log(dog["age"]);

const key = "name";
console.log(dog[key]);

dog.age = 4;
dog.colour = "brown";
console.log(dog);
delete dog.age;
console.log(dog);
console.log("age" in dog, "colour" in dog);`,
										starter: `const dog = { name: "Rex" };
dog.age = 3;
console.log(dog);`
									},
									{
										id: 'js-b12-2', title: 'Methods and this',
										content: `<p>An object can hold <b>functions</b> as well as data. A function stored in an object is called a <b>method</b>.</p>`,
										explain: `<p>Write a method like a property whose value is a function: <code>speak() { ... }</code>. Call it with brackets: <code>dog.speak()</code>. Inside a method, <code>this</code> means "the object this method was called on", so the method can read and change the object's own properties: <code>this.name</code>. You have already used methods: <code>"text".toUpperCase()</code> and <code>list.push()</code> are methods of strings and arrays. Do not use an arrow function for a method that needs <code>this</code>.</p>`,
										tryit: [
											`Add a method birthday() that makes age one higher`,
											`Call birthday twice and log age`,
											`Add a method describe() that returns a sentence using this.name`
										],
										example: `const dog = {
  name: "Rex",
  age: 3,
  speak() {
    return this.name + " says Woof!";
  },
  birthday() {
    this.age++;
  }
};
console.log(dog.speak());
dog.birthday();
console.log(dog.age);`,
										starter: `const cat = {
  name: "Tom",
  speak() {
    return this.name + " says Meow";
  }
};
console.log(cat.speak());`
									}
								]
							},
							{
								id: 'js-b13', title: 'Functions',
								content: `<p>A function is a named block of code you can run again and again. It can take <b>parameters</b> and <code>return</code> a result.</p>`,
								explain: `<p>Functions wrap code so you can reuse it. <b>Parameters</b> are the names inside the brackets; <b>arguments</b> are the actual values you pass in. <code>return</code> sends a value back and stops the function; without it the result is <code>undefined</code>. Variables made inside a function stay inside it. A parameter can have a default: <code>function greet(name = "friend")</code>.</p>`,
								tryit: [
									`Write a function square(n) that returns n * n`,
									`Give greet a default name and call it with no argument`,
									`Write a function that takes two numbers and returns the larger one`
								],
								example: `function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Sam"));
console.log(greet("Alex"));

function add(a, b) {
  return a + b;
}
console.log(add(2, 3));`,
								starter: `function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Sam"));`,
								branches: [
									{
										id: 'js-b13-1', title: 'Parameters and default values',
										content: `<p>Parameters make a function flexible: the same code works on different inputs.</p>`,
										explain: `<p><b>Parameters</b> are the names in the brackets of the definition; <b>arguments</b> are the real values you pass when calling. Arguments match parameters in order. A parameter you do not pass is <code>undefined</code>. Give it a <b>default</b> to cover that: <code>function greet(name = "friend")</code>. A function may take any number of parameters, even none. Parameters exist only inside the function, and each call gets its own fresh copies.</p>`,
										tryit: [
											`Call greet with no argument`,
											`Add a second parameter punctuation with a default of "!"`,
											`Write rectangleArea(width, height)`
										],
										example: `function greet(name = "friend", punctuation = "!") {
  return "Hello, " + name + punctuation;
}
console.log(greet("Sam"));
console.log(greet());
console.log(greet("Alex", "?"));

function area(width, height) {
  return width * height;
}
console.log(area(3, 4));`,
										starter: `function greet(name = "friend") {
  return "Hello, " + name;
}
console.log(greet());`
									},
									{
										id: 'js-b13-2', title: 'Return values',
										content: `<p><code>return</code> is how a function hands a result back to the code that called it.</p>`,
										explain: `<p>The <b>returned value</b> replaces the function call, so you can store it (<code>const total = add(2, 3)</code>), print it or pass it to another function. <code>return</code> also <b>stops</b> the function: nothing after it runs. A function without <code>return</code> gives <code>undefined</code>. A function can have several <code>return</code> statements (for example, inside <code>if</code>) and can return any type: a number, text, a boolean, an array or an object. <code>console.log</code> inside a function only <i>prints</i>; it does not give a value back.</p>`,
										tryit: [
											`Write isEven(n) that returns true or false`,
											`Write a function that returns the larger of two numbers`,
											`Call add inside another call: add(add(1, 2), 3)`
										],
										example: `function add(a, b) {
  return a + b;
}
const total = add(2, 3);
console.log(total);
console.log(add(add(1, 2), 3));

function sign(n) {
  if (n > 0) return "positive";
  if (n < 0) return "negative";
  return "zero";
}
console.log(sign(5), sign(-2), sign(0));

function noReturn() {
  const x = 1;
}
console.log(noReturn());`,
										starter: `function double(n) {
  return n * 2;
}
console.log(double(21));`
									}
								]
							}
					]
				},
				{
					id: 'experienced', name: 'Experienced',
					blurb: 'What you can do with those pieces: collections, functions and the page.',
					lessons: [
							{
								id: 'js-e1', title: 'Arrow functions',
								content: `<p>A shorter way to write a function: <code>(a, b) =&gt; a + b</code>. They are often handed to other functions as <b>callbacks</b>.</p>`,
								explain: `<p>An arrow function is a shorter way to write a function. With one parameter the brackets are optional, and with a one-line body the <code>return</code> is implied: <code>n =&gt; n * 2</code>. Use braces and <code>return</code> for several lines. They are mostly used as <b>callbacks</b>: small functions handed to another function.</p>`,
								tryit: [
									`Write an arrow function that subtracts two numbers`,
									`Write one that returns true when a number is even`,
									`Rewrite greet from the Functions lesson as an arrow function`
								],
								example: `const double = n => n * 2;
const add = (a, b) => a + b;
console.log(double(4));
console.log(add(2, 3));`,
								starter: `const double = n => n * 2;
console.log(double(4));`
							},
							{
								id: 'js-e2', title: 'Array methods: forEach, map, filter',
								content: `<p><code>forEach</code> does something for every item, <code>map</code> makes a new array and <code>filter</code> keeps only the items that pass a test.</p>`,
								explain: `<p>These methods take a callback and replace most loops. <code>forEach</code> runs it for each item (and returns nothing). <code>map</code> returns a new array of the callback's results. <code>filter</code> returns a new array with only the items for which the callback returns true. They do not change the original array, and can be chained: <code>list.filter(...).map(...)</code>.</p>`,
								tryit: [
									`Triple every number with map`,
									`Keep only the odd numbers with filter`,
									`Chain filter and map in one line`
								],
								example: `const numbers = [1, 2, 3, 4, 5];

numbers.forEach(n => console.log("Number " + n));

const doubled = numbers.map(n => n * 2);
console.log(doubled);

const big = numbers.filter(n => n > 2);
console.log(big);`,
								starter: `const numbers = [1, 2, 3, 4, 5];
console.log(numbers.map(n => n * 2));`,
								branches: [
									{
										id: 'js-e2-1', title: 'map in depth',
										content: `<p><code>map</code> builds a <b>new array</b> by running a function on every item of an old one.</p>`,
										explain: `<p>The new array is always the <b>same length</b>, and the original is untouched. Whatever the callback returns becomes the new item. The callback may also take the item's position as a second parameter. Use it to convert (numbers to text), to extract (the names out of a list of people) or to transform (add tax to every price). Common mistake: forgetting to <code>return</code> inside a callback written with braces.</p>`,
										tryit: [
											`Turn the prices into text with a $ sign`,
											`Extract just the ages from the people`,
											`Use the index to number the fruits`
										],
										example: `const prices = [5, 12, 8];
console.log(prices.map(p => p * 1.1));
console.log(prices.map(p => "$" + p));

const people = [{ name: "Sam", age: 12 }, { name: "Kim", age: 15 }];
console.log(people.map(p => p.name));

const fruits = ["apple", "banana"];
console.log(fruits.map((f, i) => (i + 1) + ". " + f));`,
										starter: `const numbers = [1, 2, 3];
console.log(numbers.map(n => n * n));`
									},
									{
										id: 'js-e2-2', title: 'filter in depth',
										content: `<p><code>filter</code> builds a <b>new array</b> containing only the items that pass a test.</p>`,
										explain: `<p>The callback must return true (keep the item) or false (drop it). The new array can be shorter, even empty; the original is untouched. It works on lists of objects as well: keep the adults, the products in stock, the tasks not yet done. Chain it with <code>map</code> when you want to select and then transform, and read <code>.length</code> to count matches.</p>`,
										tryit: [
											`Keep only the words longer than 4 letters`,
											`Count how many numbers are above 10`,
											`Filter then map: double only the even numbers`
										],
										example: `const numbers = [3, 12, 7, 20, 5];
console.log(numbers.filter(n => n > 6));
console.log(numbers.filter(n => n > 6).length);

const words = ["cat", "elephant", "dog", "giraffe"];
console.log(words.filter(w => w.length > 3));

const tasks = [{ text: "wash", done: true }, { text: "read", done: false }];
console.log(tasks.filter(t => !t.done));
console.log(numbers.filter(n => n % 2 === 0).map(n => n * 2));`,
										starter: `const numbers = [3, 12, 7, 20, 5];
console.log(numbers.filter(n => n > 6));`
									}
								]
							},
							{
								id: 'js-e3', title: 'Template strings and text methods',
								content: `<p>Text in backticks can hold values with <code>\${ }</code>, and can run over several lines. Handy methods: <code>.split()</code> cuts text into an array, <code>.join()</code> glues an array into text, <code>.replace()</code>, <code>.trim()</code> and <code>.padStart()</code>.</p>`,
								explain: `<p>A <b>template string</b> uses backticks and drops values in with <code>\${ }</code>; any expression works inside, even maths. It can also run over several lines. <code>split(separator)</code> turns a string into an array, <code>join(glue)</code> does the opposite, <code>replace</code> swaps text, <code>trim</code> removes spaces from the ends and <code>padStart</code> pads to a length (useful for times like 07:05).</p>`,
								tryit: [
									`Write a sentence that uses two variables and a calculation inside \${ }`,
									`Split a sentence into words and count them`,
									`Use replace to change one word in a sentence`
								],
								example: `const name = "Sam";
const age = 12;
console.log(\`\${name} is \${age} years old.\`);
console.log(\`Next year: \${age + 1}\`);

const words = "one two three".split(" ");
console.log(words);
console.log(words.join("-"));
console.log("  spaced  ".trim());
console.log("I like cats".replace("cats", "dogs"));
console.log("7".padStart(3, "0"));`,
								starter: `const name = "Sam";
console.log(\`Hello, \${name}!\`);`
							},
							{
								id: 'js-e4', title: 'Switch and the ternary operator',
								content: `<p><code>switch</code> picks one of many cases (remember <code>break</code>). The ternary <code>condition ? a : b</code> is a one-line if/else that gives back a value.</p>`,
								explain: `<p><code>switch</code> compares one value against many <code>case</code> labels. Without <code>break</code> it "falls through" into the next case, which is usually a bug. <code>default</code> handles everything else. The <b>ternary</b> <code>test ? a : b</code> is an expression, so you can use it directly inside a log or a variable.</p>`,
								tryit: [
									`Change day to 1, 3 and 7`,
									`Add a case 5 for Friday`,
									`Write a ternary that logs "even" or "odd" for a number`
								],
								example: `const day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Some other day");
}

const age = 15;
const label = age >= 18 ? "adult" : "young person";
console.log(label);`,
								starter: `const hour = 9;
const greeting = hour < 12 ? "Good morning" : "Good day";
console.log(greeting);`
							},
							{
								id: 'js-e5', title: 'Looping over arrays and objects',
								content: `<p>You already know <code>for</code> and <code>while</code>. Arrays and objects have their own handy ways to loop over everything inside them.</p>`,
								explain: `<p><code>for (const item of list)</code> visits each <b>value</b> of an array. <code>for (const key in object)</code> visits each property <b>name</b> of an object (then <code>object[key]</code> reads the value). <code>Object.keys(obj)</code>, <code>Object.values(obj)</code> and <code>Object.entries(obj)</code> give you arrays of the names, the values, or [name, value] pairs, which you can loop over or use with <code>map</code> and <code>filter</code>. <code>forEach</code> gives the callback the item and also its position (index).</p>`,
								tryit: [
									`Add another person to scores and run again`,
									`Print only the people with a score above 10`,
									`Use Object.values and reduce to add all the scores`
								],
								example: `const scores = { sam: 12, alex: 9, kim: 15 };

for (const name in scores) {
  console.log(name + " scored " + scores[name]);
}
console.log(Object.keys(scores));
console.log(Object.values(scores));
for (const [name, score] of Object.entries(scores)) {
  console.log(name + ": " + score);
}

const list = ["a", "b", "c"];
list.forEach((item, index) => console.log(index + " = " + item));`,
								starter: `const scores = { sam: 12, alex: 9 };
for (const name in scores) {
  console.log(name, scores[name]);
}`
							},
							{
								id: 'js-e6', title: 'Built-in helpers: numbers and dates',
								content: `<p>JavaScript comes with a toolbox of ready-made functions for converting values, rounding numbers and working with dates.</p>`,
								explain: `<p><code>Number("42")</code>, <code>parseInt("12px")</code> and <code>parseFloat("3.14abc")</code> turn text into numbers (the last two stop at the first character that is not part of the number). <code>isNaN(x)</code> checks for "not a number". <code>(3.14159).toFixed(2)</code> rounds to two decimals and gives text. <code>Math.floor</code>, <code>Math.ceil</code>, <code>Math.round</code> and <code>Math.random()</code> do the rest of the maths.</p><p>A <code>Date</code> object holds a moment in time: <code>new Date()</code> is now, and <code>new Date(2026, 0, 15)</code> is 15 January 2026. Careful: <b>months count from 0</b>, so January is 0. Methods like <code>getFullYear()</code>, <code>getMonth()</code>, <code>getDate()</code> and <code>getDay()</code> read the parts.</p>`,
								tryit: [
									`Change the date to your birthday and log the year`,
									`Use toFixed to show a price like 4.5 as 4.50`,
									`Log Number("abc") and isNaN of the result`
								],
								example: `console.log(Math.floor(7.9));
console.log(Number("42") + 1);
console.log(parseInt("12px"));
console.log(parseFloat("3.14abc"));
console.log((3.14159).toFixed(2));
console.log(isNaN("hello"));

const d = new Date(2026, 0, 15);
console.log(d.getFullYear());
console.log(d.getMonth() + 1);
console.log(d.getDate());`,
								starter: `const d = new Date(2026, 5, 1);
console.log(d.getFullYear());
console.log(d.getMonth());`
							},
							{
								id: 'js-e7', title: 'Changing the page (DOM)',
								content: `<p>The DOM is the page as JavaScript sees it. Make elements with <code>document.createElement()</code> and add them with <code>appendChild()</code>. New elements appear below the text output.</p>`,
								explain: `<p>The browser turns the HTML into a tree of objects called the <b>DOM</b>. JavaScript can build parts of that tree: <code>createElement</code> makes an element, <code>textContent</code> sets its text, and <code>appendChild</code> (or <code>append</code>) puts it into the page. Nothing shows until you add it.</p>`,
								tryit: [
									`Create a second paragraph and add it too`,
									`Add a heading, a paragraph and a button in one go`,
									`Use a for loop to add five list items to a ul`
								],
								example: `const title = document.createElement("h2");
title.textContent = "Hello from JavaScript!";
document.body.appendChild(title);
console.log("I added a heading to the page.");`,
								starter: `const p = document.createElement("p");
p.textContent = "Change me!";
document.body.appendChild(p);`
							},
							{
								id: 'js-e8', title: 'Selecting and styling elements',
								content: `<p><code>document.querySelector("css selector")</code> finds an element already on the page. Then change its <code>textContent</code>, its <code>style</code> or toggle a class with <code>classList</code>. The elements below the output are the lesson's demo page.</p>`,
								explain: `<p><code>document.querySelector("...")</code> takes a CSS selector and returns the first match; <code>querySelectorAll</code> returns all matches as a list. Once you hold an element you can change its <code>textContent</code>, its <code>style</code> (CSS names are written in camelCase, like <code>backgroundColor</code>), or use <code>classList.add / remove / toggle</code> to switch a CSS class on and off.</p><p>The page shown below the printed output is the demo this lesson works on.</p>`,
								tryit: [
									`Change the box's background colour using style`,
									`Toggle the "big" class with classList.toggle`,
									`Colour every li using a loop over querySelectorAll`
								],
								example: `const title = document.querySelector("h2");
title.textContent = "Changed by JavaScript";
title.style.color = "tomato";

const box = document.querySelector(".box");
box.classList.add("big");

const items = document.querySelectorAll("li");
console.log("List items found: " + items.length);
items[1].style.fontWeight = "bold";`,
								starter: `const title = document.querySelector("h2");
title.style.color = "seagreen";`,
								demo: `<style>.box{padding:8px;background:#eef3ff}.big{font-size:22px;border:2px solid #2965f1}</style><h2>Original title</h2><div class="box">A box</div><ul><li>One</li><li>Two</li><li>Three</li></ul>`
							},
							{
								id: 'js-e9', title: 'Events',
								content: `<p>Make the page react with <code>addEventListener</code>. Click the button in the Result window to see it work.</p>`,
								explain: `<p>An <b>event</b> is something that happens: a click, a key press, a mouse move. <code>addEventListener("click", function)</code> says "when this happens, run this". The function is called later, every time it happens, not right now. Other common events: <code>input</code>, <code>keydown</code>, <code>mouseover</code> and <code>submit</code>. The function can receive an <code>event</code> object with details.</p>`,
								tryit: [
									`Make the button show the number of clicks`,
									`Change the event to "mouseover"`,
									`Log event.type inside the listener by giving the function a parameter e`
								],
								example: `const button = document.createElement("button");
button.textContent = "Click me";

let clicks = 0;
button.addEventListener("click", () => {
  clicks = clicks + 1;
  button.textContent = "Clicked " + clicks + " times";
});

document.body.appendChild(button);`,
								starter: `const button = document.createElement("button");
button.textContent = "Click me";

button.addEventListener("click", () => {
  button.textContent = "Thanks!";
});

document.body.appendChild(button);`
							}
					]
				},
				{
					id: 'advanced', name: 'Advanced',
					blurb: 'Combining everything: modern techniques and small real projects.',
					lessons: [
							{
								id: 'js-a1', title: 'More array methods: reduce, find, sort',
								content: `<p><code>reduce</code> boils an array down to one value. <code>find</code> returns the first match, <code>some</code> / <code>every</code> test the whole list and <code>sort</code> orders it (give it a compare function for numbers).</p>`,
								explain: `<p><code>reduce((total, item) =&gt; ..., start)</code> walks through the array carrying a running value, so it can add, count, find a maximum or build an object. <code>find</code> returns the first item that passes a test (or undefined), <code>some</code> is true if any item passes and <code>every</code> if all do. <code>sort</code> changes the array it is called on and compares as <i>text</i> unless you give it a compare function like <code>(a, b) =&gt; a - b</code>; copy first with <code>[...list]</code>.</p>`,
								tryit: [
									`Find the largest price with reduce`,
									`Sort the prices from biggest to smallest`,
									`Check whether some price is exactly 8`
								],
								example: `const prices = [5, 12, 8, 20];

const total = prices.reduce((sum, p) => sum + p, 0);
console.log("Total: " + total);

console.log(prices.find(p => p > 10));
console.log(prices.some(p => p > 15));
console.log(prices.every(p => p > 6));

const sorted = [...prices].sort((a, b) => a - b);
console.log(sorted);`,
								starter: `const nums = [3, 1, 2];
console.log(nums.reduce((a, b) => a + b, 0));
console.log([...nums].sort((a, b) => a - b));`
							},
							{
								id: 'js-a2', title: 'Destructuring and spread',
								content: `<p>Destructuring unpacks values into variables: <code>const {name} = person</code> or <code>const [a, b] = list</code>. The spread <code>...</code> copies or merges arrays and objects without changing the original.</p>`,
								explain: `<p>Destructuring is shorthand for pulling parts out: <code>const {name, age} = person</code> creates both variables, and <code>const [a, b] = list</code> uses positions. You can rename (<code>{name: n}</code>) and set defaults (<code>{city = "?"}</code>). Spread <code>...</code> copies items into a new array or object, so you can add or override things without changing the original. As a <b>rest</b> parameter it gathers the remaining arguments.</p>`,
								tryit: [
									`Destructure the age too`,
									`Use spread to copy the array with one more item`,
									`Write a function with ...numbers that returns their sum`
								],
								example: `const person = { name: "Sam", age: 12, city: "Manila" };
const { name, city } = person;
console.log(name, city);

const [first, second] = ["red", "green", "blue"];
console.log(first, second);

const more = { ...person, age: 13 };
console.log(more);
console.log(person.age);

const all = [...[1, 2], ...[3, 4]];
console.log(all);`,
								starter: `const point = { x: 3, y: 4 };
const { x, y } = point;
console.log(x + y);`
							},
							{
								id: 'js-a3', title: 'Scope and closures',
								content: `<p>A variable lives only inside the <code>{ }</code> where it is made (its <b>scope</b>). A <b>closure</b> is a function that remembers the variables around it, even after the outer function has finished. That lets you keep private state.</p>`,
								explain: `<p><b>Scope</b> is where a variable can be seen. <code>let</code> and <code>const</code> live inside the nearest <code>{ }</code>; code outside cannot see them. A <b>closure</b> happens when an inner function keeps using a variable of its outer function after the outer one has finished; that variable stays alive, private to the inner function. Counters, private data and function factories all rely on this.</p>`,
								tryit: [
									`Make a counter that starts from a number you pass in`,
									`Try to log count outside the function and read the error`,
									`Write makeMultiplier(n) that returns a function multiplying by n`
								],
								example: `function makeCounter() {
  let count = 0;
  return function () {
    count = count + 1;
    return count;
  };
}

const a = makeCounter();
const b = makeCounter();
console.log(a());
console.log(a());
console.log(a());
console.log(b());`,
								starter: `function makeAdder(n) {
  return x => x + n;
}
const addFive = makeAdder(5);
console.log(addFive(10));`
							},
							{
								id: 'js-a4', title: 'Classes',
								content: `<p>A class is a blueprint for objects. The <code>constructor</code> sets them up, methods are functions on them, and <code>extends</code> builds one class on top of another.</p>`,
								explain: `<p>A class describes the shape of an object. <code>new Dog("Rex")</code> runs the <code>constructor</code> and builds an <b>instance</b>. Inside, <code>this</code> means the object itself. Methods are shared by all instances. <code>extends</code> makes a <b>subclass</b> that inherits everything and may override methods; <code>super(...)</code> calls the parent's constructor.</p>`,
								tryit: [
									`Add a method to Player that lowers the score`,
									`Make two players and let only one win`,
									`Create class Wizard extends Player with its own win()`
								],
								example: `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " makes a sound.";
  }
}

class Dog extends Animal {
  speak() {
    return this.name + " barks!";
  }
}

const cat = new Animal("Tom");
const dog = new Dog("Rex");
console.log(cat.speak());
console.log(dog.speak());`,
								starter: `class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  win() {
    this.score = this.score + 10;
  }
}
const p = new Player("Sam");
p.win();
console.log(p.name, p.score);`
							},
							{
								id: 'js-a5', title: 'Errors and JSON',
								content: `<p>Wrap risky code in <code>try { } catch (e) { }</code> so one error does not stop everything, and use <code>throw</code> to raise your own. <code>JSON.stringify</code> turns data into text and <code>JSON.parse</code> turns it back, which is how data is saved and sent.</p>`,
								explain: `<p>Errors normally stop the program. Code in <code>try</code> that throws jumps to <code>catch</code>, where you handle it and the program carries on; <code>finally</code> always runs. Use <code>throw new Error("message")</code> for your own rules. JSON is text in the style of JavaScript objects: <code>JSON.stringify</code> turns data into text for saving or sending and <code>JSON.parse</code> turns it back (and throws if the text is invalid).</p>`,
								tryit: [
									`Parse valid JSON such as '{"a":1}' inside the try`,
									`Log e.message in the catch`,
									`Write a function that throws an error when given a negative number`
								],
								example: `function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(1, 0));
} catch (e) {
  console.log("Caught: " + e.message);
} finally {
  console.log("Always runs");
}

const text = JSON.stringify({ name: "Sam", scores: [1, 2] });
console.log(text);
console.log(JSON.parse(text).scores[1]);`,
								starter: `try {
  JSON.parse("not json");
} catch (e) {
  console.log("That was not valid JSON");
}`
							},
							{
								id: 'js-a6', title: 'Timers, promises and async/await',
								content: `<p><code>setTimeout</code> runs code later and <code>setInterval</code> repeats it. A <b>promise</b> stands for a result that is not ready yet; <code>await</code> inside an <code>async</code> function waits for it. Watch the order of the output.</p>`,
								explain: `<p>Some things take time. <code>setTimeout(fn, ms)</code> runs fn once later and <code>setInterval</code> repeatedly (<code>clearInterval</code> stops it). A <b>promise</b> represents a value that will arrive later. <code>await</code>, allowed inside an <code>async</code> function, pauses that function (not the whole page) until the promise is ready. Code after the async call keeps running, so the output order can be surprising: read the numbers in the Example.</p>`,
								tryit: [
									`Change the waits and predict the order before you run it`,
									`Add a third step to run()`,
									`Use setInterval and clearInterval to count to 3`
								],
								example: `console.log("1: start");

setTimeout(() => console.log("3: after 200ms"), 200);

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function run() {
  await wait(100);
  console.log("2: after 100ms");
  await wait(300);
  console.log("4: after 400ms");
}
run();

console.log("1b: end of the script");`,
								starter: `const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function run() {
  console.log("Waiting...");
  await wait(300);
  console.log("Done!");
}
run();`
							},
							{
								id: 'js-a7', title: 'Project: a to-do list',
								content: `<p>Combine arrays, functions, the DOM and events into a working app: type a task, add it, and click a task to tick it off. The array is the data, and <code>render()</code> redraws the list from it.</p>`,
								explain: `<p>Read it in three parts. <b>Data</b>: the <code>tasks</code> array. <b>Drawing</b>: <code>render()</code> clears the list and rebuilds it from the array. <b>Actions</b>: the event listeners change the array and then call <code>render()</code>. Keeping data separate from display is the idea behind every modern web framework.</p>`,
								tryit: [
									`Show how many tasks are done below the list`,
									`Add a Delete button next to each task`,
									`Let the Enter key add a task (use the keydown event)`
								],
								example: `const tasks = [{ text: "Learn JavaScript", done: false }];

const input = document.createElement("input");
input.placeholder = "New task";
const add = document.createElement("button");
add.textContent = "Add";
const list = document.createElement("ul");
document.body.append(input, add, list);

function render() {
  list.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.style.cursor = "pointer";
    li.style.textDecoration = task.done ? "line-through" : "none";
    li.addEventListener("click", () => {
      task.done = !task.done;
      render();
    });
    list.appendChild(li);
  });
}

add.addEventListener("click", () => {
  if (input.value.trim() === "") return;
  tasks.push({ text: input.value, done: false });
  input.value = "";
  render();
});

render();`,
								starter: `const list = document.createElement("ul");
document.body.appendChild(list);

const items = ["One", "Two"];
items.forEach(text => {
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
});`
							},
							{
								id: 'js-a8', title: 'Project: a quiz game',
								content: `<p>One more project. An array of question objects drives the game, a function shows the current question, and clicking an answer updates the score. Everything you learned is used here.</p>`,
								explain: `<p>This game is a <b>state machine</b>: <code>current</code> and <code>score</code> are the state; <code>show()</code> draws whatever the state says; each click changes the state and calls <code>show()</code> again. The questions are plain objects in an array, so adding a question takes one line and no new code.</p>`,
								tryit: [
									`Add a fourth question`,
									`Add a third option to a question`,
									`Show "Correct!" or "Wrong" for a moment before the next question`
								],
								example: `const questions = [
  { q: "What does HTML describe?", options: ["Structure", "Style"], answer: 0 },
  { q: "Which one adds style?", options: ["CSS", "HTML"], answer: 0 },
  { q: "Which one adds behaviour?", options: ["CSS", "JavaScript"], answer: 1 }
];
let current = 0;
let score = 0;

const box = document.createElement("div");
document.body.appendChild(box);

function show() {
  box.innerHTML = "";
  if (current >= questions.length) {
    box.textContent = "Finished! Score: " + score + " / " + questions.length;
    return;
  }
  const item = questions[current];
  const title = document.createElement("p");
  title.textContent = item.q;
  box.appendChild(title);
  item.options.forEach((text, i) => {
    const b = document.createElement("button");
    b.textContent = text;
    b.style.marginRight = "6px";
    b.addEventListener("click", () => {
      if (i === item.answer) score++;
      current++;
      show();
    });
    box.appendChild(b);
  });
}
show();`,
								starter: `const question = { q: "2 + 2 = ?", options: [3, 4], answer: 1 };

const box = document.createElement("div");
box.textContent = question.q + " ";
question.options.forEach((n, i) => {
  const b = document.createElement("button");
  b.textContent = n;
  b.addEventListener("click", () => {
    box.textContent = i === question.answer ? "Correct!" : "Try again";
  });
  box.appendChild(b);
});
document.body.appendChild(box);`
							}
					]
				}
			]
		}
	]
};