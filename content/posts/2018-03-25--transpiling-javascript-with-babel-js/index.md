---
title: "My recent front-end interview experiences"
date: "2018-03-09"
category: "webdevelopment"
tags:
   - javascript
   - babel
   - es6
published: true
---

This long overdue blog post is all about transpiling JavaScript. As I've been procrastinating for weeks and _still_ haven't finished the entire article, I've decided to post it in two parts. The first part focusing on a bit of JavaScript history, ECMA stages and exploring Babel with the Repl. The second showing you how to include babel in your project, with or without making use of Webpack.

Now that's out of the way, let's start talking about transpiling JavaScript!

Transpiling JavaScript into what? Well... JavaScript! By now most web developers will have encountered _Babel_ in one form or the other. Babel is a _transpiler_ that does some magic (the transpiling part) to compile bleeding edge JavaScript into something understandable for current/older browsers or node versions. Today it seems there is no JavaScript written without Babel. But why exactly do we need a transpiler? What do we transpile? Will transpilers be obsolete in the future? And not totally unimportant: How can we setup and configure the transpiling of our own code?

These are all questions I'm hoping to answer with this blogpost, but to make some sense of it all, we first need to go over some very confusing history and terminology.

You'll notice that I will use both transpiler as compiler to describe Babel. I use them interchangably as I don't think the distinction matters all that much. For a more detailed discussion on the matter, read the following [stackoverflow answer](https://stackoverflow.com/a/43969036)

## JavaScript and Ecmascript

When we talk about JavaScript we talk about ECMAscript, and the other way around. An explanation I heard is "ECMASCript is the language and JavaScript a dialect". I've also heard JavaScript being referred to as a scripting language implementing the ECMAScript specification. I'm sure it's debatable, but to be honest, it's really confusing and actually _not_ important.

What is interesting to know (for reasons which will become apparent soon, please don't abandon me yet) is that the releases of ECMAScript have been irregular to say the least. Version 3 was released in 1999 and version 4 was supposed to land in 2007 but didn't because of politics or whatever. ECMAScript 5, the first proper update since v3, wasn't released until 2009.

ES5 was a big deal though, and brought us the JavaScript a lot of us are familiar with nowadays. Most browsers implemented the new standard and JavaScript gained in popularity.

It still took six years for a new specification to land, but in 2015, ES6 (ECMAScript 2015) finally landed and it was a huge update. Besides bringing us many new features and improvements, it seems ES6 also kicked off a new era with a yearly release cycle. Instead of another seven years in hibernation, ES7 (ECMAScript 2016) was released in 2016 and is finalized by now, ES8 (ECMAScript 2017) was released in 2017 and is being worked on as we speak.

What we should take away from this story is:

1.  Since 3-4 years there is a lot happening in the world of JavaScript
1.  The versioning is really confusing.

> ES6 is short-hand for EcmaScript 6, which is a deprecated name for the EcmaScript 2015 language specification. ES2015 is the 6th version of EcmaScript, thus why it was previously referred to as ES6. For reasons best known to themselves, those responsible for defining the language standard renamed it to ES2015 with the final version of the v6 spec. - _[Difference between ES6 and Javascript on StackExchange](https://softwareengineering.stackexchange.com/questions/306846/different-between-es6-and-javascript/306847#306847)_

Jesus wept.

Just so we're clear, I’m going to talk about ES5 (ECMAScript 5), ES6 (ECMAScript 2015), ES7 (ECMAScript 2016), ES8(ECMAScript 2017) and whatever is next.

*   _If you want to know more about [the difference between JavaScript and ECMAscript](https://medium.freecodecamp.org/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5), read this excellent article by Michael Aranda_
*   _I found a great summary on [the history of ECMAScript / JavaScript on stackoverflow](https://stackoverflow.com/questions/912479/what-is-the-difference-between-javascript-and-ecmascript) which you should read._

## TC39 and stage-0 to 4

Now there is a yearly release cycle, it’s also interesting to know why and how new proposals and features are accepted in the language. This is done by [TC39](https://www.ecma-international.org/memento/TC39.htm), which stands for Technical Committee 39 (such poetry). They’re largely responsible for maintaining and updating ECMAScript and they also evaluate and consider new proposals to evolve the language.

Changes to the language are done in a process which involves several stages:

stage 0: Strawman
stage 1: Proposal
stage 2: Draft
stage 3: Candidate
stage 4: Finished
This is important to know as transpilers allow us to to use features in stage 0 to 3.

*   [TC39](https://www.ecma-international.org/memento/TC39.htm)
*   [TC39 on github.com](https://github.com/tc39)
*   [The TC39 process](https://tc39.github.io/process-document/)

## Transpiling JavaScript to Javascript

Now we’ve been through the history and stages and all, we can finally start talking about actual transpiling! When we talk about transpiling JavaScript, we’re actually talking about compiling a JS version to another JS version. When ES6 was introduced in 2015 we got a boatload of new features but no environments would yet run those features. Transpiling ES6 to ES5 means we can write modern ES6 javascript which gets compiled to ES5 to support older browsers

### Transpiling vs Polyfills

You might ask: “Wait a second, isn’t that what polyfills do?”. Well yeah, but not exactly. As a rule of thumb, transpilers are concerned with syntax. Transpiling ES6 to ES5 will turn `let` and `const` into `var` and your arrow function into a regular function equivalent. (I say equivalent because [arrow functions and regular functions aren’t totally equal](https://babeljs.io/faq#why-are-this-and-arguments-being-remapped-in-arrow-functions)).

Polyfills take care of new objects and methods which aren’t compatible with older browsers. Think about the `Promise` object, `Intersection Observer` or if you really need to support IE9: `document.querySelector`. These methods and objects all have polyfills to support older browsers and will not be handled by a transpiler.

Now it wouldn’t be JavaScript if there wasn’t an entire grey area. If you want to go into details I’d suggest reading this excellent article by David Gilbertson: [Polyfills: everything you ever wanted to know, or maybe a bit less](https://hackernoon.com/polyfills-everything-you-ever-wanted-to-know-or-maybe-a-bit-less-7c8de164e423)

Luckily for us, Polyfills and Transpiling goes together like lamb and tuna fish (I'm just going to keep using this until someone gets it), something the creators and contributors of Babel kept in mind when evolving the transpiler.

## Babel - Use next generation JavaScript, today.

Because really, when I talk about transpiling JavaScript to JavaScript, I'm talking about Babel. Babel is _the_ tool to compile your modern, feature-rich JavaScript into something older environments understand as well. There have been alternatives like Traceur, but Traceur seemed to be very short lived in favor of Babel

Babel began as a transpiler from ES6 to ES5. The differences between ES6 and ES5 were huge and especially at the time of release there were a lot of browsers which hadn't implemented much of the ES6 features yet. Let alone browsers which never will be updated again (IE).

But if you remember, ES6 was released in 2015 and by this point most browsers are evergreen and the support for ES6 features is pretty great. If you don’t have to support older browsers or if you use node, can update to the latest versions, you might not need to transpile your ES6 JavaScript.

Does this mean Babel will become obsolete in the future as every environment supports all the ES6 features? Probably not. There’s a pretty stable ES release cycle since ES6 and Babel allows you to transpile ES7, ES8 and features which are still in one of the proposal stages. This way we’re able to try the latest features without them having to land in the browser or node first.

### REPL

Babel is not bound to a specific build tool like Webpack. There are [plenty of different ways to use Babel](https://babeljs.io/docs/setup/) including in-browser, with a Command Line Interface(CLI) and with a range of frameworks and build tools. But the easiest way to try out Babel is visiting the [Babel repl](https://babeljs.io/repl)

If you navigate to https://babeljs.io/repl you can instantly start writing ES6 and see what your code is compiled into. In the panel on the left you’ll see the available presets.

#### Presets

Babel has a huge list of plugins that are used to transform specific ES6 features to ES5. For example, [here is the plugin for transforming arrow functions](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-arrow-functions). Installing all these plugins individually would be a bit of a pain, so Babel offers different presets which you can use to transform what you need.

ES2015 (ES6) - compiles your ES6 to ES5
ES2015 - Loose mode - loose mode produces a bit simpler and more readable ES5. Read more about it on the [2ality blog](http://2ality.com/2015/12/babel6-loose-mode.html)
ES2016 (ES7)
ES2017 (ES8)
Stage 0 - 3 - Features which aren’t yet formally accepted into the standard yet. Be careful with using these as they can be killed or heavily modified before reaching the final stage.
React - React? Yes, this is a bit of an odd duck, but React can be used with features in need of transpiling, one of which is JSX. JSX is not meant to be part of ECMAScript, but is a sort of extension on it.

#### Env Preset

The environment presets are great because they allow you to specify the environment you’re targeting. No more thinking about which ES version is which ECMAScript year, you just define the environment in which you want your code to work and the presets will take it from there.

Do note: When you want to use stage 0 - 3 or the React preset, you’ll have to activate those explicitly, regardless of other presets you might have activated.

#### Try it out

I urge you to try and transpile some of your ES6 code yourself as it’s very interesting to see how Babel handles new _syntactic sugar_ like the ES6 `class`.

Next week we'll dive into using Babel in your project, using it in Webpack and so forth. If you want to stay up-to-date you can always [follow me on twitter](https://twitter.com/ardennl)!
