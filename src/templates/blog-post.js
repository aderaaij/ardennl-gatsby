import React from 'react';
import { fontFace, injectGlobal } from 'emotion';
import styled from 'react-emotion';
import mc from 'material-colors';
import 'prismjs/themes/prism-twilight.css';

const ArticleContent = styled.div`
    width: 65ch;
    margin: 0 auto;

    & p {
        font-size: 1.25em;
        line-height: 1.55;
        color: ${mc.grey[800]}
        margin: 0 0 2.5em;

        & a {
            color: ${mc.blueGrey[700]};
        }
    }

    & .gatsby-highlight {
        position: relative;
        width: 72vw;
        left: calc(-36vw + 50%);
        margin: 0 0 2.5em;
    }

    & h1, h2, h3, h4, h5, h6 {
        letter-spacing: -0.5px;
    }
`;

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <ArticleContent>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </ArticleContent>
    );
};

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
