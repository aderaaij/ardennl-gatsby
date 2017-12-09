import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import Link, { navigateTo } from 'gatsby-link';
import styled, { css } from 'react-emotion';
import Tag from '../TagLabel/TagLabel';
import TagList from '../TagList/TagList';
import ExcerptMeta from '../ExcerptMeta/ExcerptMeta';
import { colorScheme } from '../../helpers/styleSettings';

const BlogArticle = styled.article`
    position: relative;
    z-index: 201;
    padding: 2em 1em;
    cursor: pointer;
    border-bottom: 1px solid ${colorScheme.meta};

    @media (min-width: 768px) {
        padding: 4em 0;
        width: 100%;
    }
`;

const BlogContent = styled.div`
    width: 100%;

    h2 {
        font-size: 1.5em;

        a {
            color: ${colorScheme.support};
            text-decoration: none;
        }

        @media (min-width: 768px) {
            font-size: 3em;
            margin: 0;
        }
    }

    & p {
        font-size: 1.125em;
        max-width: 55ch;
        line-height: 1.5;
        color: ${colorScheme.text};

        @media (min-width: 768px) {
            font-size: 1.25em;
        }
    }
`;

const CatLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
    margin: 0 0 1em;    
    text-transform: lowercase;
    font-style: italic;
    color: ${colorScheme.meta};

    @media (min-width: 768px) {
        font-size: 1.125em;
    }

    &:hover {
        text-decoration: underline;
    }
`;

const TagPos = css`
    float: right;
    background: ${colorScheme.support};
`;

const duration = 400;

const BGImage = css`
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    object-fit: cover;
    pointer-events: none;
    transition: ${duration}ms ease-out;
    opacity: 0;

    @media(min-width: 1024px) {
        height: 100vh;
    }
`;

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
};

function goToPage(e, slug) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
    } else {
        navigateTo(slug);
    }
}

const ExcerptMetaStyle = css`
    color: ${colorScheme.meta};

    a {
        color: ${colorScheme.meta};
    }
`;

const Fade = ({ in: isHovering, image }) => (
    <Transition in={isHovering} timeout={10}>
        {status => (
            <img
                className={BGImage}
                alt=""
                src={image}
                style={{
                    ...transitionStyles[status],
                }}
            />

        )}
    </Transition>
);

export default class PostExcerpt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovering: false,
        };
    }

    handleMouseEnter() {
        this.setState({
            isHovering: true,
        });
    }
    handleMouseLeave() {
        this.setState({
            isHovering: false,
        });
    }

    render() {
        const { postInfo } = this.props;
        const { isHovering } = this.state;
        return (
            <div>
                <Fade
                    in={!!isHovering}
                    image={postInfo.cover.childImageSharp.resolutions.tracedSVG}
                />
                <BlogArticle
                    onMouseEnter={() => this.handleMouseEnter()}
                    onMouseLeave={() => this.handleMouseLeave()}
                    onClick={e => goToPage(e, postInfo.path)}
                >
                    <BlogContent>
                        <div>
                            {!postInfo.published &&
                            <Tag
                                style={TagPos}
                                tagText="unpublished"
                            />
                            }
                            <CatLink to={`/categories/${postInfo.category}`}>{postInfo.category}</CatLink>
                            <h2>
                                <Link to={postInfo.path}>{postInfo.title}</Link>
                            </h2>
                            <p>{postInfo.excerpt}</p>
                            {(postInfo.tags || postInfo.date) &&
                            <ExcerptMeta
                                className={ExcerptMetaStyle}
                                tags={postInfo.tags}
                                date={postInfo.date}
                            />
                            }
                        </div>
                    </BlogContent>
                </BlogArticle>
            </div>
        );
    }
}

PostExcerpt.propTypes = {
    postInfo: PropTypes.object.isRequired,
};

// export default PostExcerpt;
