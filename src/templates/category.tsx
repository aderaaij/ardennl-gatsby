import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { MarkdownRemarkConnection } from 'src/types';
import SEO from 'src/components/SEO';
import PostsList from 'src/components/PostsList';
import PostsListWrap from 'src/components/PostsListWrap';
import Default from 'src/components/Layouts';
import config from '../../config/site-config';

interface Props {
  data: {
    allMarkdownRemark: MarkdownRemarkConnection;
  };
  pageContext: {
    category: string;
  };
}
const CategoryTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const { edges } = data.allMarkdownRemark;
  const { category } = pageContext;
  return (
    <Default>
      <SEO />
      <Helmet>
        <title>{`Posts in category '${category}' | ${config.siteName}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/about/`} />
      </Helmet>

      <PostsListWrap>
        <PostsList edges={edges} />
      </PostsListWrap>
    </Default>
  );
};

export default CategoryTemplate;

export const query = graphql`
  query CategoryArchive($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          ...defaultArchiveQuery
        }
      }
    }
  }
`;
