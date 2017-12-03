import React from 'react';
import PropTypes from 'prop-types';

import PostsList from '../components/PostsList/PostsList';

const BlogList = (props) => {
    const { edges } = props.data.allMarkdownRemark;
    console.log(edges);
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
                        category
                        date(formatString: "DD MMMM, YYYY")
                        cover {
                            id
                            relativePath
                            childImageSharp {
                                resize(
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
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;
