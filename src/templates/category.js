import React from 'react';
import PostsList from '../components/PostsList/PostsList';

const CategoryTemplate = ({ data }) => {
    const { edges } = data.allMarkdownRemark;
    return (
        <PostsList edges={edges} />
    );
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
