import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PostsList from '../components/PostsList/PostsList';
import SEO from '../components/SEO/SEO';
import config from '../../data/site-config';
import '../graphql/archive';

const TagTemplate = ({ data, pageContext }) => {
  const { edges } = data.allMarkdownRemark;
  const { tag } = pageContext;
  return (
    <div>
      <SEO />
      <Helmet>
        <title>{`Posts tagged with '${tag}' | ${config.siteName}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/about/`} />
      </Helmet>
      <PostsList edges={edges} />
    </div>
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
