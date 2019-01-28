---
layout: post
title: Code snippet of the week | Unordered and Ordered lists
tags:
  - "code-snippet-of-the-week"
  - "html"
categories:
  - "programming"
hero_img: /assets/code-snippet-of-the-week/header.png
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

<p data-height="307" data-theme-id="31098" data-slug-hash="zPdxPZ" data-default-tab="html,result" data-user="Chan4077" data-embed-version="2" data-pen-title="Unordered & Ordered lists" class="codepen">See the Pen <a href="https://codepen.io/Chan4077/pen/zPdxPZ/">Unordered & Ordered lists</a> by Edric Chan (<a href="https://codepen.io/Chan4077">@Chan4077</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
<a class="mdc-button mdc-button--raised mdc-button--secondary" href="https://codepen.io/Chan4077/pen/zPdxPZ" target="_blank" data-mdc-auto-init="MDCRipple"><svg style="height: 24px; width: 24px;" viewbox="0 0 24 24" class="mdc-button__icon"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.09,12L12,14.08V14.09L8.91,12L12,9.92V9.92L15.09,12M12,2C11.84,2 11.68,2.06 11.53,2.15L2.5,8.11C2.27,8.22 2.09,8.43 2,8.67V14.92C2,15.33 2,15.33 2.15,15.53L11.53,21.86C11.67,21.96 11.84,22 12,22C12.16,22 12.33,21.95 12.47,21.85L21.85,15.5C22,15.33 22,15.33 22,14.92V8.67C21.91,8.42 21.73,8.22 21.5,8.1L12.47,2.15C12.32,2.05 12.16,2 12,2M16.58,13L19.59,15.04L12.83,19.6V15.53L16.58,13M19.69,8.9L16.58,11L12.83,8.47V4.38L19.69,8.9M20.33,10.47V13.53L18.07,12L20.33,10.47M7.42,13L11.17,15.54V19.6L4.41,15.04L7.42,13M4.31,8.9L11.17,4.39V8.5L7.42,11L4.31,8.9M3.67,10.5L5.93,12L3.67,13.54V10.5Z"> </path></svg> View Demo</a>
