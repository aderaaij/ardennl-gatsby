import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled, { css } from 'react-emotion';
import mc from 'material-colors';
import SEO from '../components/SEO/SEO';

const GridBase = css`
    width: 100%;
    max-width: 1920px;
    
    @supports(display: grid) {
        @media(min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
        }
    }
`;

const HomeWrap = styled.div`
    ${GridBase};
    height: 100vh;
`;

const HomeContent = styled.div`
    height: 100%;
    display: flex;
    z-index: 501;
    position: relative;
    flex-direction: column;
    justify-content: center;   
    padding: 0 1em; 

    @media(min-width: 768px) {
        @supports(display: grid) {        
            padding: 0;
            grid-column: 3 / 11;
        }
    } 

    > div {
        max-width: 70ch;
    }

    h1,
    h2 {
        color: #fff;
        margin: 0;
        font-weight: 900;
    }

    h1 {
        font-size: 2em;
        margin-bottom: 0;
        color: ${mc.blueGrey[50]};

        @media(min-width: 768px) {
            font-size: 4em;
        }
    }

    h2 {
        font-size: 1.75em;
        color: ${mc.blueGrey[400]};
        @media(min-width: 768px) {
            font-size: 3em;
        }
        
    }

    p {
        color: ${mc.blueGrey[50]};
        line-height: 1.55;
        font-size: 1.25em;
        
        a {
            color: ${mc.cyan.a400};
        }
    }
`;

const HomeBackground = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    object-fit: cover;
    z-index: 1;
`;

const BgImageOuter = css`
    width: 100%;
    height: 100%;
    position: absolute!important;
    top: 0;
    left: 0;
    z-index: 1;

    & div {
        width: 100%;
        height: 100%;
    }
`;

const Home = (props) => {
    const { data } = props;
    const { allImageSharp } = data;
    const background = allImageSharp.edges.find((edge) => {
        if (edge.node.id.includes('bg')) {
            return edge;
        }
        return false;
    });
    return (
        <HomeWrap>
            <HomeBackground src={background.node.sizes.tracedSVG} />
            {/* <Img position="absolute" outerWrapperClassName={BgImageOuter} sizes={background.sizes} /> */}
            <HomeContent>
                <div>
                    <h1>Arden de Raaij</h1>
                    <h2>Front-end Web Developer</h2>
                    <div>
                        <p>
                            Hi, I'm Arden. I'm a web developer based in Lisbon, Portugal. I create awesome websites/web-apps which are enjoyable and fun to use. You can find some of my code on <a href="https://github.com/aderaaij/" target="_blank" rel="noopener noreferrer">Github</a>, see my experiments on <a href="https://codepen.io/aderaaij/" target="_blank" rel="noopener noreferrer">Codepen</a>, and view my CV/experience on <a href="https://www.linkedin.com/in/ardenderaaij/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                        </p>
                        <p>I love photography and traveling, the combination of which you can find on my <a href="http://instagram.com/ardennl" target="_blank noreferrer" title="Arden de Raaij on Instagram" rel="noopener">Instagram</a>. You can follow me on <a href="http://twitter.com/ardennl" target="_blank noreferrer" rel="noopener">Twitter</a> for random shower thoughts.</p> <p>Feel free to <a href="mailto:a.de.raaij@gmail.com" target="_blank noreferrer" title="Send an e-mail to Arden de Raaij" rel="noopener">contact me</a> about all the things web related!</p>
                    </div>
                </div>
            </HomeContent>
            <SEO />
        </HomeWrap>
    );
};

Home.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Home;

export const query = graphql`
    query IndexQuery {        
        allImageSharp(filter: 
            {id: {regex: "/assets/img/"}}
        ) {
            edges {
                node {
                    id
                    sizes(
                        maxWidth: 1600,
                        traceSVG: {
                            color: "#37474F",
                            blackOnWhite: true,
                        }
                    ) {
                        tracedSVG
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
        }
        
        
    }
`;
