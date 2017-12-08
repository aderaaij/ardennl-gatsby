import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import PostsList from '../components/PostsList/PostsList';
import SEO from '../components/SEO/SEO';
import config from '../../data/site-config';

const BlogList = (props) => {
    const { edges } = props.data.allMarkdownRemark;
    return (
        <div>
            <SEO />
            <Helmet>
                <title>{`Blog | ${config.siteName}`}</title>
                <link rel="canonical" href={`${config.siteUrl}/about/`} />
            </Helmet>
            <PostsList edges={edges} />
        </div>
    );
};

BlogList.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BlogList;

export const query = graphql`
    query postsQuery {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
                node {
                    id
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
                                    width: 1200,
                                    traceSVG: {
                                        color: "#37474F",
                                        blackOnWhite: false,
                                    }
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
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;
