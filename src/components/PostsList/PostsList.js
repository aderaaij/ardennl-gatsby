import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import mc from 'material-colors';

import PostExcerpt from '../PostExcerpt/PostExcerpt';

const GridBase = css`
    width: 100%;
    max-width: 1920px;

    @supports(display: grid) {
        @media(min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
        }
    }
`;

const BlogSectionWrap = styled.div`
    width: 100%;
    ${GridBase};
`;

const BlogSection = styled.section`
    min-height: 100%;
    padding: 25vh 0 0;
`;

class PostsList extends React.Component {
    getPostList() {
        const postList = [];
        const { edges } = this.props;
        edges.forEach((postEdge) => {
            postList.push({
                published: postEdge.node.frontmatter.published,
                path: postEdge.node.fields.slug,
                tags: postEdge.node.frontmatter.tags,
                category: postEdge.node.frontmatter.category,
                cover: postEdge.node.frontmatter.cover,
                title: postEdge.node.frontmatter.title,
                date: postEdge.node.frontmatter.date,
                excerpt: postEdge.node.excerpt,
                timeToRead: postEdge.node.timeToRead,
            });
        });
        return postList;
    }

    renderPostExcerpt() {
        const postList = this.getPostList();
        return postList.map((post) => {
            if (process.env.NODE_ENV === 'production' && post.published) {
                return <PostExcerpt key={post.title} postInfo={post} />;
            } else if (process.env.NODE_ENV === 'development') {
                return <PostExcerpt key={post.title} postInfo={post} />;
            }
            return false;
        });
    }
    render() {
        return (
            <BlogSection>
                {this.renderPostExcerpt()}
            </BlogSection>
        );
    }
}

PostsList.propTypes = {
    edges: PropTypes.array.isRequired,
};

export default PostsList;
