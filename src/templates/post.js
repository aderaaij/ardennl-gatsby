import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import SEO from '../components/SEO/SEO';
import ArticleHero from '../components/Article/ArticleHero';
import ArticleContent from '../components/Article/ArticleContent';
import ArticleFooter from '../components/Article/ArticleFooter';
import TemplateWrapper from '../components/Layouts/Default';
import '../graphql/post';
import './b16-tomorrow-dark.css';

const Article = styled.article`
  padding-bottom: 4em;
`;
class BlogPost extends Component {
  constructor(props) {
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
      <TemplateWrapper>
        <Article>
          <SEO type="post" post={this.props.data.markdownRemark} />
          {!published && (
            <Helmet>
              <meta name="robots" content="noindex" />
            </Helmet>
          )}
          <ArticleHero frontmatter={frontmatter} fadeIn={this.state.fadeIn} />
          <ArticleContent html={html} />
          <ArticleFooter />
        </Article>
      </TemplateWrapper>
    );
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
};

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...postQuery
    }
  }
`;
