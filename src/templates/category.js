import React from 'react';
import Helmet from 'react-helmet';

const TagTemplate = ({ data }) => (
    <div>
            Ello
    </div>
);

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
                        date
                    }
                }
            }
        }
    }
`;
