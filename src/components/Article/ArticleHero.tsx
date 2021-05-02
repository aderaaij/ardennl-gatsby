import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Transition from 'react-transition-group/Transition';
import { GatsbyImage } from 'gatsby-plugin-image';

import Tag from '../TagLabel/TagLabel';
import ExcerptMeta from '../ExcerptMeta/ExcerptMeta';
import { GridBase, ContentLimit } from '../../helpers/grid';
import { preventWidow } from '../../helpers/helpers';
import { colorScheme } from '../../helpers/styleSettings';
import { Frontmatter } from '../../types';

const ArticleHeroStyled = styled.figure`
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

const ArticleHeader = styled.header`
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

const articleHeroSmall = css`
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

const CatLink = styled(Link)`
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

const imgStyle = css`
  width: 100%;
  height: 100%;
  position: absolute !important;
`;

const ExcerptMetaStyle = css`
  color: ${colorScheme.text};
  a {
    color: ${colorScheme.text};
  }
`;

const TagPos = css`
  float: right;
  background: ${colorScheme.support};
`;

const duration = 300;

const FadeWrapper = styled.div`
  transition: all ${duration}ms ease-in-out;
  opacity: 0;
`;

interface TransitionProps {
  opacity: number;
  transform: string;
}

interface TransitionI {
  entering: TransitionProps;
  entered: TransitionProps;
  [key: string]: TransitionProps;
}

const transitionStyles: TransitionI = {
  entering: { opacity: 0, transform: 'translateY(50%)' },
  entered: { opacity: 1, transform: 'translateY(0%)' }
};

const Fade = ({ children, in: inProp }: { children: any; in: boolean }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <FadeWrapper style={{ ...transitionStyles[state] }}>
        {children}
      </FadeWrapper>
    )}
  </Transition>
);

interface ArticleHeroProps {
  frontmatter: Frontmatter;
  fadeIn: any;
}

const ArticleHero = ({ frontmatter, fadeIn }: ArticleHeroProps) => {
  const { title, category, tags, date, published, cover } = frontmatter;
  return (
    <ArticleHeroStyled css={cover ? '' : articleHeroSmall}>
      {cover && cover.childImageSharp.fluid && (
        <GatsbyImage
          css={imgStyle}
          alt=""
          image={cover.childImageSharp.gatsbyImageData}
        />
      )}
      <ArticleHeader>
        <Fade in={fadeIn}>
          {!published && <Tag style={TagPos} tagText="unpublished" />}
          <CatLink to={`/categories/${category}`}>{category}</CatLink>
          <h1>{preventWidow(title)}</h1>
          {(tags || date) && (
            <ExcerptMeta css={ExcerptMetaStyle} tags={tags} date={date} />
          )}
        </Fade>
      </ArticleHeader>
    </ArticleHeroStyled>
  );
};

export default ArticleHero;
