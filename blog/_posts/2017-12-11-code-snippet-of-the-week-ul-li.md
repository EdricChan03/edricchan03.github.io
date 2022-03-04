---
layout: post
title: Code snippet of the week | Unordered and Ordered lists
tags:
  - "code-snippet-of-the-week"
  - "html"
categories:
  - "programming"
image: /assets/code-snippet-of-the-week/header.png
author: edric_chan
---

_Note: This blog post originally appeared on my [blog](https://edricchan03.blogspot.com/2018/03/code-snippet-of-week-code-pre-elements.html)._

Yes, it's a code snippet! You heard that right. I'll be trying to create a code snippet with pure HTML. (You can view the source code by pressing <kbd>Cmd</kbd>+<kbd>Option</kbd>+<kbd>U</kbd> or <kbd>Ctrl</kbd>+<kbd>U</kbd> if you're on the desktop.)

<!-- End of excerpt -->

# Notices

* I won't show the getting started section again anymore after this.
* I'll be using a tab indent of 4 spaces. You can use any code indent you want. (To format a document in Visual Studio Code, use <kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd>)
* I'm assuming you have a computer. (If you don't have one, then...)

# Getting Started

To get started, ensure that you have a code editor (ideally [Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/), etc.).

1. Get started by downloading either of the coding editors as stated above (or you can search some online; **DON'T USE YOUR BUILT-IN NOTEPAD/TEXTEDIT!!**)
2. Next, open up the code editor and create a new file. We'll name the file `index.html`
3. Create the bare minimal for an HTML file. Copy the code below:

```html
<!DOCTYPE html> <!-- This is the line that is required in order for the page to work properly. -->
<html>
  <head>
    <meta charset="UTF-8">
    <title>Document title</title>
    <!-- I'm a comment! -->
    <!-- Multiline comments
    are
    okay too -->
  </head>
  <body>
    <!-- Your page content goes here -->
    <p>Hello, world!</p>
</html>
```

## Creating an unordered list

To create an unordered list, simply use the `<ul>` element and add some list items to it by using the `<li>` element.

```html
<ul>
  <li>List item contents</li>
</ul>
```

Unordered lists can be used for example, shopping lists, etc.

## Creating an ordered list

To create an ordered list, simply use the `<ol>` element and add some list items to it by using the `<li>` element.
```html
<ol>
  <li>List item contents</li>
</ol>
```

Ordered lists can be used for legal documentations, as well as questions, etc.

## Demo

Here's a working demo for you to play with!

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="zPdxPZ" data-user="Edric03" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Edric03/pen/zPdxPZ">
  Unordered &amp; Ordered lists</a> by Edric Chan (<a href="https://codepen.io/Edric03">@Edric03</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
