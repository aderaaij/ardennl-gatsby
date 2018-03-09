import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import PostsList from '../components/PostsList/PostsList';
import SEO from '../components/SEO/SEO';
import config from '../../data/site-config';
import '../graphql/archive';

const TagTemplate = props => {
    const { edges } = props.data.allMarkdownRemark;
    const { tag } = props.pathContext;
    return (
        <div>
            <SEO />
            <Helmet>
                <title>{`Posts tagged with '${tag}' | ${
                    config.siteName
                }`}</title>
                <link rel="canonical" href={`${config.siteUrl}/about/`} />
            </Helmet>
            <PostsList edges={edges} />
        </div>
    );
};

TagTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    pathContext: PropTypes.object.isRequired,
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
