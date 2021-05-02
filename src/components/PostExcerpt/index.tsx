import React, { useState, useEffect } from 'react';
import Transition from 'react-transition-group/Transition';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Tag from 'src/components/TagLabel';
import ExcerptMeta from 'src/components/ExcerptMeta';
import { colorScheme } from 'src/helpers/styleSettings';
import { preventWidow, goToPage } from 'src/helpers/helpers';
import { MarkdownRemark } from 'src/types';

interface Props {
  context?: string;
  node: MarkdownRemark;
}

interface StyleProps {
  context?: string;
}

const BlogArticle = styled.article`
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

const BlogContent = styled.div`
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

const CatLink = styled(Link)`
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

const TagPos = css`
  float: right;
  background: ${colorScheme.support};
`;

const ExcerptMetaStyle = css`
  color: ${colorScheme.meta};
  a {
    color: ${colorScheme.meta};
  }
`;

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
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={(e) => goToPage(e, fields?.slug)}
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
          {/* {frontmatter?.context !== 'home' && <p>{excerpt}</p>} */}
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
