import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import * as React from 'react';
import Default from 'src/components/Layouts';
import SEO from 'src/components/SEO/SEO';
import { ContentLimit, GridBase } from 'src/helpers/grid';
import { colorScheme } from 'src/helpers/styleSettings';
import { FileConnection, MarkdownRemarkConnection, FileEdge } from 'src/types';

interface Props {
  data: {
    allFile: FileConnection;
    allMarkdownRemark: MarkdownRemarkConnection;
  };
}

const Home: React.FC<Props> = ({ data }) => {
  const { allFile } = data;
  const bg: FileEdge | undefined = allFile.edges.find((edge) =>
    edge.node.name ? edge.node.name.includes('bg') : undefined
  );
  return (
    <Default>
      <HomeWrap>
        {bg?.node && (
          <HomeBackground
            src={bg.node.childImageSharp?.gatsbyImageData.placeholder.fallback}
          />
        )}
        {/* <Img className={HomeImg} outerWrapperClassName={HomeImg} src={background.node.tracedSVG} /> */}
        <HomeContent>
          <h1>Arden de Raaij</h1>
          <h2>Front-end Web Developer</h2>
          <p>
            Hi, I&#39;m Arden. I&#39;m a web developer based in Lisbon,
            Portugal. I create awesome websites/web-apps which are enjoyable and
            fun to use. You can find some of my code on{' '}
            <a
              href="https://github.com/aderaaij/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            , see my experiments on{' '}
            <a
              href="https://codepen.io/aderaaij/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            I love photography and traveling, the combination of which you can
            find on my{' '}
            <a
              href="http://instagram.com/ardennl"
              target="_blank noreferrer"
              title="Arden de Raaij on Instagram"
              rel="noopener"
            >
              Instagram
            </a>
            . You can follow me on{' '}
            <a
              href="http://twitter.com/ardennl"
              target="_blank noreferrer"
              rel="noopener"
            >
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
        </HomeContent>
        <SEO />
      </HomeWrap>
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
  padding: 2em 1em;
  border-bottom: 1px solid ${colorScheme.meta};
  @media (min-width: 768px) {
    padding: 0 0 2em 0;
  }
`;

const HomeContent = styled.div`
  z-index: 501;
  position: relative;
  height: 100%;
  min-height: calc(100vh - 60px);
  /* padding-bottom: 4em; */
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
  width: 100%;
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
  query Index_2_Query($category: String) {
    allFile(filter: { name: { eq: "bg" } }) {
      edges {
        node {
          id
          name
          sourceInstanceName
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              tracedSVGOptions: { color: "#37474F", blackOnWhite: false }
            )
            id
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
