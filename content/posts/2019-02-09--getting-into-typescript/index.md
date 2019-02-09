---
title: 'Diving into TypeScript'
date: '2019-09-02'
category: 'webdevelopment'
cover: ./stella-ribeiro-631365-unsplash.jpg
tags:
  - javascript
  - typescript
  - gatsby
published: false
---

## Some random obstacles

### Object bracket notation

In case you need to use bracket notation to get the value of an object (like `object[key]`), TypeScript will present you with a `Element has no index signature` error, even if you declared an interface for your object. To fix your code, you need to add this index signature to your Object.

```typescript

interface AnimationI {
  opacity: number;
  scale: number;
}
interface TransitionI {
  entering: AnimationI;
  leaving: AnimationI;
}

 const transitionStyles: TransitionI = {
   entering: { opacity: 0; scale: 0.5; };
   entered: { opacity: 1: scale: 1; };
 }

 // Gives "Element has no index signature" error
 transitionStyles['entered];

```

To solve this, we need to add an `index signature` to our `TransitionI` interface:

```typescript
interface TransitionI {
  entering: AnimationI;
  leaving: AnimationI;
  [key: string]: AnimationI;
}
```

This way the error is resolved and we keep all the typechecking goodness!
