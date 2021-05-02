import Helmet from 'react-helmet';
import Default from '../Layouts';
import PostsList from '../PostsList/PostsList';
import PostsListWrap from '../PostsListWrap/PostsListWrap';
import SEO from '../SEO/SEO';
import { MarkdownRemarkConnection } from '../../types';
import config from '../../../config/site-config';

interface Props {
  allMarkdownRemark: MarkdownRemarkConnection;
}

const BlogList: React.FC<Props> = ({ allMarkdownRemark }) => {
  const { edges } = allMarkdownRemark;
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
