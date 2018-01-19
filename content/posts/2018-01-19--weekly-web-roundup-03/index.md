---
title: "Weekly Web Roundup - 03"
date: "2018-01-19"
category: "webdevelopment"
tags:
    - es6
    - javascript
    - weekly
published: true
---

Is it me or did this week flew by in no-time? I didn't get to much things done this week but more on that later. Last weeks roundup was a bit of a mess, so I'm seeing if I can structure it a bit different. Any tips on a better format are most welcome!

- [Week 2](https://dev.to/ardennl/weekly-web-roundup---02-1f39)
- [Week 1](https://dev.to/ardennl/weekly-web-roundup---01-15d6)

## HTML and CSS

1. [Wes Bos](https://twitter.com/wesbos) just released a new video course and it's [all about CSS grid](https://cssgrid.io/). Thanks to sponsoring from Mozilla the course is available _for free_ and I'm really excited about this deal, as it's a great way to 'move the web forward'. Wes Bos is a great teacher and there's 25 videos and about four hours of material in there! By the end of it, you also can be a grid sensei!
1. CSS grid and CSS columns seem to go together like *lamb and tunafish* (bonus points if you get the reference). In [this medium article](https://medium.com/@patrickbrosset/css-grid-css-multi-columns-7664f59bb60c), [Patrick Brosset](https://twitter.com/patrickbrosset) explains the relationship between the two layout features and how they combine.
1. [Ohans Emmanuel](https://twitter.com/OhansEmmanuel) wrote an interesting [article about CSS naming conventions](https://medium.freecodecamp.org/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849) and how they can safe you time debugging. I'm especially a fan of the BEM - stick-man analogy.
1. Meet the new `dialog` element! Keith J. Grant wrote an introduction to the native HTML 5.2 dialog element and some easy to miss features. He also created a great [`dialog` demo on codepen](https://codepen.io/keithjgrant/pen/eyMMVL) which you should check out!
1. [Harry Roberts](https://twitter.com/csswizardry) came up with a really clever way to [track dead css with a tracking pixel](https://csswizardry.com/2018/01/finding-dead-css/).
1. Although this article is pretty old, it's not less relevant: An excellent explanation on using [feature queries and css grid](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/) by [Jen Simmons](https://twitter.com/jensimmons).
1. Also, the same [Jen Simmons](https://twitter.com/jensimmons) started a YouTube channel called [*Layout Land*](https://www.youtube.com/c/layoutland) where she publishes great talks / tutorials on modern CSS layouts. It's a super chilled out channel and as long as she'll be publishing, I'll be watching.

## JavaScript

1. [Bad month for the main thread](https://daverupert.com/2018/01/bad-month-for-the-main-thread/). The title of [David Rupert](https://daverupert.com) his article on the slowdown of CPU's and the impact on running JavaScript.
> It isn’t far fetched that a device would reduce power consumption when on battery, it makes the device last longer, makes users happier. This explains iOS’ less-than-stellar performance in Low Power mode. I know this mode well because my last phone probably spent 80% if its life in Low Power mode.
1. [Vladimir Metnew](https://github.com/Metnew) wrote a pretty opinionated [article on hackernoon.com](https://hackernoon.com/next-js-razzle-cra-why-you-should-use-them-for-a-next-project-a78d320de97f) about preferring library based frameworks and toolkits above so called starter kits. I like the point he makes on long-term support and cost of customizing with starters, but at the other hand, aren't starters often a kick-off point for tool-kits? Anyway, it's nothing to get riled up about, and there are some solid points in there.
1. There have been many topics on React Router v4, and most of them have been about people not wanting to upgrade. [Tyler McGinnis](https://twitter.com/tylermcginnis) published an [article on dev.to explaining and introducing React Router v4](https://dev.to/tylermcginnis/react-router-v4-philosophy-and-introduction-4ial). If you're planning on creating a new React app with routes or upgrading your existing app to v4, this is a must-read.
1. Nicolás Bevacqua, better known as [PonyFoo](https://ponyfoo.com/) published a [talk about modular design thinking](https://ponyfoo.com/articles/modular-design-thinking) in a very convenient and readable format. It's full of great advice and warns against code that is 'too clever' and overengineering. As I'm not a regular conference attendee, I hope more people will publish their talks and transcripts this way.
1. Reddit user Kevin Flynn did a great job in [explaining the how and why of Webpack](https://www.reddit.com/r/javascript/comments/7qdksl/having_a_hard_time_understanding_webpack/dsoq9p3/) to someone who 'just wants to drop some JavaScript in the page'. I totally get the sentiment but Kevin's answer reminds me of why Webpack is something pretty damn amazing.
1. The [Slack engineering team](https://slack.engineering/) released a great article on [how to stay speedy with Webpack](https://slack.engineering/keep-webpack-fast-a-field-guide-for-better-build-performance-f56a5995e8f1). It's a solid guide to get better build performance and clearly explains where the bottlenecks are.
1. An article on [Front-end in 2018](https://blog.logrocket.com/what-im-looking-for-from-frontend-in-2018-2f1de300b548) by [Kealan Cooler](https://blog.logrocket.com/@eranimo). It's a nice roundup of what we can expect this year, mainly in the world of JavaScript.
1. The latest [syntax.fm podcast about `async/await`](https://syntax.fm/) is a real treat!
1. [How the rest operator and default values affect the function length property](https://www.stefanjudis.com/today-i-learned/how-the-rest-operator-and-default-values-affect-the-function-length-property/). To be fair, I didn't even knew functions had a length property, so I learned two things today. Informative article by [Stefan Judis](https://twitter.com/stefanjudis), who's articles seem to become a regular appearance in this roundup.
1. The amazing Zell Liew published a beginners guide to [understanding the REST API on Smashing Magazine](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

## Libraries and tools

1. [JARVIS](https://github.com/zouhir/jarvis) is a 'very intelligent browser based Webpack dashboard' created by [Zouhir](https://twitter.com/_zouhir). The dashboard gives you a whole bunch of information about your Webpack development or production build in a great overview. I haven't tried it out yet but as it has pretty colors I'm inclined to share it with you.
1. Speaking of the `dialog` element, [Hugo Giraudel](https://twitter.com/HugoGiraudel) has been maintaing [a11y-dialog](https://github.com/edenspiekermann/a11y-dialog) which is a very lightweight and flexible modal dialog. It now supports the native `dialog` element.
1. Another cool library by [Zouhir](https://twitter.com/_zouhir): The [`lqip-loader`](https://github.com/zouhir/lqip-loader) for Webpack. LQIP standing for 'Low quality image placeholder'. It generates both a `base64` of your low quality image as a dominant color palette of your jpeg.
1. A great tool to [benchmark your CSS-in-JS libraries](http://necolas.github.io/react-native-web/benchmarks/) by [Nicolas](https://twitter.com/necolas)
1. Most of us know [Sindre Sorhus](https://twitter.com/sindresorhus) as an overactive JS developer and creator of 50% of the NPM packages currently in your dependencies, but recently Sindre has picked up some other stuff as well. He made this great [Refined Twitter](https://github.com/sindresorhus/refined-twitter) Chrome extension (also usable with Firefox) and it really makes Twitter so much better! Also, Sindre has opened a [Patreon page](https://www.patreon.com/sindresorhus) where you can support him so he can continue to contribute and maintain open source packages!

## PSA

1. A small PSA from Nicolas J. Engler: {% twitter 952212062167617536 %}
1. [Henry Zhu](https://twitter.com/left_pad), steward of [BabelJS](https://babeljs.io/) is looking for some help with the babel roadmap. If you think you can assist, don't hesitate to check in with him [on Github](https://github.com/babel/babel/pull/7192). {% twitter 952342001932005376 %}
1. Create React App 2.0 is coming but there's yet loads to be discussed and implemented. If you think you can help out, check out the ['Roadmap for react-scripts@2.0' Github issue](https://github.com/facebookincubator/create-react-app/issues/3815). {% twitter 953308145371279360 %}
1. I sorta share this sentiment. {% twitter 953990123141632000 %}
1. Pagespeed is a must! {% twitter 953674182717456384 %}
1. FYI, [Google Chrome is going to change some autoplay policies](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes).
1. This is pretty sweet. I used to tag on an array method at the end of a `.from()` but this is way nicer. {% twitter 954254600193769473 %}

## Inspiration

1. A sweet SVG morphing triple toggle button created by [Gabi](https://codepen.io/enxaneta/) on Codepen. {% codepen https://codepen.io/enxaneta/pen/zpamZr %}
1. A CSS only recursive navigation. Pretty sweet. By [Sean codes](https://twitter.com/sean__codes). {% codepen https://codepen.io/sean_codes/pen/WdzgdY %}
1. I've been following [Punchesbears](https://twitter.com/punchesbears) for a while now because he's making a game about raccoons and I desperately need it in my life. {% twitter 952661259383554048 %}
1. Woah, super smooth WebGL animations in [Kenji Saito's](https://twitter.com/kenji_special) sparkling new Portfolio! website. For the occasion he decided to create his own [micro WebGl libary called tubuGL](https://github.com/kenjiSpecial/tubugl). {% twitter 952793254407393280 %}
1. Is there Uber? {% twitter 952595999549263872 %}

## What have I been up to

- ☀️ Oh man the sun is out here in Lisbon, Portugal and it's amazing. I kinda feel like summer is already creeping around the corner. That's probably the Dutch part of me speaking.
- I've been making this huge blog post on Promises and `async / await`as I was redoing Wes Bos' ES6 For everyone and found it particular useful. I'll publish it one of these days!
- I finished [Dan Abramov](https://twitter.com/dan_abramov)'s [Redux course on Egghead.io](https://egghead.io/courses/getting-started-with-redux). It's soooo dense with information! Even though I've worked with Redux before, I learned so much about the whole principle and what is actually happening.
- I botched a coding test. It was part of my first interview process in years and I wasn't prepared for coding tests and all that. I kinda enjoyed the process though (even though I don't think that online coding tests are a good assessment of skills). I'm quite content freelancing, but I'm also open for great chances and being part of a forward striving team. If you've got any leads for awesome front-end work in Lisbon or remote, let me know!
- The last two days were mostly spent with technicians fixing stuff around the house. These things always take more of your time than you'd expect (definitely here in Portugal) so the days were kind of wasted. The boiler is working again though, so that's nice!

Enjoy the weekend!

Arden