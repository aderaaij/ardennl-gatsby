import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import PostsList from '../components/PostsList/PostsList';
import PostsListWrap from '../components/PostsListWrap/PostsListWrap';
import SEO from '../components/SEO/SEO';
import '../graphql/archive';
import TemplateWrapper from '../components/Layouts/Default';
import { MarkdownRemarkNodeType } from './index';

interface ConfigI {
  siteName: string;
  siteUrl: string;
}
const config: ConfigI = require('../../data/site-config');

interface BlogListProps {
  data: {
    allMarkdownRemark: {
      edges: [MarkdownRemarkNodeType];
    };
  };
}
const BlogList = (props: BlogListProps) => {
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
