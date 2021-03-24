[![Netlify Status](https://api.netlify.com/api/v1/badges/b60aa9fe-5024-4337-b922-23501c29ed32/deploy-status)](https://app.netlify.com/sites/keen-engelbart-3b8c1f/deploys)

# Arden.nl

Repository of [arden.nl](https://www.arden.nl) created with [Gatsby](https://github.com/gatsbyjs/gatsby) and styled with [emotion-js](https://github.com/emotion-js/emotion).

## Installation

Clone / download repository, install with `yarn install`. Start developing with `yarn develop` and create a production build with `gatsby build`. Use `gatsby serve` to start a server with your production build.
You can also use `yarn build` to build a production site and start the server sequentally.

## Features

- Gatsby v2
- emotion-js for styling with `gatsby-plugin-emotion`
- TypeScript support
- Prettier
- Pre-commit hooks with `stage-lint` and `husky`
- Offline support with `gatsby-plugin-offline`
- Sitemap with `gatsby-plugin-sitemap`
- Tracedsvg images with `gatsby-image` and `gatsby-plugin-sharp`
- Blog based on MarkDown files
  - categories
  - tags
- SEO component with React Helmet.

## Hosting

This site is hosted on [Netlify](https://www.netlify.com/) and updates are triggered by pushing the master branch to github. In this configuration changes should be done in seperate branches.
