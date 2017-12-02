import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled, { css } from 'react-emotion';

import mc from 'material-colors';
import 'prismjs/themes/prism-twilight.css';

import 'intersection-observer';

const imgStyle = css`
    width: 100%;
    height: 100%;
    position: relative;
`;

const contentWrap = css`
    max-width: 65ch;
    margin: 0 auto;
    padding: 0 1em;
`;

const ArticleHeader = styled.header`
    ${contentWrap};    
    padding-top: 2em;
    padding-bottom: 2em;

    @media(min-width: 768px) {        
        padding-top: 4em;
        padding-bottom: 4em;
    }

    & span {
        display: block;
        font-size: 1.125em;
        margin: 0 0 1em;
        color: ${mc.blueGrey[300]}
        text-transform: lowercase;
        font-style: italic;
    }

    & h1 {
        margin: 0;
        font-size: 2em;
        letter-spacing: -0.5px;
        color: ${mc.cyan[700]};

        @media (min-width: 768px) {
            font-size: 3em;
        }
    }
`;

const ArticleHero = styled.figure`
    margin: 0;
    padding: 0;
    width: 100%; 
    height: 40vh;
    margin: 0 auto 2em;
    overflow: hidden;

    @media(min-width: 768px) {  
        height: 70vh;
        margin: 0 auto 4em;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const ArticleContent = styled.div`
    ${contentWrap};

    & p {
        font-size: 1.25em;
        line-height: 1.55;
        color: ${mc.grey[800]};
        margin: 0 0 2em;

        @media(min-width: 768px) {  
            font-size: 1.375em;
        }

        & a {
            color: ${mc.cyan[700]};
        }

        &:first-of-type {
            &:first-letter {
                float: left;
                margin: 0.07em 0.23em 0 0;
                text-transform:uppercase;
                font-style: normal;
                font-size: 3.2em;
                line-height: 0.7;
                color: ${mc.cyan[700]}
            }
        }
    }

    ul, ol {
        font-size: 1.25em;
        line-height: 1.55;
        color: ${mc.grey[800]};
        margin: 0 0 2em;

        @media(min-width: 768px) {  
            font-size: 1.375em;
        }
    }

    & .gatsby-highlight {
        position: relative;
        width: 100vw;
        left: calc(-50vw + 50%);
        margin: 0 0 2.5em;

        @media(min-width: 1200px) {
            width: 60vw;
            left: calc(-30vw + 50%);
        }
    }

    & h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
        color: ${mc.cyan[700]};
        line-height: 1.55;
        border-bottom: 1px solid ${mc.blueGrey[100]};
    }

    h2 {
        font-size: 1.625em;
        font-weight: 700;
       
    }

    h3 {
        font-size: 1.5em;
    }
`;

const TagList = styled.div`
    display: flex;
    
    & ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        color: ${mc.blueGrey[300]};
        font-style: italic;
    }    

    li {
        margin: 0 0.5em 0 0;
    }
`;

function preventWidow(string) {
    return string.replace(/\s(?=[^\s]*$)/g, '\u00a0');
}

const BlogPost = ({ data }) => {
    const { frontmatter, html } = data.markdownRemark;
    const { childImageSharp } = frontmatter.cover;
    return (
        <article>
            <ArticleHeader>
                <span>{frontmatter.date}</span>
                <h1>{preventWidow(frontmatter.title)}</h1>
                <TagList>
                    <span>Tags:</span>
                    <ul>
                        {frontmatter.tags.map(tag => (
                            <li key={tag}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </TagList>
            </ArticleHeader>
            <ArticleHero>
                <Img
                    outerWrapperClassName={imgStyle}
                    className={imgStyle}
                    alt="Picture of X"
                    resolutions={childImageSharp.resolutions}
                />
            </ArticleHero>
            <ArticleContent>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </ArticleContent>
        </article>
    );
};

BlogPost.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BlogPost;

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                category
                tags
                cover {
                    id
                    childImageSharp {
                        resolutions(
                            width: 1200,
                            traceSVG: {
                                color: "#CFD8DC",
                                blackOnWhite: true,
                            }
                        ) {
                            # base64
                            tracedSVG
                            aspectRatio
                            # width
                            # height
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            # originalName
                        }
                    }
                }
            }
        }
    }
`;
