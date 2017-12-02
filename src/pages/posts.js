import React from 'react';
import PropTypes from 'prop-types';

import PostsList from '../components/PostsList/PostsList';

const BlogList = (props) => {
    const { edges } = props.data.allMarkdownRemark;
    return (
        <PostsList edges={edges} />
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
                        date(formatString: "DD MMMM, YYYY")
                        cover {
                            id
                            relativePath
                            childImageSharp {
                                sizes(
                                    maxWidth: 400,
                                    traceSVG: {
                                        color: "#CFD8DC",
                                        blackOnWhite: true,
                                    }
                                ) {
                                    tracedSVG
                                    aspectRatio
                                    src                                    
                                    srcSet                                    
                                    srcWebp
                                    srcSetWebp
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
