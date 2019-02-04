import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import SEO from '../components/SEO/SEO';
import TemplateWrapper from '../components/Layouts/Default';
import { colorScheme, fontScheme } from '../helpers/styleSettings';
import { GridBase, ContentLimit } from '../helpers/grid';

const globalCss = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${fontScheme.text};
    background: ${colorScheme.dark};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fontScheme.headings};
    font-weight: 900;
    letter-spacing: -0.5px;
    color: ${colorScheme.text};
  }

  a {
    color: ${colorScheme.support};
  }

  p {
    line-height: 1.55;
  }
`;

const HomeWrap = styled.div`
  ${GridBase};
  padding-top: 60px;
`;

const HomeContent = styled.div`
  z-index: 501;
  position: relative;
  height: 100%;
  min-height: calc(100vh - 60px);
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colorScheme.text};
  ${ContentLimit};

  > div {
    max-width: 70ch;
  }

  h1 {
    color: ${colorScheme.support};
    font-size: 2em;
    font-weight: 900;
    margin: 0;
    @media (min-width: 768px) {
      font-size: 4em;
    }
  }

  h2 {
    font-size: 1.75em;
    margin: 0;
    @media (min-width: 768px) {
      font-size: 3em;
    }
  }

  p {
    line-height: 1.55;
    font-size: 1.125em;
    @media (min-width: 768px) {
      font-size: 1.25em;
    }
  }

  a {
    text-decoration: none;
    color: ${colorScheme.supportLight};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const HomeBackground = styled.img`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 1;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const HomeImg = css`
  width: 100%;
  height: 100%;
  position: fixed !important;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 1;

  img:nth-child(2) {
    opacity: 1 !important;
  }

  img:last-child {
    opacity: 0 !important;
  }
`;

const Home = props => {
  const { data } = props;
  const { edges } = data.allFile;
  const bg = edges.find(edge => edge.node.name.includes('bg'));
  return (
    <TemplateWrapper>
      <>
        <Global style={globalCss} />
        <HomeWrap>
          <HomeBackground src={bg.node.childImageSharp.fluid.tracedSVG} />
          {/* <Img className={HomeImg} outerWrapperClassName={HomeImg} src={background.node.tracedSVG} /> */}
          <HomeContent>
            <div>
              <h1>Arden de Raaij</h1>
              <h2>Front-end Web Developer</h2>
              <div>
                <p>
                  Hi, I'm Arden. I'm a web developer based in Lisbon, Portugal. I create awesome
                  websites/web-apps which are enjoyable and fun to use. You can find some of my code
                  on{' '}
                  <a href="https://github.com/aderaaij/" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                  , see my experiments on{' '}
                  <a href="https://codepen.io/aderaaij/" target="_blank" rel="noopener noreferrer">
                    Codepen
                  </a>
                  , and view my CV/experience on{' '}
                  <a
                    href="https://www.linkedin.com/in/ardenderaaij/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  .
                </p>
                <p>
                  I love photography and traveling, the combination of which you can find on my{' '}
                  <a
                    href="http://instagram.com/ardennl"
                    target="_blank noreferrer"
                    title="Arden de Raaij on Instagram"
                    rel="noopener"
                  >
                    Instagram
                  </a>
                  . You can follow me on{' '}
                  <a href="http://twitter.com/ardennl" target="_blank noreferrer" rel="noopener">
                    Twitter
                  </a>{' '}
                  for random shower thoughts.
                </p>{' '}
                <p>
                  Feel free to{' '}
                  <a
                    href="mailto:a.de.raaij@gmail.com"
                    target="_blank noreferrer"
                    title="Send an e-mail to Arden de Raaij"
                    rel="noopener"
                  >
                    contact me
                  </a>{' '}
                  about all the things web related!
                </p>
              </div>
            </div>
          </HomeContent>
          <SEO />
        </HomeWrap>
      </>
    </TemplateWrapper>
  );
};

Home.propTypes = {
  data: PropTypes.object.isRequired
};

export default Home;

export const query = graphql`
  query IndexQuery {
    allFile(filter: { name: { eq: "bg" } }) {
      edges {
        node {
          id
          name
          sourceInstanceName
          childImageSharp {
            id
            fluid(traceSVG: { blackOnWhite: false, color: "#37474F" }) {
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
            }
          }
        }
      }
    }
  }
`;
