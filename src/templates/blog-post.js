import React from 'react';
import Img from 'gatsby-image';
import { fontFace, injectGlobal } from 'emotion';
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
        color: ${mc.blueGrey[400]}
        text-transform: lowercase;
        font-style: italic;
    }

    & h1 {
        margin: 0;
        font-size: 2em;
        letter-spacing: -0.5px;

        @media (min-width: 768px) {
            font-size: 3em;
        }
    }
`;

const ArticleHero = styled.figure`
    margin: 0;
    padding: 0;
    width: 100vw; 
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
        color: ${mc.grey[800]}
        margin: 0 0 2.5em;

        @media(min-width: 768px) {  
            font-size: 1.375em;
        }

        & a {
            color: ${mc.blueGrey[700]};
        }

        &:first-of-type {
            &:first-letter {
                font-size: 2.5em;
                padding: 0 0.25em;
                line-height: 1.2;
                float: left;
            }
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
        letter-spacing: -0.5px;
    }
`;

function preventWidow(string) {
    // Adds the unicode character for a non breaking space
    // Between the last two words
    return string.replace(/\s(?=[^\s]*$)/g, '\u00a0');
}

export default ({ data }) => {
    const { frontmatter, html } = data.markdownRemark;
    const { childImageSharp } = frontmatter.cover;
    return (
        <article>
            <ArticleHeader>
                <span>{frontmatter.date}</span>
                <h1>{preventWidow(frontmatter.title)}</h1>
            </ArticleHeader>
            <ArticleHero>
                <Img outerWrapperClassName={imgStyle} className={imgStyle} alt="Picture of X" resolutions={childImageSharp.resolutions} />
            </ArticleHero>
            <ArticleContent>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </ArticleContent>
        </article>
    );
};

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                cover {
                    id
                    childImageSharp {
                        resolutions(width: 1200) {
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
