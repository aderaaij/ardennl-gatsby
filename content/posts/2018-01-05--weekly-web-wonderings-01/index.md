---
title: "A weekly Web roundup"
date: "2018-01-02"
category: "webdevelopment"
tags:
    - es6
    - javascript
    - weekly
published: false
---

## News

### Meltdown & Spectre

Don't panic! [Meltdown and Spectre](https://meltdownattack.com/) aren't new JavaScript frameworks you need to learn. They are vulnerabilities that seem to affect almost any CPU built since '95. Okay, you may panic now.

The vulnerabilities that reserchers found could potentially be used to intercept passwords, logins and other credentials... without a trace! There's not much you can do at the moment but making sure your software is updated and keep an eye on the developments. In any case, these vulnerabilities will have implications for a long time to come. On a positive note, the logo's of Meltdown and Spectre are pretty cool.

## Articles

### Productivity

#### Tackling routines with Dave Geddes

On Twitter, Coding guru [Kent C. Dodds](https://github.com/kentcdodds shared a nice article on routines and how to keep to them going. It's written by [Dave Geddes](https://twitter.com/geddski) who you might know from his [Flexbox Zombies](https://flexboxzombies.com/p/flexbox-zombies) and [Grid Critters](https://gridcritters.com/p/gridcritters) tutorial games. In any case, Dave has a few points that really resonate with me, like how hard it is to go in bed in time when the internet is still on your mind:
> My new routine starts at 10:00PM every night (a successful morning routine starts the night before). When 10PM rolls around I feel very little desire to shut my brain/computer down and start getting ready for bed.
Nowadays I try and read a (fiction!) book before I get to bed. This allows me to concentrate on something unrelated to my work and as a side-effect, makes me sleepy.

Do you have any routines to make sure you start the next day fresh?

#### Productivity Links

- If you're looking for more tips, the *Smashing Magazine* community shared all their best advice on how to be productive in [this wonderful article](https://www.smashingmagazine.com/2017/12/community-productivity-tips-tricks/) written by [Rachel Andrew](https://www.smashingmagazine.com/author/rachel-andrew/).

### React

#### Upgrading to React 16 with DriveTribe

If you're really into cars you might know Drivetribe, a community driven site about... cars. I'm more interested in their tech stack as they seem to be pretty serious about their development. Matt Perry, drive-tribe engineer, creator of [Popmotion](https://popmotion.io) and all-round smart guy has written a great article on upgrading the DriveTribe stack to React 16 which turned out to be pretty easy, especially if you know that React Router v3 is actually compatible. Read the article on the [DriveTribe engineering blog](https://medium.com/drivetribe-engineering/an-unravelling-tale-of-performance-bonus-round-react-16-f98455fdabe6).

#### React Links

- NPM released their [2017 stats on JavaScript frameworks](https://www.npmjs.com/npm/state-of-javascript-frameworks-2017-part-1). The numbers might not surprise you
- DriveTribe also released a [React intersection observer](https://github.com/drivetribe/react-intersection) plugin. It looks really good.
- A year is like decades in webdevelopment. Still, I feel like this React [best practices guide to writing React components](our-best-practices-for-writing-react-component) from the engineers musefind has some great advice that holds up.
- On popular request there now is an [article about Code Splitting in the react guides](https://reactjs.org/docs/code-splitting.html).

### Accessibility

#### Accesibility for Everyone by Laura Kalbag

I finally got around to finishing Laura's book on accessibility. It's a great resource and even though it's a bit dry (but which tech book isn't) it's very emphatically written and is almost a full guide on how to make your apps and webpages inclusive. To me, this book seems like one of these must-haves for every development agency. [Buy Accesibility for everyone on a book apart](https://abookapart.com/products/accessibility-for-everyone).

[I also made some notes on the book](https://github.com/aderaaij/book-notes/blob/master/accessibility-for-everyone--laura-kalbag/index.md)

#### Accessibility links

- Are tables accessible by default? Appearantly not! [Learn about the `caption` element with Stefan Judis](https://www.stefanjudis.com/today-i-learned/the-for-accessibility-required-caption-element-in-html-tables/)
- [MDN web docs has some great info on accessibility as well](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
- [Emily Mears](https://twitter.com/ermmears) wrote a great [article on React and accessibility](https://medium.com/@emilymears/getting-started-with-web-accessibility-in-react-9e591fdb0d52)

### General

- iOS throttles requestAnimationFrame to 30fps in cross-origin iframes and low power mode. [On popmotion blog](https://popmotion.io/blog/20180401-when-ios-throttles-requestanimationframe/)
- On that note, if you haven' tried [Popmotion](https://popmotion.io) yet, you should! It's hands down the most impressive animation library I've worked with since Greensock.
- [Scrollarama](https://github.com/russellgoldenberg/scrollama) is a scroll based storytelling library based on the intersection observer. As the Intersection Observer API is pretty easy I'm not sure if you need a library for htis, but it looks good. (Also, wasn't there something performance problem with Intersection Observer and timing based animations?)
- [Zell Liew](https://twitter.com/zellwk) has released his [JavaScript course 'learnjavascript.today'](https://learnjavascript.today/) which will attempt to completely demistify JavaScript for front-end developers
- The WordPress community always seems to be up in arms about something or the other. At the moment the subject is Gutenburg, the upcoming(?) editor for the WordPress CMS. Webdev studios wrote a great piece on [how Gutenberg might affect your current content](https://webdevstudios.com/2018/01/02/existing-content-affected-wordpress-gutenberg/).
- Smashing Magazine released a big [front-end performance checklist](https://www.smashingmagazine.com/2018/01/front-end-performance-checklist-2018-pdf-pages/) and it's awesome.
- A new JavaScript framework? Another one won't hurt. [Svelte](https://svelte.technology/guide) is the new kid on the block and it looks really easy and convinient. I haven't tried it yet.
- Almost forgot, but [Sarah Drasner](https://sdras.github.io/object-explorer/) made this amazing JS [Object explorer](https://sdras.github.io/object-explorer/) to help you figure out which methods to apply. It's amazing.

## What have I been up to?

### Reading 'Functional-Light JavaScript' by Kyle Simpsons

[Kyle Simpsons](https://twitter.com/getify) ['You Don't Know JavaScript'](https://github.com/getify/You-Dont-Know-JS) series have been a great help in my path to a deeper understanding of the language. Because I haven't worked with any other programming languages, I didn't know JavaScript is a bit of an odd duck. There's no _one_ way to write good JavaScript and there are a multitude of concepts and paradigms you can apply to the language. 'Functional-Light JavaScript' by Kyle Simpsons seems to be the introduction to Functional Programming I needed, and so far the book has been greatly interesting. The book is [published on Leanpub](https://leanpub.com/fljs/) but also [available for free on Github](https://github.com/getify/Functional-Light-JS). Don't forget to give Kyle some support!

### ES6 Classes

Speaking about paradigms; I wanted to write a simple article on ES6 classes as it seems like a lot of people just use them because they came with the framework. Little did I know I'd tumble down the rabbit hole and am now also writing about paradigms, general prototype inheritance and trying to find some middle ground between pro- and anti class camps within JavaScript.

### Gatsby Starter

It's no secret I'm a fan of Gatsby and the concept of static site generators based on React. More for myself than anyone else I made the [gatsby skeleton starter markdown](https://github.com/aderaaij/gatsby-starter-skeleton-markdown) to always have a SEO friendly PWA as starting point of my webapp.

## Shower thoughs

### Read more fiction

Why is it that everytime a developer advices a book it's "12 ways to become a ninja warrior of effectiveness?". Fiction books are so much more fun and relaxing. They're like your favorite movies and television shows, only without the screen and anxiety. A book series I've been greatly enjoying is the 'Themis files' by Sylvain Neuvel. Something I love about modern authors is that I can [pester them on twitter](https://twitter.com/ardennl/status/855184395753402368) and they answer!

### Everything is broken

If the web is 'broken', apps are even more so!

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Wanna feel old?<br><br>The HD remake of Monkey Island 2 on the iPad doesn‘t work anymore, it came out about 8 years ago and is no longer compatible. 🏴☠️</p>&mdash; Thomas &quot;Kick Nazis out, @jack&quot; Fuchs (@thomasfuchs) <a href="https://twitter.com/thomasfuchs/status/948003372795342849?ref_src=twsrc%5Etfw">January 2, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### The React team is really cool

Although I actively dislike Facebook as a concept, I love React and their core team. I'm amazed by their involvment and even though it's such a huge library with countless of plugins and adaptions, you will probably still come across a React Core member replying to a github issue in a repository with 5 stars. 👏

## Fin

And on that note I'll end this newsletter! I hope you enjoyed my webweek. If this is appreciated I will try and publish something like this weekly / bi-weekly. Also, any tips on the format are most welcome.

 Don't hesitate to [follow me on twitter](https://twitter.com/ardennl).

This article was originally published on [arden.nl](https://www.arden.nl)