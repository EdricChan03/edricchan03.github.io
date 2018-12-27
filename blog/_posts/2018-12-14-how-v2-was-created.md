---
layout: post
title: How v2 of the website was created
tags:
  - "website"
  - "mdc-components"
categories:
  - "programming"
---

So how was version 2 of this created?

Well, it all began when I found out that someone was using Material Components for the Web on a Github Page, I got excited and decided to implement Material Components for the Web on my own site.

<!-- End of excerpt -->

## Deciding on site layouts
{: .mdc-typography--headline3}

I began thinking of potential site layouts. However, as I'm not a good designer, I could only think of a few.

As I could only think of a few, I decided to see how the author of [this site](https://blog.davidmedenjak.com/) had done the layout.

I discovered that he was using the Layout Grid component to have a grid-based layout.

I decided on doing exactly that: a grid-based layout.

### Copy-pasta code
{: .mdc-typography--headline4}

Once I decided on what to do, I headed to the [Material Components for the Web](https://material.io/develop/web) page to get started.

On the docs, it suggested to either install Material Components with the minimised JavaScript and CSS file from Unpkg, or I install it with NPM. I went with NPM.

However, I also discovered that a recent release was pushed to remove `node_modules` artifacts to reduce building time. This could actually impact what I was doing.
