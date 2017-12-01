const path = require('path');
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

const postNodes = [];

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;
    let slug;
    if (node.internal.type === 'MarkdownRemark') {
        const fileNode = getNode(node.parent);
        const parsedFilePath = path.parse(fileNode.relativePath);
        if (
            Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
            Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
        ) {
            slug = `/${_.kebabCase(node.frontmatter.title)}`;
        } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
            slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
        } else if (parsedFilePath.dir === '') {
            slug = `/${parsedFilePath.name}/`;
        } else {
            slug = `/${parsedFilePath.dir}/`;
        }
        if (
            Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
            Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
        ) {
            slug = `/${_.kebabCase(node.frontmatter.slug)}`;
        }
        createNodeField({ node, name: 'slug', value: slug });
        postNodes.push(node);
    }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
        graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `).then((result) => {
            result.data.allMarkdownRemark.edges.map(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/templates/blog-post.js'),
                    context: {
                        // Data passed to context is available in page queries as GraphQL variables.
                        slug: node.fields.slug,
                    },
                });
            });
            resolve();
        });
    });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
    if (stage === 'build-html') {
        config.loader('null', {
            test: /intersection-observer/,
            loader: 'null-loader',
        });
    }
};
