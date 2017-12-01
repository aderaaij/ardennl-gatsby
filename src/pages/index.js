import React from 'react';
import Link from 'gatsby-link';

class Home extends React.Component {
    render() {
        const { edges } = this.props.data.allMarkdownRemark;
        return (
            <div>
                Hello
            </div>
        );
    }
}

export default Home;

export const query = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        cover {
                            id
                            relativePath
                            childImageSharp {
                                resolutions {
                                    src
                                }
                            }
                        }
                        date(formatString: "DD MMMM, YYYY")
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
