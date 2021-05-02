import React, { useState, useEffect } from 'react';
import Transition from 'react-transition-group/Transition';
import Link from 'gatsby-link';
import { css } from '@emotion/react';

import Tag from 'src/components/TagLabel';
import ExcerptMeta from 'src/components/ExcerptMeta';
import { preventWidow, goToPage } from 'src/helpers/helpers';
import {
  BlogArticle,
  BlogContent,
  TagPos,
  CatLink,
  ExcerptMetaStyle,
} from './styles';
import { MarkdownRemark } from 'src/types';

interface Props {
  context?: string;
  node: MarkdownRemark;
}

const duration = 400;

const BGImage = css`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60vh;
  object-fit: cover;
  pointer-events: none;
  transition: ${duration}ms ease-out;
  opacity: 0;

  @media (min-width: 1024px) {
    height: 100vh;
  }
`;

interface AnimationI {
  opacity: number;
}

interface TransitionsI {
  entering: AnimationI;
  entered: AnimationI;
  [key: string]: AnimationI;
}

const transitionStyles: TransitionsI = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const Fade = ({ in: isHovering, image }: { in: boolean; image: string }) => (
  <Transition in={isHovering} timeout={10}>
    {(status) => (
      <img
        css={BGImage}
        alt=""
        src={image}
        style={{
          ...transitionStyles[status],
        }}
      />
    )}
  </Transition>
);

const PostExcerpt: React.FC<Props> = ({ node }) => {
  const [isHovering, setHovering] = useState(false);
  const { excerpt, fields, frontmatter, timeToRead } = node;
  useEffect(() => {
    return function cleanup() {
      setHovering(false);
    };
  }, []);

  return (
    <>
      {frontmatter?.cover && (
        <Fade
          in={!!isHovering}
          image={
            frontmatter.cover.childImageSharp?.gatsbyImageData.placeholder
              .fallback
          }
        />
      )}
      <BlogArticle
        // context={frontmatter.published}
        onMouseEnter={(): void => setHovering(true)}
        onMouseLeave={(): void => setHovering(false)}
        onClick={(e): void => goToPage(e, fields?.slug)}
      >
        <BlogContent>
          {!frontmatter?.published && (
            <Tag style={TagPos} tagText="unpublished" />
          )}
          <CatLink to={`/categories/${frontmatter?.category}`}>
            {frontmatter?.category}
          </CatLink>
          <h2>
            {fields?.slug && (
              <Link to={fields?.slug}>
                {frontmatter?.title && preventWidow(frontmatter.title)}
              </Link>
            )}
          </h2>
          <p>{excerpt}</p>
          {(frontmatter?.tags || frontmatter?.date) && (
            <ExcerptMeta
              css={ExcerptMetaStyle}
              tags={frontmatter.tags}
              date={frontmatter.date}
            />
          )}
        </BlogContent>
      </BlogArticle>
    </>
  );
};

export default PostExcerpt;
