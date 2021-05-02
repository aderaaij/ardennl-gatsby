import React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';
import Tag from 'src/components/TagLabel';
import FadeIn from 'src/components/FadeIn';
import ExcerptMeta from 'src/components/ExcerptMeta';
import { preventWidow } from 'src/helpers/helpers';
import {
  ArticleHeroStyled,
  articleHeroSmall,
  TagPos,
  ArticleHeader,
  ExcerptMetaStyle,
  imgStyle,
  CatLink,
} from './styles';
import { MarkdownRemarkFrontmatter } from 'src/types';

interface Props {
  frontmatter: MarkdownRemarkFrontmatter;
  fadeIn: any;
}

const ArticleHero: React.FC<Props> = ({ frontmatter, fadeIn }) => {
  const { title, category, tags, date, published, cover } = frontmatter;
  return (
    <ArticleHeroStyled css={cover ? '' : articleHeroSmall}>
      {cover?.childImageSharp?.fluid && (
        <GatsbyImage
          css={imgStyle}
          alt=""
          image={cover.childImageSharp.gatsbyImageData}
        />
      )}
      <ArticleHeader>
        <FadeIn in={fadeIn}>
          {!published && <Tag style={TagPos} tagText="unpublished" />}
          <CatLink to={`/categories/${category}`}>{category}</CatLink>
          <h1>{title && preventWidow(title)}</h1>
          {(tags || date) && (
            <ExcerptMeta css={ExcerptMetaStyle} tags={tags} date={date} />
          )}
        </FadeIn>
      </ArticleHeader>
    </ArticleHeroStyled>
  );
};

export default ArticleHero;
