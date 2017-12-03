import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import mc from 'material-colors';

import PostExcerpt from '../PostExcerpt/PostExcerpt';

const BlogSection = styled.section`
    width: 100%;
`;

class PostsList extends React.Component {
    getPostList() {
        const postList = [];
        const { edges } = this.props;
        edges.forEach((postEdge) => {
            postList.push({
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
    render() {
        const postList = this.getPostList();
        return (
            <BlogSection>
                {postList.map(post =>
                    <PostExcerpt key={post.title} postInfo={post} />)}
            </BlogSection>
        );
    }
}

PostsList.propTypes = {
    edges: PropTypes.array.isRequired,
};

export default PostsList;
