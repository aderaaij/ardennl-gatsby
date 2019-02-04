import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { colorScheme } from '../helpers/styleSettings';
import { GridBase, ContentLimit } from '../helpers/grid';

const NotFoundWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${colorScheme.text};
  ${GridBase};

  h1 {
    font-size: 2em;
    margin: 0;
    color: ${colorScheme.support};
    @media (min-width: 768px) {
      font-size: 3em;
    }
  }

  p {
    font-size: 1.25em;
    line-height: 1.55;
  }
`;

const NotFoundimage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

const NotFoundContent = styled.div`
  ${ContentLimit};
`;

const NotFoundPage = ({ data }) => {
  const { edges } = data.allFile;
  const bg = edges.find(edge => edge.node.name.includes('arden'));
  return (
    <NotFoundWrap>
      <NotFoundimage src={bg.node.childImageSharp.fluid.tracedSVG} />
      <NotFoundContent>
        <h1>404 - NOT FOUND</h1>
        <p>This page does not exist. Maybe it never has.</p>
      </NotFoundContent>
    </NotFoundWrap>
  );
};

NotFoundPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default NotFoundPage;

export const query = graphql`
  query errorQuery {
    allFile(filter: { name: { eq: "arden" } }) {
      edges {
        node {
          id
          name
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
