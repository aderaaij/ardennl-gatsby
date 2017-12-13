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
                resolutions(
                    width: 1200,
                    traceSVG: {
                        color: "#37474F",
                        blackOnWhite: false,
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
}
`;
