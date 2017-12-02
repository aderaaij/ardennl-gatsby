import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled, { css } from 'react-emotion';
import mc from 'material-colors';

const BgImage = styled(Img)`    
    width: 100%;
    z-index: -1;
    height: calc(100vh - 60px);
    
    & > img {
        display: block;
        font-family: 'object-fit: cover !important; object-position: 0% 0% !important;'
    }

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        // background: linear-gradient(to right, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%);
    }
`;

const Home = (props) => {
    const { data } = props;
    const { imageSharp } = data;
    return (
        <BgImage sizes={imageSharp.sizes} />
    );
};

Home.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Home;

export const query = graphql`
    query IndexQuery {
        imageSharp(id: { regex: "/home/" }) {
            sizes( 
                traceSVG: {
                    color: "#CFD8DC",
                    blackOnWhite: true,
                }
            ) {
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
    }
`;
