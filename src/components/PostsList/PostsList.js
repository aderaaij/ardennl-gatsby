import React from 'react';
import PropTypes from 'prop-types';
import PostExcerpt from '../PostExcerpt/PostExcerpt';

class PostsList extends React.Component {
  getPostList() {
    const postList = [];
    const { edges } = this.props;
    edges.forEach(postEdge => {
      postList.push({
        published: postEdge.node.frontmatter.published,
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        category: postEdge.node.frontmatter.category,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  /**
   * When in production mode, don't render unpublished posts in the postlist
   * */
  renderPostExcerpt() {
    const postList = this.getPostList();
    return postList.map(post => {
      if (process.env.NODE_ENV === 'production' && post.published) {
        return <PostExcerpt context={this.props.context} key={post.title} postInfo={post} />;
      }
      if (process.env.NODE_ENV === 'development') {
        return <PostExcerpt context={this.props.context} key={post.title} postInfo={post} />;
      }
      return false;
    });
  }

  render() {
    return <>{this.renderPostExcerpt()}</>;
  }
}

PostsList.propTypes = {
  edges: PropTypes.array.isRequired
};

export default PostsList;
