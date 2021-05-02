import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/site-config';
import Default from 'src/components/Layouts';
import PostsList from 'src/components/PostsList/';
import PostsListWrap from 'src/components/PostsListWrap';
import SEO from 'src/components/SEO';
import { MarkdownRemarkConnection } from 'src/types';

interface Props {
  data: {
    allMarkdownRemark: MarkdownRemarkConnection;
  };
}

const Posts: React.FC<Props> = ({ data }) => {
  const { edges, totalCount } = data.allMarkdownRemark;
  return (
    <Default>
      <SEO />
      <Helmet>
        <title>{`Blog | ${config.siteName}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/about/`} />
      </Helmet>
      <PostsListWrap>
        <PostsList edges={edges} />
      </PostsListWrap>
    </Default>
  );
};

export default Posts;

export const query = graphql`
  query PostsArchive {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          ...defaultArchiveQuery
        }
      }
    }
  }
`;
