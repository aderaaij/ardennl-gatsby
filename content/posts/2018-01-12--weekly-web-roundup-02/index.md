---
title: "Weekly Web Roundup - 02"
date: "2018-01-12"
category: "webdevelopment"
tags:
    - es6
    - javascript
    - weekly
published: true
---

Another week, another roundup! I’m starting to get really excited for all the things that 2018 will bring us. This week I've got some news, articles on all the main subjects and spiced things up with a bit of inspiration as well. Let’s get to it.

- [Week 1](https://dev.to/ardennl/weekly-web-roundup---01-15d6)

## News

### [npm operational incident, 6 Jan 2018](http://blog.npmjs.org/post/169432444640/npm-operational-incident-6-jan-2018)

Technically that was last week but I found it worth a mention. Around a hundred packages falsely got flagged as malicious and as a result were unavailable ([github issue](https://github.com/npm/registry/issues/255)). The problem was resolved pretty quickly but it shows how big our dependency on a functioning npm is. It kind of feels like we’re throwing all our `eggs.js` in one basket. More about this in the Security section.

### [Chrome is turning into the new Internet Explorer 6 on theverge.com](https://www.theverge.com/2018/1/4/16805216/google-chrome-only-sites-internet-explorer-6-web-standards)

I wouldn’t put it in those words, but since I’ve been using Firefox as my main browser I definitely notice that there’s a certain amount of ‘Chrome’ only sites, including some Google services, and that sucks. Of course, Chrome is still a great browser and Chris Coyer reminds us of the true horrors of IE6 in his ‘[careful now[((https://css-tricks.com/careful-now/)
)’ story on CSS-Tricks.com.
That being said, I must admit that my Firefox seems to perform pretty horrible with animations. Maybe I should give Vivaldi a try?

### [A letter about Google AMP](http://ampletter.org/)

Talking about Google controversy, how about that AMP huh? There's a letter you can sign that voices an opinion against AMP. I'm not sure if it'll do much good but at least it's a sign.

## Security

### [I’m harvesting credit card numbers and passwords from your site. Here’s how. by David Gilbertson on hackernoon.com](https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5)

Do you know what your npm dependencies depend on? Do you know what your npm dependencies of dependencies depend on? David Gilbertson sketches a horror scenario in which he infects several NPM packages with malware and spreads it around like wildfire.

### [Should we DEMAND the latest browser version? by Alex Ewerlöf](https://medium.com/@alexewerlof/should-we-demand-the-latest-browser-version-d5c72f8c9ffb)

YES! Or you know, it would be pretty damn convenient to only build for the latest browser versions because *security*. Any arguments against this?

## CSS / SVG / HTML

### Articles

#### [What’s New in HTML 5.2? on bitsofco.de](https://bitsofco.de/whats-new-in-html-5-2/)

HTML 5.2 became a recommendation and brings us new goodies. `style` tags are finally allowed inside the body, a native `dialog` element and more. Read it all in this excellent article.

### Books

#### [Using SVG with CSS3 and HTML5: Vector Graphics for Web Design by Amelia Bellamy-Royds](https://www.amazon.com/_/dp/1491921978/ref=as_li_ss_tl?&linkCode=sl1&tag=csstricks-20&linkId=ffaa56e58a0e4fd9acd51c3b4b0b4273)

If you want to get in-depth with SVG, CSS3 and HTML5 I can't recommend you anything better than this book by Amelia Bellamy-Royds. I haven't even read it yet but I feel confident in giving my full recommendation.

### Tutorials

#### [Learn CSS Grid for free](https://scrimba.com/g/gR8PTE)

A free CSS grid tutorial. Seriously, why wouldn't you? By [Per Harald Borgen](https://twitter.com/perborgen)

## Ethics

- [How to Fix Facebook—Before It Fixes Us](https://washingtonmonthly.com/magazine/january-february-march-2018/how-to-fix-facebook-before-it-fixes-us/)

## Blockchain & Cryptocurrency

### [Telegram plans multi-billion dollar ICO for chat cryptocurrency on techcrunch.com](https://techcrunch.com/2018/01/08/telegram-open-network/)

"THIS IS HUGE!" according to some. To be honest, I barely know what it means. Remind me of this post when you got rich of *Telegram-dollaz*.

## Inspiration

### [The innovative Data Visualization & data art of Nadieh Bremer](https://www.visualcinnamon.com/)

Nadieh Bremer is a freelance data visualization artist who makes amazing work, like this gorgeous [The Guardian article](https://www.theguardian.com/us-news/ng-interactive/2017/dec/20/bussed-out-america-moves-homeless-people-country-study). I love this type of work as it brings so much more information and value to an article. I can't wait to see what Nadieh will be producing in 2018.

### [Analytica Projects](http://analyticaprojects.com/) by [Veintidosgrados](http://www.veintidosgrados.com/)

It's quite a trade-off, a long loading time for not a lot of information. Yet the story telling element is nice and the scrolling is oh so smooth (and only slightly induces motion sickness)

### [Abel Odor by buildinamsterdam](https://www.abelodor.com/)

Argh, sound! But other than that this webshop is pretty damn cool. The site is WooCommerce based, which makes it even more impressive as WooCommerce is a mean beast to tame. The people at [buildinamsterdam](http://www.buildinamsterdam.com/) know how to give a webhop a dynamic and fresh feel like no other though.

### [Case Study: lynnandtonic.com 2017 refresh](https://medium.com/andyet/case-study-lynnandtonic-com-2017-refresh-134620dbd12a)

If you haven't seen [Lynn Fisher's beautiful portfolio page with a gazillion breakpoints](https://lynnandtonic.com/) yet, make sure to have a look right now. In this medium post she explains what her motivation behind this intricate design was.

## Accessibility

- [Little steps for accessibility at N26 - on hugogiraudel.com](https://hugogiraudel.com/2018/01/08/little-steps-for-accessibility-at-n26/)
- [Improving the Accessibility of 24 ways - by  Paul Robert Lloyd on css-tricks.com](https://css-tricks.com/improving-accessibility-24-ways/)

## Javascript

- [The Top JavaScript Trends to Watch in 2018 on hackernoon.com](https://hackernoon.com/the-top-javascript-trends-to-watch-in-2018-a8437dd94425)
- [Private Variables in JavaScript on ttmm.io](https://ttmm.io/tech/private-variables-in-javascript/)
- [Nearing the 7.0 Release on babeljs.io](https://babeljs.io/blog/2017/12/27/nearing-the-7.0-release)
- [Why mutation can be scary by Zell Liew on alistapart.com](http://alistapart.com/article/why-mutation-can-be-scary)

### JavaScript Tutorials

- [Using SVG clip-path to change a logo's colour on scroll on eduardoboucas.com](https://eduardoboucas.com/blog/2017/09/25/svg-clip-path-logo-colour.html)
- [Six Tiny But Awesome ES7 + ES8 Features on davidwalsh.com](https://davidwalsh.name/es7-es8-features)

### Testing

#### [But really, what is a JavaScript test? - By Kent C. Dodds](https://blog.kentcdodds.com/but-really-what-is-a-javascript-test-46fe5f3fad77)

Testing isn't that scary as you'd might think. Kent created this awesome 101 which will get you started in the world of JS testing!

### Tools

- [Cypress - Fast, easy and reliable testing for anything that runs in a browser](https://github.com/cypress-io/cypress)
- [Uppy - Sleek, modular file uploader](https://uppy.io/)

### React

#### [React Router course by Tyler McGinnis](https://tylermcginnis.com/courses/react-router/)

[Tyler McGinnis](https://twitter.com/tylermcginnis) released a React Router v4 course and because of that he temporarily offers 25% discount on his courses.

- [Tips to learn React and Redux - 2018 update on robinwieruch.de](https://www.robinwieruch.de/tips-to-learn-react-redux/)

### GraphQL

#### [A Practical GraphQL Getting Started Guide with Node.js - by John Kariuki on scotch.io](https://scotch.io/tutorials/a-practical-graphql-getting-started-guide-with-nodejs)

My introduction to GraphQL was with GatsbyJS and I’ve been a fan right from the start. You’re going to hear a lot about GraphQL this year, and this article by [John Kariuki](https://twitter.com/_kar_is) is a very nice and practical introduction to the goodness that GraphQL brings.

#### [GraphQL, here is what you need to know - Syntax.fm podcast](https://syntax.fm/show/027/graphql-here-is-what-you-need-to-know)

[Syntax.fm](https://syntax.fom) is the podcast (that brings you tasty web development treats… I’m not sure why but that quote gives me an icky feeling) from [Wes Bos](https://twitter.com/wesbos) and [Scott Tolinski](https://twitter.com/stolinski), and apart from the tagline it’s awesome. The last episode is about GraphQL and it’s very informative and probably will get you to try something out right away.

## Optimization

- [Esential image optimization - an eBook by Addy Osmani(free)](https://images.guide/)

## Hosting

- [10 Netlify features to surprise and delight by Phil Hawksworth on medium.com](https://medium.com/netlify/10-netlify-features-to-surprise-and-delight-225e846b7b21)

## Productivity

- [How To scope work on danmall.me](http://danmall.me/articles/how-to-scope-work/)
- [After Hours “Off-peak” lifestyle evangelists insist on the value of being untimely on reallifemag.com](http://reallifemag.com/after-hours/)

### Podcasts

### [Pursuit Podcast](http://hyperurl.co/zukdmh)

How come I didn’t know about Pursuit Podcasts before? They’re so good! They’ve got some great guests, the last two being Rachel Andrew and Sara Soueidan. Rachel talks about time management, while Sara has a great talk about contracting work.

## Random

### [What happens when you type google.com into your browser's address box and press enter?](https://github.com/alex/what-happens-when)

This is a way too in-depth explanation, and it’s pretty good.

## Shower thoughts

### Be nice

So often I come across great resources and work I appreciate, but I kinda forget to show that appreciation to the makers. Lately I’ve been trying to actively search the creators of content just to tell them I really enjoyed what they made.

### Are coding tests a good way to weed out candidates?

I’m only asking because I’m about to do my first one. Besides pub-quizzes I haven’t done much tests lately.

## What have I been up to?

[Quick! Tell me everything you know about Codility tests](https://dev.to/ardennl/quick-tell-me-everything-you-know-about-codility-tests-5dkb).
Also, I made a start on [Kent C. Dodds](https://twitter.com/kentcdodds) [Advanced React Component patterns course on egghead.io](https://egghead.io/courses/advanced-react-component-patterns) and it’s been pretty great so far. I will keep you tuned.

So what have you been up to?

Enjoy the weekend, don't work too much!