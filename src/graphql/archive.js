export const archiveQuery = graphql`
    fragment commonArchiveQuery on ArchivePage {
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
                                width: 1200,
                                traceSVG: {
                                    color: "#37474F",
                                    blackOnWhite: false,
                                }
                            ) {
                                tracedSVG
                            }
                        }
                    }
                }
            }
        }
    }
`;
