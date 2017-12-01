import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';

class Home extends React.Component {
    render() {
        const { edges } = this.props.data.allMarkdownRemark;
        return (
            <div>
                {edges.map(({ node }) => (
                    <div key={node.id}>
                        <Link
                            to={node.fields.slug}
                        >
                            <img src=
                                { node.frontmatter.cover ? node.frontmatter.cover.childImageSharp.resolutions.src : '' }/>
                            <h3>
                                {node.frontmatter.title}{' '}
                                <span>— {node.frontmatter.date}</span>
                            </h3>
                            <p>{node.excerpt}</p>
                        </Link>
                    </div>
                ))}
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
