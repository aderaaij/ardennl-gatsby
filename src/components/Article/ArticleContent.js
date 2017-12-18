import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { GridBase, ContentLimit } from '../../helpers/grid';
import { colorScheme } from '../../helpers/styleSettings';

const ArticleContentStyled = styled.div`
    padding: 0 1em;
    ${GridBase}; 
    @media(min-width: 768px) {
        padding: 0;
    }
`;

const fullMedia = css`
    position: relative;
    width: 100vw;
    left: calc(-50vw + 50%);
    margin: 2rem 0;
    @media(min-width: 768px) {
        padding: 0 2rem;
        margin: 4rem 0;
    }
    @media(min-width: 1024px) {
        left: -${((100 / 12) * 2)}vw;
    }
    @media(min-width: 1200px) {
        width: calc(${100 - ((100 / 12) * 2)}vw - 2rem);
        left: auto;
        padding: 0;
    }
    @media(min-width: 1280px) {
        width: calc(${100 - ((100 / 12) * 3)}vw - 2rem);
    }
`;

const ArticleEntryContent = styled.div`
    color: ${colorScheme.text};
    ${ContentLimit};
    max-width: 65ch;

    a {
        color: ${colorScheme.supportLight};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

    > div > p {
        &:first-of-type {
            &:first-letter {
                float: left;
                margin: 0.07em 0.23em 0 0;
                text-transform:uppercase;
                font-style: normal;
                font-size: 3.2em;
                line-height: 0.7;
                color: ${colorScheme.support};
            }
        }
    }
    p {
        font-size: 1.25em;
        line-height: 1.55;
        margin: 0 0 2em;
        @media(min-width: 768px) {  
            font-size: 1.375em;
        }

        > code {
            background: ${colorScheme.darkLight}
        }
    }
    ul, ol {
        font-size: 1.25em;
        line-height: 1.55;
        margin: 0 0 2em;
        @media(min-width: 768px) {  
            font-size: 1.375em;
        }
    }
    & .gatsby-highlight {
        ${fullMedia};
        code, kbd, samp {
            font-size: 1.25em;
        }
    }
    .gatsby-resp-image-wrapper {
        ${fullMedia};
    }
    .gatsby-resp-iframe-wrapper {
        ${fullMedia};
    }

    .caption {
        position: relative;
        margin-bottom: 4em;

        @media(min-width: 768px) {
            margin-bottom: 5em;
        }

        @media(min-width: 1200px) {
            margin-bottom: 0em;
        }

        .caption__text {         
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translateY(100%);
            padding: 0.5em 0 0;
            margin: 0;
            font-size: 1rem;
            font-style: italic;            
            color: ${colorScheme.meta};

            @media(min-width: 768px) {
                font-size: 1.125rem;
            }

            @media(min-width: 1200px) {
                position: absolute;
                top: 0;
                bottom: auto;
                padding: 1rem;
                width: calc(${(100 / 12) * 2}vw - 1rem);
                transform: translateY(0) translateX(-100%);
                border-left: 1px solid ${colorScheme.support};
                text-align: right;
            }
        }
    }
    & h1,h2,h3,h4,h5,h6 {
        font-weight: 700;
        color: ${colorScheme.support};
        line-height: 1.55;
    }
    h2 {
        font-size: 2em;
        border-bottom: 1px solid ${colorScheme.support};
    }
    h3,h4,h5,h6  {
        font-size: 1.75em;
        margin-bottom: 0.25em;
    }
`;

const ArticleContent = (props) => {
    const { html } = props;
    return (
        <ArticleContentStyled>
            <ArticleEntryContent>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </ArticleEntryContent>
        </ArticleContentStyled>
    );
};

export default ArticleContent;
