import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import SEO from '../components/SEO/SEO';
import PostsList from '../components/PostsList/PostsList';
import config from '../../data/site-config';

const CategoryTemplate = (props) => {
    const { edges } = props.data.allMarkdownRemark;
    const { category } = props.pathContext;
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
    pathContext: PropTypes.string.isRequired,
};

export default CategoryTemplate;

export const pageQuery = graphql`
    query CategoryPage {
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt
                    timeToRead
                    frontmatter {
                        title
                        tags
                        category
                        published
                        date(formatString: "DD MMMM, YYYY")
                        cover {
                            id
                            relativePath
                            childImageSharp {
                                resolutions(
                                    width: 400, 
                                    height: 300
                                ) {
                                    src
                                    tracedSVG
                                    width
                                    height
                                    aspectRatio
                                    originalName
                                }
                            }
                        }
                    }         
                }
            }
        }
    }
`;
