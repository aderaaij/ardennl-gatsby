---
title: "About Promises and async / await"
date: "2018-01-20"
category: "webdevelopment"
tags:
    - es6
    - javascript
published: true
---

Recently I revisited [Wes Bos](https://twitter.com/wesbos) his [ES6 for everyone](https://es6.io/) course and made some notes on the `Promise` and `async / await` modules. These notes got a little out of hand and now they've turned into this huge blogpost. This is in no way meant to be a transcript of *ES6 for everyone* and I consulted many resources for this article, which you can find at the bottom of this post.

If I got something wrong or missed something important, feel free to correct! You can find this post in my [front-end notes github repo](https://github.com/aderaaij/front-end-notes-links-resources-articles).

## Promises

ECMAScript 2015 (ES6) brought us the `Promise`, a native object which act as a proxy (or temporary value) for a value that isn't known yet. Promises allow you to create handlers that deal with the eventual success or failure of an asynchronous action. In this post I'll tell you about all the ways to use promises, how to roll your own `Promise` functions, how to combine and chain promises and how to make the `Promise` api even better with `async / await`. But first we're going to back to the absolute basics: Synchronous and Asynchronous code.

## Synchronous / Asynchronous

I'm absolutely sure that most of you can skip this part, but if you do like a small reminder of what kind of asynchronous behaviour we deal with in JavaScript, keep on reading.

When you create functions or objects that immediately return a value, JavaScript seems to be synchronous. It looks like each line is processed sequentially and returns values before the next process starts running.

```javascript
console.log('this will fire first');
console.log('this will fire second');
console.log('this will fire last');
```

The above code will return exactly what you'd expect and logs all these lines of text to the console in order.

However, when one of these processes takes longer to return a value than the others we can see that the behaviour is in fact, asynchronous. In the following example we'll add a `setTimeout` around the second `console.log` to clearly see what happens.

```javascript
console.log('this will fire first');
setTimeout(() => {
    console.log('this will fire second');
}, 500);
console.log('this will fire last');
```

Now the logging in the console is out of order because the next line will not wait for the previous to finish. To recap:

- 'This will fire first' is logged to the console immediately
- The `setTimeout` function is started with 500ms on the timer and will not return a value for that amount of time.
- 'this will fire last' is logged to the console because it doesn't wait for the result of the `setTimeout` function.
- After the 500ms, 'this will fire second' is logged to the console.

In our example we obviously add the delay ourselves and as long as we know what the timeout value is, we can deal with the delay. But in many cases we don't know when something is going to return a value, like when we're fetching data or deal with a complicated process that takes long before returning a value.

We used to deal with this by using callbacks. A function would take in a callback function which would be called whenever the time consuming process returned something.

```javascript
function wait(ms, cb) {
    setTimeout(function() {
        console.log(`done after ${ms}ms`);
        cb();
    }, ms);
};

wait(1000, function() {
    console.log('here\'s our callback function');
});
```

This doesn't look to bad. But what if we have another function with callback that needs to be called within our callback, and another one within that function? It's going to get complicated real quickly and it's what we commonly refer to as [callback hell](http://callbackhell.com/).

```javascript
wait(300, function() {
    wait(600, function() {
        wait(500, function() {
            wait(400, function() {
                console.log('here\'s our final callback function');
            });
        });
    });
});
```

All the indenting makes makes the code very hard to read. There were ways around this, but that's not important anymore, because we've got the `Promise`!

## `Promise` - Introduction

The `Promise` is a native object which acts as a temporary value for a value that isn't known yet. Promises allow you to create handlers that deal with the eventual success or failure of an asynchronous action

### Native promises

#### Fetch

Before we'll start rolling our own promises, let's have a look on how to work with a `promise` that is already available in your browser, natively! Since a couple of years `fetch` has been my go-to api to request data. It's very clean, easy to remember and to handle. If you didn't use `ajax` requests with jQuery, you might remember `XMLHttpRequest`, which wasn't a pretty way to get data. Well, no more copy-pasting because you'll have `fetch` memorized in no-time. I `promise`.

```javascript
console.log(fetch('https://api.github.com/users/aderaaij'));
```

The code above is still asynchronous. We're not capturing the result of the promise, we're just logging the object itself. The result should look something like `Promise {<pending>}`. This shows you that the `user` variable is indeed a `promise` and that the status on the moment of calling `console.log(user)` was `pending`. That's cool and all, but we want to see some data!

To check on the status of a promise, we can tag on a `.then` method.

```javascript
fetch('https://api.github.com/users/aderaaij')
    .then(data => console.log(data));
```

In this little piece of code we're fetching user data from github and we directly log it when it comes back successful! That was insanely easy, wasn't it? Now the data we've got is still 'raw'. `fetch` can be used to retrieve all kinds of data so it doesn't just assume your data is JSON. Luckily we can convert it to JSON data with the `json()` method, which returns a promise as well.

Whenever the `.then` method returns a value, whether a `Promise` or not, you can tag another `.then` method right onto it. When you return a value, it's returned as a promise that immediately resolves: `Promise.resolve(val)`. When you return a `Promise`, the following `.next` will be called when the `Promise` is actually resolved.

```javascript
fetch('https://api.github.com/users/aderaaij')
    .then(data => data.json())
    .then(data => console.log(data));
```

As the `fetch` function returns a promise, we call `then` on it to transform the data. To turn the data into usable JSON, we call `.json()` on it. As `.json()` returns a promise as well, we tag on another `.then` and can do whatever we want with the transformed data 🎉. You can see how this chaining can be  useful if you need to combine multiple functions which are depending on data from functions that might or might not immediately return a value.

But what if there's an error?

```javascript
fetch('api.github.com/users/aderaaij')
    .then(data => data.json())
    .then(data => console.log(data));
```

In the script above we forgot `https://` so the browser is now looking for this api in my local files. If you run this, the error should say `Uncaught (in promise)`. This means that we haven't used the `catch` method we can tag on to the promised returned by the `fetch api`.

```javascript
fetch('api.github.com/users/aderaaij')
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(err => console.error('oh noes:', err));
```

In this example we've added our `catch` method and we throw an explicit error. The console message should be a bit more informative now.

Finally, we also have the `finally` method. Finally returns a `promise` when the original promise is either resolved or rejected. It's a method you can call when you want something to happen regardless if the function resolves or not. It could be useful to reset a state based on whether the promise has run and finished already. The browser support is still lacking but it could be useful in the future.

```javascript
fetch('https://api.github.com/users/aderaaij')
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(err => console.error('oh noes:', err))
    .finally(() => console.log('finally'));
```

- [`Finally` - MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

#### `getUserMedia`

Another cool in-browser `promise` is the `MediaDevices.getUserMedia()` method which prompts the user to use a media input like their webcam or microphone and produces a medium stream. Of course this function can't run without user permission and has to wait for the user to accept to start doing something.

```javascript
const video = document.querySelector('video');
navigator.mediaDevices.getUserMedia({ video: true })
    .then(mediaStream => {
        video.srcObject = mediaStream;
        video.load();
        video.play();
    })
    .catch(err => console.error(Error("user said no 😡")))
```

In the above example `mediaDevices.getUserMedia({ video: true })` a prompt to ask user permission to get webcam access. When the user either accepts or rejects, the promise resolves or reject. When we accept, we set the `mediaStream` as `sourceObject` for our video element, load up the video and play it.

## Building your own promises

There are plenty of user cases when we'd want to make our own promises and here I'll show you how to do just that.

The base of a `Promise` looks like this:

```javascript
const p = new Promise((resolve, reject) => {

});
```

```javascript
const p = new Promise((resolve, reject) => {
    resolve('yay');
});
```

It takes in *one* function called the `executor` ☠️ with the arguments of `resolved` and `reject`. The idea being that whatever the promise returns either resolves and returns some kind of value, or results in an error.

We can execute all kinds of code within our new `promise` and whenever we've got what we want to return and / or reject, we call `resolve` and `reject`.

```javascript
const p = new Promise((resolve, reject) => {
    resolve('This is awesome!');
});

p.then(console.log)
```

In this case we immediately resolve the value 'This is awesome!' When we apply the `then` method to our `promise` we immediately get back the value that was resolved.

When you replace `resolve` with `reject`, you'd see we will get an `uncaught (in promise)` error, with the same message. We can also `catch` this error and give it a little bit more meaning.

```javascript
const p = new Promise((resolve, reject) => {
    reject(Error('This is an error'));
});

p
    .then(console.log)
    .catch(err => console.error(err));
```

Now the error is caught and logged. Because we wrapped the `reject` message in an `Error` object, we get a lot more information on what might be the problem.

In many cases we would like to return both a `reject` and a `resolve` in our promise. For example, you could return a promise in a function that takes in an argument, and `reject` or `resolve` based on the argument value.

```javascript

function isTonyStark(name) {
    return new Promise((resolve, reject) => {
        if (name === 'Tony') {
            resolve(`Welcome ${name}`);
        } else {
            reject(Error('Danger, Will Robinson, danger!'));
        }
    });
}

isTonyStark('Tony')
    .then(console.log)
    .catch(err => console.error(err));
```

## Chaining promises

Promises are very convenient when dealing with multiple processes which will not return something at the same time, especially when those processes might be dependent on each other. With promises you can control the flow and make sure that you won't execute the next function until the data from the previous one has returned.

So let's sketch a common scenario where you've got two sets of data: A list of movies and a list of heroes. The sets of data come from a database call, so you don't exactly know when you'll have it available. You want to make a function that returns both the movie information as some extra info on the main hero.

```javascript
const movies = [
    { title: 'Thor 3, Ragnarok', company: 'Marvel', hero: 'Thor', id: 1 },
    { title: 'Black Panther', company: 'Marvel', hero: 'Black Panther', id: 2 },
    { title: 'Wonder Woman', company: 'DC', hero: 'Wonder Woman', id: 3 },
];

const heroes = [
    { name: 'Thor', team: 'Avengers' },
    { name: 'Black Panther', team: 'Avengers' },
    { name: 'Wonder Woman', team: 'Justice League', actor: 'Gal Gadot' },
];
```

So the first thing we're going to do, is roll our own promise. We want to be able to get a movie by ID, so here we go:

```javascript
function getMovieByID(id) {
    // We can immediately return a promise in our function, this is how we pass arguments
    return new Promise((resolve, reject) => {
        // Find the movie based on the movie ID
        const movie = movies.find(movie => movie.id === id);
        if (movie) {
            resolve(movie); // Resolve if we've got a movie
        } else {
            reject(Error('oh noes, no movie found'));
        }
    })
}

getMovieByID(3)
    .then(console.log);
```

And there you have it, the first part of our solution.

For our next step, we need to make another `promise` so we can chain it onto our `getMovieById`. When the data is returned, we immediately want to start using it and turn it into something useful.

Our `hydrateData` function takes in the `data` object which is returned in the `then` handler from the `getMovieById` promise. It then returns the new `Promise` we're making.

```javascript
function hydrateData(data) {
    // Return a new promise
    return new Promise((reject, resolve) => {
        // Find the hero by comparing the `hero` value in the `data` object to `hero.name`
        const info = heroes.find(hero => data.hero === hero.name);
        if (info) {
            data.hero = info; // Assigning info to data.hero (replacing the original `hero` value which was just a string)
            resolve(data);
        } else {
            reject(Error('have no heroes'));
        }
    });
}

getMovieByID(3)
    .then(data => hydrateData(data))
    .then((data) => {
        console.log(data);
    });
```

And now everything together:

```javascript
function getMovieById(id) {
    return new Promise((resolve, reject) => {
        const movie = movies.find(movie => movie.id === id);
        if (movie) {
            resolve(movie);
        } else {
            reject(Error('Movie not found'));
        }
    });
}

function hydrateData(data) {
    return new Promise((resolve, reject) => {
        const heroInfo = heroes.find(hero => data.hero === hero.name);
        console.log(heroInfo);
        if (heroInfo) {
            data.hero = heroInfo;
            resolve(data);
        } else {
            reject(Error('oh noe error'));
        }
    });
}

getMovieById(3)
    .then(data => hydrateData(data))
    .then((data) => {
        console.log(data);
    });
```

## `Promise.all` - Multiple promises

In some cases you want to return multiple promises and wait for all of them to resolve before doing something with that data. In that case you can use `Promise.all`. `.all` takes in an array of [iterables](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Iteration_protocols) (promises included) and waits for *all* of those to be resolved before returning values.

```javascript
function printThor() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'Thor',
                bff: 'The Hulk',
                team: 'Avengers',
            });
        }, 500);
    });
}

function printQuotes() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['This drink... I like it!', 'I need a horse!']);
        }, 1000);
    });
}

Promise
    .all([printThor(), printQuotes()])
    .then(([thor, quote]) => console.log(thor, quote));
```

In this example we've got two promises, `printThor` returns after `500ms`, `printQuotes` after `1000ms`. We feed them to `Promise.all` in an array, and call `.then`. This returns data when *both* promises are resolved. To make live easy we destructure both values right in the arrow function arguments.

But what if you fetch data from an array and still need to transform that data to useful JSON? In that case you might want to return yet another `Promise.all`. This time with a `.map` function which maps over the responses and returns `.json()`. Since we're using `.map()` which returns an array and `.json()` which returns a `Promise`, we basically return an array with promises.

```javascript
const dog = fetch('https://dog.ceo/api/breeds/image/random');
const dev = fetch('https://api.github.com/users/aderaaij');

Promise
    .all([dog, dev])
    .then(res => Promise.all(res.map(r => r.json())))
    .then(data => console.log(data));
```

## Promises vs Callbacks

If you remember that piece we wrote on 

```javascript
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(`waited for ${ms}ms`));
        }, ms);
    });
}

wait(300)
    .then(res => wait(500))
    .then(res => wait(1000))
    .then(res => wait(700))
    .then(res => wait(300))
    .then(res => wait(900))
    .catch(err => console.error(err));
```

This makes our code a lot more flat and thus readable.

## Async / Await

At the core, Async / Await is build on top of promises.
In order to async / await anything, you'll need a function that returns a promise.
`Await` always needs to be called within a function marked with `async`. There is no top-level await.

```javascript
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(`waited for ${ms}ms`));
        }, ms);
    });
}

const go = async () => {
    await wait(600);
    await wait(1200);
    await wait(1800);
}
go();
```

In this case we take the exact same `Promise` we created in the previous code block, and call it in a function marked with `async`. Just by adding `await` infront of your function, your code will run synchronously and each `wait` function waits untill the previous one has resolved. This API is even clearer than the `.then` method and there seems to be some performance gains as well. At the moment of writing `async / await` is supported by most browsers.

You can also stick the returned values of a function into a variable:

```javascript
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ms > 500) {
                resolve(`waited for ${ms}ms`);
            } else {
                reject(Error(`you should wait longer than ${ms}ms!`));
            }
        }, ms);
    });
}

const go = async () => {
    const res1 = await wait(600);
    console.log(res1);
    const res2 = await wait(1000);
    console.log(res2);
    const res3 = await wait(1400);
    console.log(res3);
};

go();
```

In the example above, the result of the first promise gets logged after 600ms while the results of the second and third promises will be logged together after 3600ms.

## Error handling

Handling errors with `async` code blocks is a little bit awkward. You can surround your `await` statements with a `try` and `catch` block like this:

```javascript
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ms > 500) {
                resolve(`waited for ${ms}ms`);
            } else {
                reject(Error(`you should wait longer than ${ms}ms!`));
            }
        }, ms);
    });
}

const go = async () => {
    try {
        const res1 = await wait(600);
        console.log(res1);
        const res2 = await wait(600);
        console.log(res2);
        const res3 = await wait(300);
        console.log(res3);
        const res4 = await wait(600);
        console.log(res4);
    } catch (err) {
        console.error('something went wrong...', err);
    }
}

go();
```

```javascript
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ms > 500) {
                resolve(`waited for ${ms}ms`);
            } else {
                reject(Error(`you should wait longer than ${ms}ms!`));
            }
        }, ms);
    });
}

const go = async () => {
    try {
        const res1 = await wait(600);
        console.log(res1);
        const res2 = await wait(600);
        console.log(res2);
        const res3 = await wait(300);
        console.log(res3);
        const res4 = await wait(600);
        console.log(res4);
    } catch (err) {
        console.error('something went wrong...', err);
    }
}

go();
```

In the example above we've wrapped all of the `await` promises in our try block, and if one is rejected we catch that error in our `catch` block.

You could also make a sort of 'Higher order component' which would wrap the go function and would catch all the errors. This is something I totally got from [Wes Bos](http://wesbos.com/) and you should check [his talk on `async/await`](https://youtu.be/9YkUCxvaLEk) in which he goes further into this.

```javascript
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ms > 500) {
                resolve(`waited for ${ms}ms`);
            } else {
                reject(Error(`you should wait longer than ${ms}ms!`));
            }
        }, ms);
    });
}

// First we make a function that takes in our async function as an argument
const catchErrors = (fn) => {
    // And return a function
    return function() {
        // Which returns our async function, which is a promse on which we can call `.catch`
        return fn().catch((err) => {
            console.error('uhoh', err);
        });
    };
};

const go = async () => {
    const res1 = await wait(600);
    console.log(res1);
    const res2 = await wait(600);
    console.log(res2);
    const res3 = await wait(300);
    console.log(res3);
    const res4 = await wait(600);
    console.log(res4);
}

const wrappedFunc = catchErrors(go);
```

This way we don't have to write a different `try` and `catch` block for each promise. You only want to do that when you need to resolve a lot of promises though, otherwise you might be better off writing your `try / catch` block and write a bit more specific error messages.

### Awaiting multiple promises

You need to be careful with `await` and multiple promises, it's not a replacement for `Promise.all`. Adding an `await` statement before your promises makes your code truly synchronous, so if you resolve two `fetch` promises with `await`, the one won't start fetching data before the other is finished. In a lot of cases you'd like them to fire off at the same time and wait for the result of both to come back.

```javascript
async function getDogs() {
    // Store the promise in a variable
    const dog1 = fetch('https://dog.ceo/api/breeds/image/random');
    const dog2 = fetch('https://dog.ceo/api/breeds/image/random');

    const results = await Promise.all([dog1, dog2]); // Wait until both promises are ready
    // Array destructure, await our res.json() promises
    const [mut1, mut2] = await Promise.all(results.map(res => res.json()));
    console.log(mut1, mut2);
}
```

If we have multiple promises we can even map over them and return them in a `Promise.all`.

```javascript
async function getDogs(breeds) {
    const promises = breeds.map((breed) => {
        return fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    });

    const results = await Promise.all(promises);
    const data = await Promise.all(results.map(r => r.json()));
    console.log(data);
}
getDogs(['husky', 'malamute', 'terrier']);
```

## Fin

That sums it up for now! If you have any questions or remarks, please don't hesitate to comment or contact me!

## Resource list

- [ES6 for Everyone by Wes Bos](https://es6.io)
- [dotJS 2017 - Wes Bos - Async + Await talk on YouTube](https://www.youtube.com/watch?v=9YkUCxvaLEk)
- [Promise chaining on javascript.info](https://javascript.info/promise-chaining)
- [Promise `then` vs `then` + `catch` on stackoverflow.com](https://stackoverflow.com/questions/33278280/promise-then-vs-then-catch)
- [Asynchronous stack traces: why `await` beats `.then()` - mathiasbynens.be](https://mathiasbynens.be/notes/async-stack-traces)
- [Using Promises - MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Promise object - MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`Promise.all` - MDN web docs](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [3 facts on promises - Written by K on dev.to](https://dev.to/kayis/3-facts-about-promises-215c)

- [Async / Await - caniuse.com](https://caniuse.com/#search=await)
- [Gotchas about async/await and Promises - by Massimo Artizzu on dev.to](https://dev.to/maxart2501/gotchas-about-asyncawait-and-promises-9di)
- [Awaiting for Async Promises -  written by rhymes on dev.to](https://dev.to/rhymes/awaiting-for-async-promises-in-javascript-3gbd)

- [Iteration Protocls - MDN web docs](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Iteration_protocols)
- [Introduction to javascript iterables, iterators, and generators by Mahmoud Felfel](https://medium.com/@ma7moudfelfel/introduction-to-javascript-iterables-iterators-and-generators-a26be413dfd9)
- [Iterables and iterators in ECMAScript 6 on 2ality.com](http://2ality.com/2015/02/es6-iteration.html)