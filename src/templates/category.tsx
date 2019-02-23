import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { AllMarkdownRemark } from '../types';
import SEO from '../components/SEO/SEO';
import PostsList from '../components/PostsList/PostsList';
import PostsListWrap from '../components/PostsListWrap/PostsListWrap';
import Default from '../components/Layouts/Default';
import config from '../../config/site-config';
import '../graphql/archive';

interface CategoryTemplateProps {
  data: {
    allMarkdownRemark: AllMarkdownRemark;
  };
  pageContext: {
    category: string;
  };
}
const CategoryTemplate = ({ data, pageContext }: CategoryTemplateProps) => {
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
