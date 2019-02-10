import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import '../graphql/archive';

import PostsList from '../components/PostsList/PostsList';
import PostsListWrap from '../components/PostsListWrap/PostsListWrap';
import SEO from '../components/SEO/SEO';
import Default from '../components/Layouts/Default';

import { AllMarkdownRemark } from '../types';

interface ConfigI {
  siteName: string;
  siteUrl: string;
}
const config: ConfigI = require('../../data/site-config');

interface BlogListProps {
  data: {
    allMarkdownRemark: AllMarkdownRemark;
  };
}
const BlogList = (props: BlogListProps) => {
  const { edges } = props.data.allMarkdownRemark;
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
