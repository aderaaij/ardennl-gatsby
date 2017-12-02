import React from 'react';
import Link from 'gatsby-link';

import Img from 'gatsby-image';
import { fontFace, injectGlobal } from 'emotion';
import styled, { css } from 'react-emotion';

import mc from 'material-colors';

const BlogSection = styled.section`
    width: 100%;
`;

const BlogArticle = styled.article`
    width: 100%;
    border-bottom: 1px solid ${mc.blueGrey[300]};    
`;

const BlogLink = css`
    text-decoration: none;
    padding: 1em;
    display: block;

    @media (min-width: 768px) {
        padding: 2em;
        display: flex;
    }
`;

const BlogContent = styled.div`
    padding: 1em 0;

    @media (min-width: 768px) {
        padding: 2em;
    }

    & span {
        display: block;
        margin: 0 0 1em;
        color: ${mc.blueGrey[400]}
        text-transform: lowercase;
        font-style: italic;

        @media (min-width: 768px) {
            font-size: 1.125em;
        }
    }

    h2 {
        font-size: 1.5em;

        @media (min-width: 768px) {
            font-size: 2em;
        }
    }

    & p {
        font-size: 1.125em;
        max-width: 65ch;
        line-height: 1.5;
        color: ${mc.blueGrey[800]}

        @media (min-width: 768px) {
            font-size: 1.375em;
        }
    }
`;

const imgStyle = css`
    width: 100%;
    display: block;
    margin-bottom: 1em;

    @media (min-width: 768px) {
        width: 30vw;
        margin: 0;
    }
`;

const BlogList = (props, context) => {
    const { edges } = props.data.allMarkdownRemark;
    console.log(edges[0].node.frontmatter.cover.childImageSharp.sizes);
    return (
      <BlogSection>
            {edges.map(({ node }) => (
          <BlogArticle key={node.id}>
                <Link
                        className={BlogLink}
                        to={node.fields.slug}
                    >
                      <Img className={imgStyle} alt="Picture of X" sizes={node.frontmatter.cover.childImageSharp.sizes} />
                      <BlogContent>
                          <span>{node.frontmatter.date}</span>
                          <h2>{node.frontmatter.title}</h2>
                          <p>{node.excerpt}</p>
                        </BlogContent>
                    </Link>
              </BlogArticle>
            ))}
        </BlogSection>
    );
};

export default BlogList;

export const query = graphql`
    query postsQuery {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        cover {
                            id
                            relativePath
                            childImageSharp {
                                sizes(maxWidth: 400) {
                                    tracedSVG
                                    aspectRatio
                                    src                                    
                                    srcSet                                    
                                    srcWebp
                                    srcSetWebp
                                }
                            }
                        }
                        date(formatString: "DD MMMM, YYYY")
                    }         
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;
