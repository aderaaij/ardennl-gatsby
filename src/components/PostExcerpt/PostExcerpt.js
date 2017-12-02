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
    padding: 2em;
}

& span {
    display: block;
    margin: 0 0 1em;
    color: ${mc.blueGrey[300]}
    text-transform: lowercase;
    font-style: italic;

    @media (min-width: 768px) {
        font-size: 1.125em;
    }
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
        font-size: 1.375em;
    }
}
`;

const TagList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    color: ${mc.blueGrey[300]};
    font-style: italic;

    li {
        margin: 0 0.5em 0 0;
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

function goToPage(e, slug) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
    } else {
        navigateTo(slug);
    }
}

const PostExcerpt = (props) => {
    const { postInfo } = props;
    return (
        <BlogArticle onClick={e => goToPage(e, postInfo.path)}>
            <Img className={imgStyle} alt="Picture of X" sizes={postInfo.cover.childImageSharp.sizes} />
            <BlogContent>
                <span>{postInfo.date}</span>
                <h2>
                    <Link to={postInfo.path}>{postInfo.title}</Link>
                </h2>
                <p>{postInfo.excerpt}</p>
                <TagList>
                    {postInfo.tags.map(tag => (
                        <li key={tag}>
                            <Link to={`/tags/${tag}`}>
                                {tag}
                            </Link>
                        </li>
                    ))}
                </TagList>
            </BlogContent>
        </BlogArticle>
    );
};

PostExcerpt.propTypes = {
    postInfo: PropTypes.object.isRequired,
};

export default PostExcerpt;
