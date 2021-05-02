import React, { useState, useEffect } from 'react';
import Transition from 'react-transition-group/Transition';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Tag from '../TagLabel/TagLabel';
import ExcerptMeta from '../ExcerptMeta/ExcerptMeta';
import { colorScheme } from '../../helpers/styleSettings';
import { preventWidow, goToPage } from '../../helpers/helpers';
import { Cover } from '../../types';

interface PostInterface {
  published: boolean;
  path: string;
  tags: [string];
  category: string;
  cover?: Cover | null;
  title: string;
  date: string;
  excerpt: string;
  timeToRead: number;
}

interface PostExcerptProps {
  context?: string;
  postInfo: PostInterface;
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
  entered: { opacity: 1 }
};

const Fade = ({ in: isHovering, image }: { in: boolean; image: string }) => (
  <Transition in={isHovering} timeout={10}>
    {(status) => (
      <img
        css={BGImage}
        alt=""
        src={image}
        style={{
          ...transitionStyles[status]
        }}
      />
    )}
  </Transition>
);

const PostExcerpt: React.SFC<PostExcerptProps> = (props) => {
  const [isHovering, setHovering] = useState(false);
  const { postInfo } = props;
  const {
    tags,
    date,
    path,
    title,
    category,
    excerpt,
    published,
    cover
  } = postInfo;
  useEffect(() => {
    return function cleanup() {
      setHovering(false);
    };
  }, []);

  return (
    <>
      {cover && cover.childImageSharp.gatsbyImageData && (
        <Fade
          in={!!isHovering}
          image={cover.childImageSharp.gatsbyImageData.placeholder.fallback}
        />
      )}
      <BlogArticle
        context={props.context}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={(e) => goToPage(e, path)}
      >
        <BlogContent context={props.context}>
          <>
            {!published && <Tag style={TagPos} tagText="unpublished" />}
            <CatLink to={`/categories/${category}`}>{category}</CatLink>
            <h2>
              <Link to={path}>{preventWidow(title)}</Link>
            </h2>
            {props.context !== 'home' && <p>{excerpt}</p>}
            {(tags || date) && (
              <ExcerptMeta css={ExcerptMetaStyle} tags={tags} date={date} />
            )}
          </>
        </BlogContent>
      </BlogArticle>
    </>
  );
};

export default PostExcerpt;
