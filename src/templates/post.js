import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';
import Transition from 'react-transition-group/Transition';
import SEO from '../components/SEO/SEO';
import Tag from '../components/TagLabel/TagLabel';
import ExcerptMeta from '../components/ExcerptMeta/ExcerptMeta';
import { colorScheme } from '../helpers/styleSettings';
import { GridBase, ContentLimit } from '../helpers/grid';
import { preventWidow } from '../helpers/helpers';
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
    height: 60vh;
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

const fullMedia = css`
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
        width: calc(${100 - ((100 / 12) * 2)}vw - 2rem);
        left: auto;
        padding: 0;
    }
    @media(min-width: 1280px) {
        width: calc(${100 - ((100 / 12) * 3)}vw - 2rem);
    }
`;

const ArticleEntryContent = styled.div`
    color: ${colorScheme.text};
    ${ContentLimit};
    max-width: 65ch;

    a {
        color: ${colorScheme.supportLight};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

    > div > p {
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
    p {
        font-size: 1.25em;
        line-height: 1.55;
        margin: 0 0 2em;
        @media(min-width: 768px) {  
            font-size: 1.375em;
        }

        > code {
            background: ${colorScheme.darkLight}
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
        ${fullMedia};
        code, kbd, samp {
            font-size: 1.25em;
        }
    }
    .gatsby-resp-image-wrapper {
        ${fullMedia};
    }

    .caption {
        position: relative;
        margin-bottom: 4em;

        @media(min-width: 768px) {
            margin-bottom: 5em;
        }

        @media(min-width: 1200px) {
            margin-bottom: 0em;
        }

        .caption__text {         
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translateY(100%);
            padding: 0.5em 0 0;
            margin: 0;
            font-size: 1rem;
            font-style: italic;            
            color: ${colorScheme.meta};

            @media(min-width: 768px) {
                font-size: 1.125rem;
            }

            @media(min-width: 1200px) {
                position: absolute;
                top: 0;
                bottom: auto;
                padding: 1rem;
                width: calc(${(100 / 12) * 2}vw - 1rem);
                transform: translateY(0) translateX(-100%);
                border-left: 1px solid ${colorScheme.support};
                text-align: right;
            }
        }
    }
    & h1,h2,h3,h4,h5,h6 {
        font-weight: 700;
        color: ${colorScheme.support};
        line-height: 1.55;
    }
    h2 {
        font-size: 2em;
        border-bottom: 1px solid ${colorScheme.support};
    }
    h3,h4,h5,h6  {
        font-size: 1.75em;
        margin-bottom: 0.25em;
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

const ExcerptMetaStyle = css`
    color: ${colorScheme.text};
    a {
        color: ${colorScheme.text};
    }
`;

const TagPos = css`
    float: right;
    background: ${colorScheme.support};
`;

const duration = 300;

const FadeWrapper = styled.div`
    transition: all ${duration}ms ease-in-out;
    opacity: 0;
`;

const transitionStyles = {
    entering: { opacity: 0, transform: 'translateY(50%)' },
    entered: { opacity: 1, transform: 'translateY(0%)' },
};

const Fade = ({ children, in: inProp }) => (
    <Transition in={inProp} timeout={duration}>
        {state => (
            <FadeWrapper style={{ ...transitionStyles[state] }}>
                {children}
            </FadeWrapper>
        )}
    </Transition>
);

Fade.propTypes = {
    children: PropTypes.array.isRequired,
    in: PropTypes.bool.isRequired,
};

class BlogPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fadeIn: false,
        };
    }

    componentDidMount() {
        this.setState({
            fadeIn: true,
        });
    }

    render() {
        const { frontmatter, html } = this.props.data.markdownRemark;
        const { childImageSharp } = frontmatter.cover;
        const {
            title, category, tags, date, published,
        } = frontmatter;

        return (
            <Article>
                <SEO type="post" post={this.props.data.markdownRemark} />
                {!published &&
                <Helmet>
                    <meta name="robots" content="noindex" />
                </Helmet>
                }
                <ArticleHero>
                    <Img
                        outerWrapperClassName={imgStyle}
                        position="absolute"
                        className={imgStyle}
                        resolutions={childImageSharp.resolutions}
                    />
                    <ArticleHeader>
                        <Fade in={this.state.fadeIn} >
                            {!published &&
                            <Tag style={TagPos} tagText="unpublished" />
                            }
                            <CatLink to={`/categories/${category}`}>{category}</CatLink>

                            <h1>{preventWidow(title)}</h1>
                            {(tags || date) &&
                            <ExcerptMeta className={ExcerptMetaStyle} tags={tags} date={date} />
                            }
                        </Fade>
                    </ArticleHeader>
                </ArticleHero>

                <ArticleContent>
                    <ArticleEntryContent>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </ArticleEntryContent>
                </ArticleContent>
            </Article>
        );
    }
}

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
