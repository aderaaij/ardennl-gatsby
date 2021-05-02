import * as React from 'react';
import PostExcerpt from '../PostExcerpt/';
import { MarkdownRemarkConnection } from '../../types';
interface Props {
  edges: MarkdownRemarkConnection['edges'];
  context?: string;
}

const PostsList: React.FC<Props> = ({ edges, context }) => {
  return (
    <>
      {edges.map((edge) => {
        if (
          process.env.NODE_ENV === 'production' &&
          edge.node.frontmatter?.published
        ) {
          return (
            <PostExcerpt
              context={context}
              key={edge.node.frontmatter.title}
              node={edge.node}
            />
          );
        }
        if (process.env.NODE_ENV === 'development') {
          return (
            <PostExcerpt
              context={context}
              key={edge.node.frontmatter?.title}
              node={edge.node}
            />
          );
        }
      })}
    </>
  );
};

export default PostsList;
