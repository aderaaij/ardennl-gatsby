import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'gatsby-link';
import { colorScheme } from 'src/helpers/styleSettings';
import { GridBase, ContentLimit } from 'src/helpers/grid';

export const ArticleHeroStyled = styled.figure`
  width: 100%;
  height: 60vh;
  margin: 0 0 2em;
  overflow: hidden;
  position: relative;
  display: flex;
  ${GridBase};
  &::before {
    content: '';
    z-index: 101;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0,
      rgba(0, 0, 0, 0.9) 100%
    );
  }
  @media (min-width: 768px) {
    margin: 0 auto 4em;
  }
  @media (min-width: 1024px) {
    width: 100%;
    margin: 0 0 4em;
    height: 100vh;
  }
`;

export const ArticleHeader = styled.header`
  margin: auto 0 2em;
  padding: 0 1em;
  z-index: 201;
  position: relative;
  width: 100%;
  ${ContentLimit};
  @media (min-width: 768px) {
    margin: auto 0 4em;
    padding: 0;
  }
  & h1 {
    margin: 0 0 0.25em;
    font-size: 2em;
    letter-spacing: -0.5px;
    color: ${colorScheme.support};
    @media (min-width: 768px) {
      font-size: 2.5em;
    }
    @media (min-width: 1024px) {
      font-size: 3.5em;
    }
  }
`;

export const articleHeroSmall = css`
  height: auto;
  padding-top: calc(2em + 44px);
  margin-bottom: 0;
  &::before {
    display: none;
  }
  @media (min-width: 768px) {
    padding-top: calc(4em + 60px);
    margin-bottom: 0;
  }
  @media (min-width: 1024px) {
    height: auto;
  }
`;

export const CatLink = styled(Link)`
  margin: 0 0 1em;
  font-size: 1.125em;
  font-style: italic;
  display: inline-block;
  text-decoration: none;
  color: ${colorScheme.text};
  &:hover {
    text-decoration: underline;
  }
`;

export const imgStyle = css`
  width: 100%;
  height: 100%;
  position: absolute !important;
`;

export const ExcerptMetaStyle = css`
  color: ${colorScheme.text};
  a {
    color: ${colorScheme.text};
  }
`;

export const TagPos = css`
  float: right;
  background: ${colorScheme.support};
`;
