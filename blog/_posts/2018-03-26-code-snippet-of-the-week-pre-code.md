---
layout: post
title: Code snippet of the week - code/pre elements
tags:
  - "code-snippet-of-the-week"
  - "html"
categories:
  - "programming"
image: /assets/code-snippet-of-the-week/header.png
author: edric_chan
---

<a name="top"></a>

_Note: This blog post originally appeared on my [blog](https://edricchan03.blogspot.com/2018/03/code-snippet-of-week-code-pre-elements.html)._

Another code snippet! This week, I'll be covering how to create code snippets with the `<code>` and `<pre>` HTML tags.

_Note: If you haven't seen it, I've designed a new header image for these kind of posts! Look out for posts with the image on the top of the post!_

<!-- End of excerpt -->

# Getting Started

To get started, ensure that you have a code editor (ideally [Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/"), [Atom](https://atom.io/), etc.).

1. Get started by downloading either of the coding editors as stated above (or you can search some online; **don't use your built-in text editor as this may screw things up in the encoding**)
2. Next, open up the code editor and create a new file. We'll name the file `index.html`.
3. Create the bare minimal for an HTML file. Copy the code below:

    ```html
    <!DOCTYPE html> <!-- This is the line that is required in order for the page to work properly. -->
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Document title</title>
        <!-- I'm a comment! -->
        <!-- Multiline comments
        are<br>
        okay too -->
    </head>
    <body>
        <!-- Your page content goes here -->
        <p>Hello, world!</p>
    </html>
    ```

## Creating code

To create code, surround some text with `<code>` (which can be optionally nested within a `<pre>`).

```html
<pre><code>Hello, World! Here is some useful content in a code block!</code></pre>
```

See the MDN web docs for more info:

* [`<code>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)
* [`<pre>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)

## Highlight.js Example

This example assumes that you've included [Highlight.js](https://highlightjs.org) and that you've initialized Highlight.js in your main HTML file.

```html
<pre><code class="lang-html">
    &amp;lt;p&amp;gt;Displaying a code snippet within an actual code snippet? Codeception!&amp;lt;/p&amp;gt;
</code></pre>
```

## Demo

Here's a working demo for you to play with!

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="zPdxPZ" data-user="Edric03" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Edric03/pen/MVEdgb">
  Code/ Pre Element</a> by Edric Chan (<a href="https://codepen.io/Edric03">@Edric03</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
