---
title: "Taking Gatsby for a spin"
cover: ./great-gatsby.jpg
date: "2017-11-30"
category: "webdevelopment"
tags:
    - gatsby
    - javascript
published: false
---

A static site generator based on React, does that even make sense? GatsbyJS is the fancy *nouveau riche* on the estate of established static site generators and if the name is anything to go by we can expect some front-end decadence.  (I'm assuming the name is based on the F.Fitzgerald story, otherwise these analogies are even worse than they already are). For this post I'll dive into the how and why of GatsbyJS bit, and share with you my personal experience. 

## Introduction
I've been a fan of the 'static site generator' concept for a while now. In the most minimal configuraton a site generator will take care of tedious tasks like creating reoccuring elements on every page (think headers, footers, menus and meta-deta), but more than often they'll also allow you to build a website with all your favourite tools. I've built my own static site generator, TotallyStatical, which uses webpack and gulp to quickly build templates or prototypes based on all the preprocessors and languages I like. It makes creating templates and prototyping such an incredibly fun experience, until whatever I've made needs to be implemented in some CMS system (Most of the time, WordPress). I've been developing for WordPress for years, but I never really enjoyed the experience of muddying down my 'flawless' html templates with PHP tags and functions all over the place. 

Enter GatsbyJS, the static site generator based on React. One of the things that the Gatsby development environment provides is a data layer and plugins which lets you pull in and distribute data from API's, files / directories, markdown files, databases and basically whatever. This allows you to use the editing capabilities of a Wordpress installation and pull in the data to a blazing fast static site which doesn't even have to reside on the same server. I don't know about you, but seperation of content management systems and client-side stuff is like my holy grail. 

## Features

### Modern development environment with React
One of the most striking features of Gatsby is that it's based on React. You create your site by writing react components and JSX and it outputs static files and assets. Personally I greatly enjoy working in React but the idea of using it to create static sites required a bit of a mental switch. Now I've been using it, I really do think it makes sense, but more on that later. 

Other good stuff in the development environment are: 

* **Preconfigured Webpack**<br/>
Gatsby comes with an extensive Webpack configuration which you can override or add to in a gatsby-config file or through gatsby plugins. There's already an impressive amount of plugins available on the Gatsby site, and they highly encourage the community to create and share plugins as well. 
* **Modern Javascript and CSS**<br/>
It almost goes without saying, but Gatsby allows you to write your ES6 and up, including all the import goodness. And regarding CSS you can do anything you want; plain old CSS, SCSS, CSS-in-JS, Styled Components. You name it and you can use it.

### Data with Graphql
Graphql is a query language for API's. It's not tied into any specific storage or database system so you can pull in all kinds of data and query it in a way that fits your existing data and code. You can feed it data from the WordPress API and query it into your development environment in an *sql* kind of way. Only SQL queries and I never really got along, but Graphql queries seem super clean and readable to me. To make it even easier, the Gatsby's development environment also comes with Graph*i*QL, a browser based IDE to easily create and debug queries with. 
<div class='caption'>

![Screenshot of GraphiQl](./grahiql_screenshot.png "GraphiQL")
<p class='caption__text'>
    An example of a graphql query as used in Gatsby.
</p>
</div>

But wait, there's more: Gatsby already has a bunch of plugins available that will let you pull in data from various CMS's, json, yaml, filesystem or markdown files.

<div class='caption'>

```es6
export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            fields {
                slug
            }
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                cover {
                    childImageSharp {
                        resolutions(
                            width: 1200,
                        ) {
                            src
                        }
                    }
                }
            }
        }
    }
`;
```
<p class='caption__text'>
    An example of a graphql query as used in Gatsby.
</p>
</div>


Gatsby was my introduction to Graphql, which also comes out of the Facebook corner. Graphql is a query language for yor API's. It's not tied into a specific storage or database system so you can write abstraction layers to pull in all kinds of data, and adapt it to fit your existing code and data. So basically you've got a 

### 'Progressive Web App' including PRLP pattern
### A good plugin interface



I've long been convinced that Static Site Generators make sense, although I've mostly used them for templating and rapid prototyping. I built my own static site generator, TotallyStatical, specifically for that purpose and it has served me well. It doesn't handle a lot of data but I often use it for creating actual static sites or themes for Wordpress, so it's not that necessary either. It's also one of the reasons I've never tried out Hugo or Jekyll.



To be honest, I wasn't really looking for a new soluti
Ever since I started following the Gatsby Twitter account I've been wanting in on the action. The daily retweets of developers stating that Gatsby is the most exciting thing since they discovered the `marquee` tag totally convinced me, even though I had no idea if generating a static site based on React is something that makes sense. 




## Features

### Graphql

### Image Sharp

## Some thoughts on gatsbys position in front-end 

### Beware of unreadable HTML


## The future

Gatsby totally played on my FOMO. Since following their twitter account and seeing 
their retweets of happy developers praising Gatsby as the most fun front-end experience
since they found out about the `blink` tag, I've been itching to try it out myself. 
So what is Gatsby? Gatsby is a static site generator based on React. If you're in the camp 
that feels that front-end development is over-complicated as it is, it's probably not for you. 
But if you love tooling and experimenting with the latest technique, you'll have a blast with Gatsby! 

## Why I chose Gatsby

Gatsby creates static HTML sites, which is not that special. I even have my own
static site generator / rapid prototype tool: 
[TotallyStatical](https://github.com/aderaaij/totallystatical) which I absolutely
love to use and improve on, so you'd naturally that was my go-to when I started
thinking about making myself a new site. But as Gatsby is based on React and I saw
all kinds of integrated goodness coming by like SVG trace image preloading, I 
really felt that Gatsby deserved a fair chance.

![alt text](./image-01.jpg "image")