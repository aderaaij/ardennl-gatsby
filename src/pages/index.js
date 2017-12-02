import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled, { css } from 'react-emotion';

const BgImage = styled(Img)`    
    width: 100%;
    z-index: -1;
    height: calc(100vh - 60px);
    
    & > img {
        display: block;
        font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' // needed for IE9+ polyfill
    }

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        background: linear-gradient(to right, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%);
    }
`;


const Home = (props) => {
    const { data } = props;
    const { imageSharp } = data;
    console.log(imageSharp);
    return (
        <div>
            <BgImage sizes={imageSharp.sizes} />
        </div>
    );
};

export default Home;

export const query = graphql`
    query IndexQuery {
        imageSharp(id: { regex: "/home/" }) {
            sizes {
                # base64
                tracedSVG
                # aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
            }
        }
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
