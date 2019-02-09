import * as React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { FaLinkedin, FaTwitter, FaEnvelope, FaDev } from 'react-icons/fa';

import { colorScheme } from '../helpers/styleSettings';
import { GridBase, HomeContentLimit } from '../helpers/grid';
import { AllMarkdownRemark, AllFile } from '../types';

import SEO from '../components/SEO/SEO';
import Default from '../components/Layouts/Default';
import PostList from '../components/PostsList/PostsList';

export interface HomeProps {
  data: {
    allFile: AllFile;
    allMarkdownRemark: AllMarkdownRemark;
  };
}

const Home = (props: HomeProps) => {
  const { allFile, allMarkdownRemark } = props.data;
  const bg = allFile.edges.find(edge =>
    edge.node.name ? edge.node.name.includes('bg') : false
  );
  return (
    <Default>
      <>
        <HomeWrap>
          {bg && bg.node.childImageSharp && bg.node.childImageSharp.fluid && (
            <HomeBackground src={bg.node.childImageSharp.fluid.tracedSVG} />
          )}
          {/* <Img
            className={HomeImg}
            outerWrapperClassName={HomeImg}
            src={background.node.tracedSVG}
          /> */}
          <HomeContent>
            <HomeHeader>
              <h1>Arden de Raaij</h1>
              <h2>Front-end Web Developer</h2>
              <SocialList>
                <li>
                  <a href="mailto:mail@arden.nl">
                    <FaEnvelope />
                  </a>
                </li>
                <li>
                  <a href="http://twitter.com/ardennl">
                    <FaTwitter />
                  </a>

                  {/* <span>Front-end developer @ Mercedes-Benz.io</span> */}
                </li>
                <li>
                  <a href="http://dev.to/ardennl">
                    <FaDev />
                  </a>
                </li>
                <li>
                  <FaLinkedin />
                </li>
              </SocialList>
            </HomeHeader>
            <PostList context="home" edges={allMarkdownRemark.edges} />
          </HomeContent>
          <SEO />
        </HomeWrap>
      </>
    </Default>
  );
};

export default Home;

const HomeWrap = styled.div`
  ${GridBase};
  padding-top: 60px;
`;

const SocialList = styled.ul`
  list-style: none;
  margin: 1.5em 0 0;
  padding: 0 0.5em;
  display: flex;
  justify-content: space-between;
`;

const HomeHeader = styled.div`
  margin-bottom: 4em;
  padding-bottom: 2em;
  border-bottom: 1px solid ${colorScheme.meta};
`;

const HomeContent = styled.div`
  z-index: 501;
  position: relative;
  height: 100%;
  min-height: calc(100vh - 60px);
  padding-bottom: 4em;
  /* padding: 0 1em; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  color: ${colorScheme.text};
  ${HomeContentLimit};

  > div {
    max-width: 70ch;
  }

  h1 {
    color: ${colorScheme.support};
    font-size: 2em;
    font-weight: 900;
    margin: 0;
    @media (min-width: 768px) {
      font-size: 3em;
    }
  }

  h2 {
    font-size: 1.75em;
    margin: 0;
    @media (min-width: 768px) {
      font-size: 2.25em;
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
  width: 50%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: right;
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
export const query = graphql`
  query IndexQuery($category: String) {
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
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          ...defaultArchiveQuery
        }
      }
    }
  }
`;
