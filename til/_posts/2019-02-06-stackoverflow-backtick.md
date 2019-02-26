---
layout: post
title: "TIL: StackOverflow supports backticks"
tags:
  - stackoverflow
  - markdown
categories:
  - stackoverflow
author: edric_chan
---

Today I Learned that StackOverflow supports 3 backticks to create a code block, similar to a fenced code block in GitHub's Flavoured Markdown.

````markdown
```html
<h1>Header!</h1>
<p id="paragraph1">Hello, HTML code!</p>
```
````

And here's the other form of syntax for a code block on StackOverflow:

```markdown
<!-- language: lang-html -->

    <h1>Header!</h1>
    <p id="paragraph1">Hello, HTML code!</p>
```

EDIT: I also learnt that it is possible to have 3 backticks in a code block. (See the source for this post for more info)
