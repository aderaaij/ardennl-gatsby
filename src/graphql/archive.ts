import { graphql } from 'gatsby';

export const archiveQuery = graphql`
  fragment defaultArchiveQuery on MarkdownRemark {
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
          gatsbyImageData(
            placeholder: TRACED_SVG
            tracedSVGOptions: { color: "#37474F", blackOnWhite: false }
          )
        }
      }
    }
  }
`;
