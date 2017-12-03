import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link, { navigateTo } from 'gatsby-link';
import Img from 'gatsby-image';
import styled, { css } from 'react-emotion';
import mc from 'material-colors';


const BlogArticle = styled.article`
    display: block;
    width: 100%;
    padding: 1em;
    border-bottom: 1px solid ${mc.blueGrey[300]};
    cursor: pointer;
    transition: background 0.3s ease-out;

    @media (min-width: 768px) {
        display: flex;
        padding: 2em;        
    }

    &:hover {
        background: ${mc.blueGrey[50]};
    }
`;

const BlogContent = styled.div`
    padding: 1em 0;

    @media (min-width: 768px) {
        padding: 0 2em;
        display: flex;
        align-items: center;
    }

    & > span {
        
    }

    h2 {
        font-size: 1.5em;
        color: ${mc.cyan[700]};

        a {
            color: ${mc.cyan[700]};
            text-decoration: none;
        }

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
            font-size: 1.25em;
        }
    }
`;

const ExcerptMeta = styled.ul`
    color: ${mc.blueGrey[300]};
    font-style: italic;
    font-size: 1rem;
    list-style: none;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    text-transform: lowercase;

    @media (min-width: 768px) {
        display: flex;
        line-height: 1;
    }

    & > li {
        font-size: 1rem; 

        @media (min-width: 768px) {
            &::after {
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

        &:nth-child(2) {
            
        }
    }

    & a {
        text-decoration: none;
        color: ${mc.blueGrey[300]};
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

const imgStyle = css`
    width: 100%;
    display: block;
    margin-bottom: 1em;

    @media (min-width: 768px) {
        width: 30vw;
        margin: 0;
    }
`;

const CatLink = styled(Link)`
    color: ${mc.blueGrey[300]};
    text-decoration: none;

    display: block;
    margin: 0 0 1em;
    color: ${mc.blueGrey[300]}
    text-transform: lowercase;
    font-style: italic;

    @media (min-width: 768px) {
        font-size: 1.125em;
    }

    &:hover {
        text-decoration: underline;
    }
`;

function goToPage(e, slug) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
    } else {
        navigateTo(slug);
    }
}

const PostExcerpt = (props) => {
    const { postInfo } = props;
    console.log(postInfo);
    return (
        <BlogArticle onClick={e => goToPage(e, postInfo.path)}>
            <Img className={imgStyle} alt="Picture of X" sizes={postInfo.cover.childImageSharp.resolutions} />
            <BlogContent>
                <div>
                    <CatLink to={`/categories/${postInfo.category}`}>{postInfo.category}</CatLink>
                    <h2>
                        <Link to={postInfo.path}>{postInfo.title}</Link>
                    </h2>
                    <p>{postInfo.excerpt}</p>
                    <ExcerptMeta>
                        <li>
                            <span>{postInfo.date}</span>
                        </li>
                        <li>
                            <TagList>
                                <span>Tagged:</span>
                                <ul>
                                    {postInfo.tags.map(tag => (
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
                </div>
            </BlogContent>
        </BlogArticle>
    );
};

PostExcerpt.propTypes = {
    postInfo: PropTypes.object.isRequired,
};

export default PostExcerpt;
