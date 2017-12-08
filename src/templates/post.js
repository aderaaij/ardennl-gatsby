import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';
import SEO from '../components/SEO/SEO';
import Tag from '../components/TagLabel/TagLabel';
import { colorScheme } from '../helpers/styleSettings';
import { GridBase, ContentLimit } from '../helpers/grid';
import './b16-tomorrow-dark.css';

// import 'intersection-observer';


const Article = styled.article`
    // padding-top: 60px;
`;

const imgStyle = css`
    width: 100%;
    height: 100%;
    position: absolute !important;
`;

const contentWrap = css`
    max-width: 65ch;
    margin: 0 auto;
    padding: 0 1em;
`;

const ArticleHeader = styled.header`
    margin: auto 0 2em;
    padding: 0 1em;
    z-index: 201;
    position: relative;
    width: 100%;
    ${ContentLimit};

    @media(min-width: 768px) {        
        margin: auto 0 4em;
        padding: 0;
    }

    & h1 {
        margin: 0 0 0.25em;
        font-size: 2em;
        letter-spacing: -0.5px;
        color: ${colorScheme.support};

        @media (min-width: 768px) {
            font-size: 2.5em;
        }

        @media (min-width: 1024px) {
            font-size: 3.5em;
        }
    }
`;

const ArticleHero = styled.figure`
    width: 100%; 
    height: 50vh;
    margin: 0 0 2em;
    overflow: hidden;
    position: relative;
    display: flex;
    ${GridBase};

    &::before {
        content: '';
        z-index: 101;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom,rgba(0,0,0,0.3) 0,rgba(0,0,0,0.9) 100%);

        @media(min-width: 1024px) {
            background: linear-gradient(to bottom,transparent 0,rgba(0,0,0,0.9) 100%);
        }
    }

    @media(min-width: 768px) {
        margin: 0 auto 4em;
    }
    
    @media(min-width: 1024px) {
        width: 100%; 
        margin: 0 0 4em;
        height: 100vh;
    }
`;

const ArticleContent = styled.div`
    padding: 0 1em;
    ${GridBase};
    
    @media(min-width: 768px) {
        padding: 0;
    }
`;

const ArticleEntryContent = styled.div`
    color: ${colorScheme.text};
    ${ContentLimit};
    max-width: 70ch;

    & p {
        font-size: 1.25em;
        line-height: 1.55;
        margin: 0 0 2em;

        @media(min-width: 768px) {  
            font-size: 1.375em;
        }
        
        &:first-of-type {
            &:first-letter {
                float: left;
                margin: 0.07em 0.23em 0 0;
                text-transform:uppercase;
                font-style: normal;
                font-size: 3.2em;
                line-height: 0.7;
                color: ${colorScheme.support};
            }
        }
    }
    ul, ol {
        font-size: 1.25em;
        line-height: 1.55;
        margin: 0 0 2em;
        @media(min-width: 768px) {  
            font-size: 1.375em;
        }
    }
    & .gatsby-highlight {
        width: 100vw;
        position: relative;
        left: calc(-50vw + 50%);
        margin: 2rem 0;

        @media(min-width: 768px) {
            margin: 4rem 0;
            padding: 0 2rem;
        }

        @media(min-width: 1024px) {
            left: -${((100 / 12) * 2)}vw;
        }

        @media(min-width: 1200px) {
            width: calc(${100 - ((100 / 12) * 2)}vw - 2rem);
            left: auto;
            padding: 0;
        }

        @media(min-width: 1280px) {
            width: calc(${100 - ((100 / 12) * 3)}vw - 2rem);
        }

        code, kbd, samp {
            font-size: 1.25em;
        }
    }

    .gatsby-resp-image-wrapper {
        position: relative;
        width: 100vw;
        left: calc(-50vw + 50%);
        margin: 2rem 0;

        @media(min-width: 768px) {
           padding: 0 2rem;
           margin: 4rem 0;
        }

        @media(min-width: 1024px) {
            left: -${((100 / 12) * 2)}vw;
        }

        @media(min-width: 1200px) {
            padding: 0;
            width: calc(${100 - ((100 / 12) * 3)}vw - 2rem);
            left: auto;
            /* left: calc(-35vw + 50%); */
        }
    }

    & h1,h2,h3,h4,h5,h6 {
        font-weight: 700;
        color: ${colorScheme.support};
        line-height: 1.55;
    }
    h2 {
        font-size: 1.625em;
        border-bottom: 1px solid ${colorScheme.support};
    }
    h3,h4,h5,h6  {
        font-size: 1.5em;
    }
`;

const ExcerptMeta = styled.ul`
    color: ${colorScheme.text};
    font-style: italic;
    font-size: 1.125em;
    list-style: none;
    margin: 0;
    padding: 0;
    text-transform: lowercase;

    @media (min-width: 768px) {
        display: flex;
    }

    & > li {
        line-height: 1.5;

        @media (min-width: 768px) {
            line-height: 1;
        }
        &::after {
            @media (min-width: 768px) {
                content: '|';
                margin: 0 0.5em;
            }
        }
        &:last-child {
            display: flex;
            &::after {
                content: '';
                margin: 0;
            }
        }
    }
    & a {
        text-decoration: none;
        color: ${colorScheme.text};
    }
`;

const TagList = styled.div`
    display: flex;
    span {
        margin-right: 1ch;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
    }
    a {
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    li {
        &::after {
            content: ',';
            margin-right: 1ch;
        }
        &:last-child {
            &::after {
                content: '';
                margin: 0;
            }
        }
    }
`;

const CatLink = styled(Link)`
    margin: 0 0 1em;
    font-size: 1.125em;
    font-style: italic;
    display: inline-block;
    text-decoration: none;
    color: ${colorScheme.text};

    &:hover {
        text-decoration: underline;
    }
`;

const TagPos = css`
    float: right;
    background: ${colorScheme.support};
`;

function preventWidow(string) {
    return string.replace(/\s(?=[^\s]*$)/g, '\u00a0');
}

const BlogPost = (props) => {
    const { frontmatter, html } = props.data.markdownRemark;
    const { childImageSharp } = frontmatter.cover;
    return (
        <Article>
            <SEO type="post" post={props.data.markdownRemark} />
            <ArticleHero>
                <Img
                    outerWrapperClassName={imgStyle}
                    position="absolute"
                    className={imgStyle}
                    resolutions={childImageSharp.resolutions}
                />
                <ArticleHeader>
                    {!frontmatter.published &&
                    <Tag style={TagPos} tagText="unpublished" />
                    }
                    <CatLink to={`/categories/${frontmatter.category}`}>{frontmatter.category}</CatLink>
                    <h1>
                        {preventWidow(frontmatter.title)}
                    </h1>
                    <ExcerptMeta>
                        <li>
                            <span>{frontmatter.date}</span>
                        </li>
                        <li>
                            <TagList>
                                <span>Tagged:</span>
                                <ul>
                                    {frontmatter.tags.map(tag => (
                                        <li key={tag}>
                                            <Link to={`/tags/${tag}`}>
                                                {tag}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </TagList>
                        </li>
                    </ExcerptMeta>
                </ArticleHeader>
            </ArticleHero>
            <ArticleContent>
                <ArticleEntryContent>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </ArticleEntryContent>
            </ArticleContent>
        </Article>
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
            timeToRead
            excerpt
            fields {
                slug
            }
            frontmatter {
                title
                published
                date(formatString: "DD MMMM, YYYY")
                category
                tags
                cover {
                    id
                    childImageSharp {
                        resolutions(
                            width: 1200,
                            traceSVG: {
                                color: "#37474F",
                                blackOnWhite: false,
                            }
                        ) {
                            tracedSVG
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                        }
                    }
                }
            }
        }
    }
`;
