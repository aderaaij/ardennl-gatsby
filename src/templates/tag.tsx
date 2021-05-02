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
  pageContext: {
    tag: string;
  };
}

const TagTemplate: React.FC<Props> = ({ data, pageContext }) => {
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
