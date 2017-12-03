import React from 'react';
import PostsList from '../components/PostsList/PostsList';

const TagTemplate = ({ data }) => {
    const { edges } = data.allMarkdownRemark;
    return (
        <PostsList edges={edges} />
    );
};

export default TagTemplate;

export const pageQuery = graphql`
    query TagPage($tag: String) {
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
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
                }
            }
        }
    }
`;
