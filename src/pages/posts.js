import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import PostsList from '../components/PostsList/PostsList';
import PostsListWrap from '../components/PostsListWrap/PostsListWrap';
import SEO from '../components/SEO/SEO';
import config from '../../data/site-config';
import '../graphql/archive';
import TemplateWrapper from '../components/Layouts/Default';

const BlogList = props => {
  const { edges } = props.data.allMarkdownRemark;
  return (
    <TemplateWrapper>
      <div>
        <SEO />
        <Helmet>
          <title>{`Blog | ${config.siteName}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/about/`} />
        </Helmet>

        <PostsListWrap>
          <PostsList edges={edges} />
        </PostsListWrap>
      </div>
    </TemplateWrapper>
  );
};

BlogList.propTypes = {
  data: PropTypes.object.isRequired
};

export default BlogList;

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
