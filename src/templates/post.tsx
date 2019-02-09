import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import SEO from '../components/SEO/SEO';
import ArticleHero from '../components/Article/ArticleHero';
import ArticleContent from '../components/Article/ArticleContent';
import ArticleFooter from '../components/Article/ArticleFooter';
import Default from '../components/Layouts/Default';

import { MarkdownRemarkNode } from '../types';
import '../graphql/post';
import './b16-tomorrow-dark.css';

const Article = styled.article`
  padding-bottom: 4em;
`;

interface BlogPostProps {
  data: { markdownRemark: MarkdownRemarkNode };
}
interface State {
  fadeIn: boolean;
}
class BlogPost extends Component<BlogPostProps, State> {
  constructor(props: BlogPostProps) {
    super(props);
    this.state = {
      fadeIn: false
    };
  }

  componentDidMount() {
    this.setState({
      fadeIn: true
    });
  }

  render() {
    const { frontmatter, html } = this.props.data.markdownRemark;
    const { published } = frontmatter;
    return (
      <Default>
        <Article>
          <SEO post={this.props.data.markdownRemark} />
          {!published && (
            <Helmet>
              <meta name="robots" content="noindex" />
            </Helmet>
          )}
          <ArticleHero frontmatter={frontmatter} fadeIn={this.state.fadeIn} />
          <ArticleContent html={html} />
          <ArticleFooter />
        </Article>
      </Default>
    );
  }
}

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...postQuery
    }
  }
`;
