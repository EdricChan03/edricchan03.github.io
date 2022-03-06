---
layout: post
title: Status Update | February 2022
tags:
- status-update
author: edric_chan
---

Look ma it's another status update about 3 years later!
In this post, I'll cover what I've done so far in February 2022 and share my plans for the following month.

<!-- End of excerpt -->

## What I've done this month

* I've been mostly working on [StudyBuddy for Android](https://github.com/EdricChan03/StudyBuddy-android).
* I've also setup some initial project management tools that should hopefully help in reducing the amount of workload.

### Existing projects

#### [StudyBuddy for Android](https://github.com/EdricChan03/StudyBuddy-android)

* I've updated the dependency version management to use [Gradle 7's Version Catalogs](https://docs.gradle.org/current/userguide/platforms.html) - [corresponding pull request](https://github.com/EdricChan03/StudyBuddy-android/pull/349)
* I've switched to using [(Kotlin) Coroutines Image Loader](https://coil-kt.github.io/coil/) to load images - [corresponding pull request](https://github.com/EdricChan03/StudyBuddy-android/pull/351)
* Did some slight tidying up of the codebase:
  * Used singleton classes where possible - [corresponding commit](https://github.com/EdricChan03/StudyBuddy-android/commit/65693884958877758ee240af39f62fad0690154a)
  * Improved the continuous integration configuration - [corresponding commit](https://github.com/EdricChan03/StudyBuddy-android/commit/d203e76256dc8ac97bccd7ba210dc8fcad4dfa3a)
  * Updated the Gradle build scripts to use repository settings (see https://developer.android.com/studio/releases/gradle-plugin for more info) - [corresponding commit](https://github.com/EdricChan03/StudyBuddy-android/commit/ee7ccae79a20aaa35d209359f2a384103a75815f)
  * And bumped Gradle to v7.4 - [corresponding commit](https://github.com/EdricChan03/StudyBuddy-android/commit/12f7cf808b280a08324d5d3c0f88aefdc0a16ca0)
* I've also renamed the default branch to use "main" instead

#### [RSS Reader](https://github.com/EdricChan03/rss-reader-angular)

* I've mostly merged some pull requests related to dependency updates
* I've also renamed the repository to "rss-reader-angular" as I'm planning to maybe work on a [Svelte](https://svelte.dev/) version of the app - stay tuned! :P
  * Note: Existing links to the site should work as expected, but not deep links unfortunately (so for example, https://edricchan03.github.io/rss-reader would redirect as expected, but not https://edricchan03.github.io/rss-reader/feed)
* I've also attempted to update the dependencies in this app (for e.g. Angular v11 -> v13), but as I've not worked on it for a while, there's been multiple issues (such as version incompatibilities, and an old `package-lock.json` file) that are blocking me from continuing.

#### [My site](https://github.com/EdricChan03/edricchan03.github.io)

##### New stuff

* You may have noticed that the fonts look a bit different now. This is because I've recently changed them as the old default looked a bit boring to be honest. As of the time of this writing, the fonts chosen are:
  * Default: [Rambla](https://fonts.google.com/specimen/Rambla)
  * Headlines: [Work Sans](https://fonts.google.com/specimen/Work+Sans)
  * Code: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
* Leave feedback down below on what you think of the new site! (And here's the [commit](https://github.com/EdricChan03/edricchan03.github.io/commit/2c1742d9e12bf20ce1b098c98966786e4bf7fd41), if you're interested)
* And I've also added support for editing the page you're currently seeing on GitHub, if you so choose. ([commit](https://github.com/EdricChan03/edricchan03.github.io/commit/4f65dc011060f70d66d1269b10ada92824f0e792))
* I've added tooltips to buttons on the top right of the page. ([commit](https://github.com/EdricChan03/edricchan03.github.io/commit/d2a597723f41afecb3dc6af0fe8cc85a3962b183))

##### Changes

* I've finally updated the metadata on this website, as well as updated the version of [Material Components for Web](https://material.io/components/web/) to the latest (as of this writing), v13.
* I've also bumped the version of Jekyll used to v4 ([see commit](https://github.com/EdricChan03/edricchan03.github.io/commit/cf4cabd4ca554176e36c14b5e8c34956f26f76fb))

##### Bug fixes

* Fixed a derp where the list of project tags weren't showing as expected ([commit](https://github.com/EdricChan03/edricchan03.github.io/commit/2d959d3dd535e21411be0235c22248e8a66a45f6))
* Simplifies the way that toolbar buttons are done in the template ([commit](https://github.com/EdricChan03/edricchan03.github.io/commit/98d18f47309a029f76b592a65cbe9b34585955ad))

---

### New projects 😜

* I've been working on a Svelte version of the hit-game [Antimatter Dimensions](https://ivark.github.io), but temporarily stopped working on it to focus on other projects.

---

## What I plan to do next month

### Projects

* Work on [StudyBuddy for Web](https://github.com/EdricChan03/StudyBuddy-web) and [StudyBuddy for Android](https://github.com/EdricChan03/StudyBuddy-android)
  * Work on improving the app architecture, as well as the overall user interface/experience
  * Work on improving the performance of the app
* Work on [RSS Reader Angular](https://github.com/EdricChan03/rss-reader-angular) and maybe a Svelte version as well
  * Add some features like podcast support, and maybe a "read later" feature
* Fix up any other bugs present on this site
  * Update the metadata on this site

### General

* Learn a new programming language/framework (Svelte/SvelteKit maybe?)
* Improve my project management skills
* Write more blog posts 😜

---

That's mostly all, folks! See ya next month!
