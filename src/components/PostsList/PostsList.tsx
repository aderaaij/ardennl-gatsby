import * as React from 'react';
import PostExcerpt from '../PostExcerpt/PostExcerpt';
import { MarkdownRemarkNodeType } from '../../pages/index';

interface PostListProps {
  edges: [MarkdownRemarkNodeType];
  context?: string;
}

const PostsList = (props: PostListProps) => {
  const getPostList = () =>
    props.edges.map((postEdge: MarkdownRemarkNodeType) => ({
      published: postEdge.node.frontmatter.published,
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      category: postEdge.node.frontmatter.category,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.frontmatter.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead
    }));

  /**
   * When in production mode, don't render unpublished posts in the postlist
   */
  const renderPostExcerpt = () => {
    const postList = getPostList();

    return postList.map(post => {
      if (process.env.NODE_ENV === 'production' && post.published) {
        return (
          <PostExcerpt
            context={props.context}
            key={post.title}
            postInfo={post}
          />
        );
      }
      if (process.env.NODE_ENV === 'development') {
        return (
          <PostExcerpt
            context={props.context}
            key={post.title}
            postInfo={post}
          />
        );
      }
      return false;
    });
  };

  return <>{renderPostExcerpt()}</>;
};

export default PostsList;
