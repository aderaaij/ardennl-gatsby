---
title: 'Setting up a GatsbyJS starter with TypeScript, ESLint, Prettier and pre-commit hooks'
date: '2019-02-24'
category: 'webdevelopment'
cover: ./stella-ribeiro-631365-unsplash.jpg
tags:
  - javascript
  - typescript
  - gatsby
published: true
---

GatsbyJS, the static site generator on which my own blog is based, must be my favorite gateway technology. It learned me how to get comfortable with React and introduced me to GraphQL. As nowadays every project I'm working on contains TypeScript(TS), updating a Gatsby starter with TypeScript seems like a perfect way to get some in-depth practical knowledge.

In this article, we'll set up the Gatsby default starter blog with TypeScript, ESLint, Prettier and run these before every commit with `lint-staged` and `husky`.

## Why TypeScript?

The answer to that question might be a blog post on its own, but this excellent [StackOverflow answer from Lodewijk Bogaards](https://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript/35048303#35048303) will undoubtfully answer most of your questions. From the answer:

> TypeScript is modern JavaScript + types. It's about catching bugs early and making you a more efficient developer, while at the same time leveraging the JavaScript community.

You had me at "catching bugs early". Let's do this!

## Fork, clone and install the Gatsby blog starter

For this tutorial, I advise you to fork the gatsby blog starter to your own Github account and clone it to your local machine from there.

- Go to https://github.com/gatsbyjs/gatsby-starter-blog.
- Click `fork`
- Clone the repository to your local machine with `git clone git@github.com:<youraccount>/gatsby-starter-blog.git`
- `cd` into the folder
- _optional_ create a new branch with `git checkout -b "typescript"` and push
- Run `yarn install`
- Run `yarn develop`

Voila, your Gatsby starter is running on `http://localhost:8000/` and we can start to set-up TypeScript!

## Install `gatsby-plugin-typescript` and TypeScript

To make use of TypeScript within Gatsby, we need to add two new packages, starting with `gatsby-plugin-typescript`. The [description page of `gatsby-plugin-typescript`](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/) had me slightly confused as it clearly says it does _not_ do type-checking. So what does this plugin do exactly?

As it turns out, TypeScript in itself is a Transpiler, just like Babel. It can do both type-checking _and_ generate several flavors of browser readable JavaScript. In GatsbyJS we only want the TypeScript type-checking though, because Gatsby already uses Babel to transpile our ESNext code.

That's why `gatsby-plugin-typescript` extends the GatsbyJS WebPack and Babel configurations to include the `@babel/preset-typescript` plugin. This way, Babel and its plugins can transpile both TypeScript _and_ ESNext code into browser readable JS and we'll set up TypeScript independently to give us full type-checking support without compiling anything itself.

For a further explanation, I refer you to this superb article on [TypeScript + Babel by Matt Turnbull](https://iamturns.com/typescript-babel/).

So let's get to it and add `gatsby-plugin-typescript` and TypeScript to your Gatsby set-up. TypeScript can be added to the `devDependencies` whilst Gatsby plugins should be added as a dependency:

```bash
yarn add gatsby-plugin-typescript
yarn add typescript --dev
```

Don't forget to enable the plugin in the `gatsby-config.js` file in the root of your project:

```js
  ...
  `gatsby-plugin-offline`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-typescript`,
  ...
```

### Add and configure tsconfig.json and type-check script

Next up we'll need to add a [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) to the root of our project. TypeScript has a CLI command, `tsc` and when using it without specifying any files, TypeScript will always look for a `tsconfig.json`. If the `tsconfig.json` is empty, TypeScript will revert to its defaults, but we'll need to set-up a couple of things.

#### `compilerOptions`

- `"module": "commonjs"`
  As we're using Node.js and import our NPM packages the CommonJS way, we want to make sure this option is set to `commonjs`
- `"target": "esnext"`
  To be honest, I'm not sure if this does anything when we don't use TypeScript as a compiler. When we use TypeScript as a compiler we can specify the ECMA script target here. I'm still leaving it here because that's what people smarter than myself seem to do as well. In our case, we'll just target `esnext`.
- `"jsx": "preserve"`
  TypeScript has a few different options for compiling JSX. Again, we're not compiling with TypeScript but when we're using JSX it will expect this option to be present. The `preserve` option would normally make sure the JSX code wouldn't be compiled.
- `"lib": ["dom", "esnext"]`
  The `lib` option will tell TypeScript which libraries to support. This doesn't include any polyfills or anything, but will just tell TypeScript which methods are allowed when compiling and type checking. If we'd omit `dom` from the options and would include `document.querySelector`, TypeScript would show you an error.
- `"strict": true`
  This option enables a bunch of strict type-checking options like `noImplitAny`, `noImplicitThis` and `strictFunctionTypes`. Go hard or go home!
- `"noEmit": true`
  As we don't want TypeScript to create any new files because we're leaving that to the Gatsby Babel setup, it's important not to forget about this option.
- `"esModuleInterop": true, "noUnusedLocals": false`
  Both of these options are mainly used to keep proper compatibility with Babel. You can read more about this on this [article on TypeScript and Babel 7 by Microsoft](https://devblogs.microsoft.com/typescript/typescript-and-babel-7/).
- `"noUnusedLocals": false`
  I don't know about you but I always have some variables hanging around for feature use. Maybe it's a bad habit and I should apply more Marie Kondo practices to my code, but not today.

#### Include and Exclude

We can specify both `include` and `exclude` in our config file. If there is no `include` specified, TypeScript will include all compatible files in the root and all subdirectories. In my case, I decided to only use the exclude option to make sure TypeScript doesn't waste time checking the compiled JavaScript in the public folder, my `node_modules` or my `.cache` directory.

Our config file should look something like this now:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "esnext",
    "jsx": "preserve",
    "lib": ["dom", "esnext"],
    "strict": true,
    "noEmit": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "noUnusedLocals": false
  },
  "exclude": ["node_modules", "public", ".cache"]
}
```

#### Add Type-checking NPM script.

Next up, add a new script to your `package.json`:

```json
"scripts": {
  ...
 "type-check": "tsc"
}
```

Don't worry about passing any flags. Running `tsc` will have TypeScript looking for our `tsconfig.json` which holds all our configurations. If all is well we can now run `yarn type-check`, which will probably result in the following error:

```bash
$ tsc
error TS18003: No inputs were found in config file '~/gatsby-starter-blog/tsconfig.json'.
Specified 'include' paths were '["**/*"]' and 'exclude' paths were '["node_modules","public",".cache"]'.
```

Don't worry about this! This is only because we don't have any TypeScript files in our set-up yet. All our files are still `.js` and seeing we haven't set `allowJs` to true in our `tsconfig.json`, there is nothing to check. We'll fix that soon enough.

### Converting files to TypeScript

At this point, it's probably a good idea to start renaming your `*.js` files to `*.ts` and `*.tsx` (if they contain JSX). You can convert all the files in the `./src/` folder, and if your editor supports IntelliSense, it will be yelling at you with a whole bunch of red squiggly lines in no-time. At the same time, running `yarn type-check` should give you a whole bunch of errors, which is good for a change as it means that your configuration worked!

Normally I'd also advise you to start fixing the current type errors that TypeScript is yelling about. Because I want to make sure that you've got a complete set-up, including linting, I'm leaving the actual fixing of these errors for the follow-up blog post. For now, please bear with me as we set-up a linter and commit hooks!

Also, don't forget to commit your code and take a break!

### Setting up the linters

#### ESLint or TSLint?

Just to prevent any confusion: The preferred linter to use with TypeScript is ESLint. You might still see a lot of `tslint` configuration files out there, but I believe [TSLint will soon be deprecated](https://medium.com/palantir/tslint-in-2019-1a144c2317a9).

#### Setting up ESLint and Prettier

To set up ESLint with TypeScript, Prettier and some React best practices, we'll need to add a bunch of `devDependencies`:

```bash
yarn add eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-react --dev
```

Now all the necessary packages are installed, we need to add a `.eslintrc.js` configuration file to the root of our project (I prefer a `.js` file so I can add comments). Below you'll find an example of my ESLint configuration

```javascript
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  rules: {
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off' //
      }
    }
  ]
};
```

In this setup, the TypeScript linter will work perfectly with Prettier and ESLint while also being able to extend other ESLint settings and recommendations.

#### Adding Lint Scripts

To make life easier on ourselves we'll add two lint scripts to our `package.json`

```json
"scripts": {
  ...
  "lint": "eslint --ignore-path .gitignore . --ext ts --ext tsx --ext js --ext jsx",
  "lint:fix": "yarn lint --fix"
}
```

The first script runs ESLint on every `*.ts`,`*.js`,`*.tsx` and `*.jsx` file and shows you the errors. The second one will also fix any errors that ESLint can fix on its own. If you run `yarn lint` now, you should see a whole bunch of lint errors in your terminal.

### Setting up the editor

VSCode has excellent linting support, but to make sure we see not just the type errors but also the rules we have declared or extended in our `.eslint` file whilst we're coding, we need to add a bit to the VSCode settings.

```json
"eslint.validate": [
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
```

You can add this to your general settings, or include it in a file in a folder labeled `.vscode` in the root of the project. If you want, you can download the file right here: https://github.com/aderaaij/gatsby-starter-blog/tree/typescript/.vscode

### Setting up Husky and Lint Staged

Having our editor highlighting type-errors is great, but of course, the end-game is making sure that everyone who works on our code will commit code that is formatted the same and checked against the same rules. If it doesn't pass the type-checking _and_ linting, it shouldn't be able to get added to the code-base.

For this, we'll use the NPM packages `husky` and `lint-staged`. `husky` allows us to run pre- and post-commit hooks and `lint-staged` allows us to run a linter over _just_ the files which are being staged for a commit.
To install them, run:

```bash
yarn add husky lint-staged --dev
```

We can configure `husky` and `lint-staged` in our `package.json` or in separate files. I prefer separate files, as a glance at the file-structure can show you what goodies are already configured.

First, let's add a `.lintstagedrc` in the root of our project, and add the following:

```json
{
  "*.{js,jsx,ts,tsx}": ["yarn lint:fix", "git add"],
  "*.scss": ["prettier --write", "stylelint --fix", "git add"],
  "{*.{json,md}}": ["prettier --write", "git add"]
}
```

This will run your `lint:fix` script on commit whilst also running Prettier on `*.scss` , `*.json` and `*.md` files. This will only run on files that are staged.

Next up, add a `.huskyrc` file to the root of your project and add the following to it:

```json
{
  "hooks": {
    "pre-commit": ["yarn type-check && lint-staged"]
  }
}
```

This will `type-check` all your files on the `pre-commit` hook and run the `lint-staged` command which in turns runs the commands we've added to the `.lintstagedrc` file, but only for the staged files.

Now try and commit your new updates... You can't! As the `type-check` script runs on _all_ your TypeScript files, and all we've done so far is rename `*.js` files to `*ts(x)`, there are plenty of type and lint errors in there.

If you do want to be able to commit your config files, you can add a `--no-verify` to your commit command in the terminal.

## Wrapping up

So there we have it! You started off with a Gatsby starter that worked perfectly fine and now we've screwed that all up. Your editor is filled with angry squiggly lines and your terminal yells at you when you try to commit your code. Congratulations!

On the bright side, TypeScript, ESLint, Prettier and a bunch of pre-commit hooks are all configured. And that's not all: If you run `yarn develop` or `yarn build`, Gatsby will still run. This is because of the Babel configuration I mentioned earlier on. TypeScript errors will not prevent the transpiling of your code as long as the JS is valid.

I do feel kind of guilty leaving you with a blog full of errors, but in the next blog post we'll try to battle the squiggly lines by

- Installing type definitions for our packages
- Creating new definitions for packages without their own type definition
- Making interfaces for objects
- Trying to generate some definitions for our GraphQL Queries

And whatever else will come on our path.

You can find the progress until so far in the following branch: https://github.com/aderaaij/gatsby-starter-blog/tree/typescript

If you want to see everything up and running without all the errors, you can always have a look at the [GitHub repo of Arden.nl](https://github.com/aderaaij/ardennl-gatsby)

If you have any questions or remarks about this post, you can find me on [Twitter](https://arden.nl) or add your comment to the [re-post of this article on Dev.to](https://dev.to/ardennl/setting-up-a-gatsbyjs-starter-with-typescript-eslint-prettier-and-pre-commit-hooks-2ebg)

## Resources

- [StackOverflow answer on the question "What is TypeScript and why would I use it in place of JavaScript? [closed]
  " from Lodewijk Bogaards](https://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript/35048303#35048303)
- [TypeScript Handbook on the tsconfig.json file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [TypeScript Handbook on Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [Gatsby starter blog TypeScript branch on GitHub](https://github.com/aderaaij/gatsby-starter-blog/tree/typescript)
- [Gatsby TypeScript plugin overview](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/)
- [_TypeScript With Babel: A Beautiful Marriage_ by Matt Turnbull](https://iamturns.com/typescript-babel/)
- [_Using ESLint and Prettier in a TypeScript Project_ by Robert Cooper](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
- [_TSLint in 2019_ by Palantir](https://medium.com/palantir/tslint-in-2019-1a144c2317a9)
