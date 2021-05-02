import './b16-tomorrow-dark.css';

import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';

import ArticleContent from '../components/ArticleContent/';
import ArticleFooter from '../components/ArticleFooter/';
import ArticleHero from '../components/ArticleHero/';
import Default from '../components/Layouts';
import SEO from '../components/SEO/SEO';
import { MarkdownRemark } from '../types';

const Article = styled.article`
  padding-bottom: 4em;
`;

interface Props {
  data: { markdownRemark: MarkdownRemark };
}

const Post: React.FC<Props> = ({ data }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const { frontmatter, html } = data.markdownRemark;

  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <Default>
      <Article>
        <SEO post={data.markdownRemark} />
        {!frontmatter?.published && (
          <Helmet>
            <meta name="robots" content="noindex" />
          </Helmet>
        )}
        <ArticleHero frontmatter={frontmatter} fadeIn={fadeIn} />
        <ArticleContent html={html} />
        <ArticleFooter />
      </Article>
    </Default>
  );
};

export default Post;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...postQuery
    }
  }
`;
