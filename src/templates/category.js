import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/SEO/SEO';
import PostsList from '../components/PostsList/PostsList';
import config from '../../data/site-config';
import '../graphql/archive';

const CategoryTemplate = ({ data, pageContext }) => {
  const { edges } = data.allMarkdownRemark;
  const { category } = pageContext;
  return (
    <div>
      <SEO />
      <Helmet>
        <title>{`Posts in category '${category}' | ${config.siteName}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/about/`} />
      </Helmet>
      <PostsList edges={edges} />
    </div>
  );
};

CategoryTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
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
