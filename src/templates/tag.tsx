import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { AllMarkdownRemark } from '../types';
import SEO from '../components/SEO/SEO';
import PostsList from '../components/PostsList/PostsList';
import PostsListWrap from '../components/PostsListWrap/PostsListWrap';
import Default from '../components/Layouts/Default';
const config = require('../../data/site-config');
import '../graphql/archive';

interface TagTemplateProps {
  data: {
    allMarkdownRemark: AllMarkdownRemark;
  };
  pageContext: {
    tag: string;
  };
}

const TagTemplate = ({ data, pageContext }: TagTemplateProps) => {
  const { edges } = data.allMarkdownRemark;
  const { tag } = pageContext;
  return (
    <Default>
      <SEO />
      <Helmet>
        <title>{`Posts tagged with '${tag}' | ${config.siteName}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/about/`} />
      </Helmet>
      <PostsListWrap>
        <PostsList edges={edges} />
      </PostsListWrap>
    </Default>
  );
};

export default TagTemplate;

export const query = graphql`
  query TagArchive($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
