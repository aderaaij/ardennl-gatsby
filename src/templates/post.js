import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import SEO from '../components/SEO/SEO';
import ArticleHero from '../components/Article/ArticleHero';
import ArticleContent from '../components/Article/ArticleContent';
import '../graphql/post';
import './b16-tomorrow-dark.css';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeIn: false,
        };
    }

    componentDidMount() {
        this.setState({
            fadeIn: true,
        });
    }

    render() {
        const { frontmatter, html } = this.props.data.markdownRemark;
        const { published } = frontmatter;
        return (
            <article>
                <SEO type="post" post={this.props.data.markdownRemark} />
                {!published &&
                <Helmet>
                    <meta name="robots" content="noindex" />
                </Helmet>
                }
                <ArticleHero frontmatter={frontmatter} fadeIn={this.state.fadeIn} />
                <ArticleContent html={html} />
            </article>
        );
    }
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BlogPost;

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            ...postQuery
        }
    }
`;
