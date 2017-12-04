import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled, { css } from 'react-emotion';
import mc from 'material-colors';

const BgImage = styled(Img)`    
    width: 100%;
    z-index: -1;
    height: 100vh;
    
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
        // background: linear-gradient(to right, rgba(0,0,0,0.5) 25%,rgba(0,0,0,0) 100%);
    }
`;

const HomeContent = styled.div`
    z-index: 101;
    position: absolute;
    top: 0;
    left: 0;
    width: 60vw;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 2em;
    background: rgba(255, 255, 255, 0.9);

    h1, h2 {
        line-height: 1;
    }

    & h1 {
        font-size: 3.5em;
        color: ${mc.blueGrey[900]};
        margin: 0 0 0.125em;
    }

    & h2 {
        margin: 0;
        font-size: 3em;
        font-weight: 900;
        letter-spacing: 0;
        color: ${mc.blueGrey[700]};
    }

    p {
        font-size: 1.25em;
        line-height: 1.55;
        max-width: 55ch;
        color: ${mc.blueGrey[900]};

        a {
            color: ${mc.cyan[700]};
        }
    }
`;

const Home = (props) => {
    const { data } = props;
    const { imageSharp } = data;
    return (
        <div>
            <BgImage sizes={imageSharp.sizes} />
            <HomeContent>
                <div>
                    <h1>Arden de Raaij</h1>
                    <h2>Front-end/Web Developer</h2>
                    <div>
                        <p>I create awesome websites/web-apps which are enjoyable and fun to use. You can find some of my code on <a href="https://github.com/aderaaij/" target="_blank" rel="noopener">Github</a>, see my experiments on <a href="https://codepen.io/aderaaij/" target="_blank" rel="noopener">Codepen</a>, and view my CV/experience on <a href="https&colon;//www.linkedin.com/in/ardenderaaij/" target="_blank" rel="noopener">LinkedIn</a>.</p>
                        <p>I love photography and traveling, the combination of which you can find on my <a href="http://instagram.com/ardennl" target="_blank" title="Arden de Raaij on Instagram" rel="noopener">Instagram</a>. You can follow me on <a href="http://twitter.com/ardennl" target="_blank" rel="noopener">Twitter</a> for random shower thoughts.</p> <p>Feel free to <a href="mailto:a.de.raaij@gmail.com" target="_blank" title="Send an e-mail to Arden de Raaij" rel="noopener">contact me</a> about all the things web related!</p>
                    </div>
                </div>
            </HomeContent>
        </div>
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
