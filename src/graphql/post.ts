import { graphql } from 'gatsby';

export const defaultPostQuery = graphql`
  fragment postQuery on MarkdownRemark {
    html
    timeToRead
    excerpt
    fields {
      slug
    }
    frontmatter {
      title
      published
      date(formatString: "DD MMMM, YYYY")
      category
      tags
      cover {
        id
        childImageSharp {
          fluid(
            maxWidth: 1200
            traceSVG: { color: "#37474F", blackOnWhite: false }
          ) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  }
`;
