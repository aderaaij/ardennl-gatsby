---
title: "Getting to the bottom of ES6 Classes"
date: "2018-01-02"
category: "webdevelopment"
tags:
    - es6
    - javascript
published: false
---

Since their introduction, ES6 classes quickly gained traction in the JavaScript community. React began using ES6 classes in favor of their own `React.createClass` and there are already new proposals for ES7/ES8. So let's have a look at what's the deal with ES6 classes.

## Prototypal inheritance

Let's go a bit down the rabbit-hole and begin with a refresher on prototypal inheritance and constructors in JavaScript. JS has two kind of object constructors:

- Native constructors
- 

```javascript
function Hero() {}
const ironMan = new Hero();
```

```javascript
function Hero(name, team) {
    this.name = name;
    this.team = team;
}
const ironMan = new Hero('Iron Man', 'Avengers');
```

We can create a new instance of the `Hero` object by calling the constructor function with `new` infront of it, and assigning it to a variable. The constructor function hasn't added anything, but we can already test if our new object is an instance of `Hero` with the `instanceof` operator or calling the `constructor`:

```javascript
IronMan instanceof Hero // Returns true
IronMan.constructor == Hero // Also returns true
```



## Resources

- [Is JavasScript Object Orientated](https://stackoverflow.com/a/108773)
- [Inheritance and the prototype chain - MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Classes - MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [You Don't Know JS: this & Object Prototypes Appendix A: ES6 class by Kyle Simpson](https://rileygelwicks.gitbooks.io/you-dont-know-js/content/this%20&%20object%20prototypes/apA.html)
- [Is “Class” In ES6 The New “Bad” Part? by rajaraodv](https://medium.com/@rajaraodv/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65)