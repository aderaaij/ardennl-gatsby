import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'gatsby-link';
import { colorScheme } from 'src/helpers/styleSettings';

interface StyleProps {
  context?: string;
}

export const BlogArticle = styled.article`
  position: relative;
  z-index: 201;
  padding: 2em 1em;
  cursor: pointer;
  border-bottom: 1px solid ${colorScheme.meta};

  @media (min-width: 768px) {
    padding: ${(props: StyleProps) =>
      props.context === 'home' ? '2em 0' : '4em 0'};
    width: 100%;
  }
`;

export const BlogContent = styled.div`
  width: 100%;
  h2 {
    font-size: 2em;
    a {
      color: ${colorScheme.support};
      text-decoration: none;
    }
    @media (min-width: 768px) {
      font-size: ${(props: StyleProps) =>
        props.context === 'home' ? '2em' : '3em'};
      margin: 0;
    }
  }

  & p {
    font-size: 1.125em;
    max-width: 55ch;
    line-height: 1.5;
    color: ${colorScheme.text};
    @media (min-width: 768px) {
      font-size: 1.25em;
    }
  }
`;

export const CatLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  margin: 0 0 1em;
  text-transform: lowercase;
  font-style: italic;
  color: ${colorScheme.meta};
  @media (min-width: 768px) {
    font-size: 1.125em;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const TagPos = css`
  float: right;
  background: ${colorScheme.support};
`;

export const ExcerptMetaStyle = css`
  color: ${colorScheme.meta};
  a {
    color: ${colorScheme.meta};
  }
`;
