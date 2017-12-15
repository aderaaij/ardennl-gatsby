import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';
import { GridBase, ContentLimit } from '../../helpers/grid';
import { colorScheme } from '../../helpers/styleSettings';

const FooterStyled = styled.div`
    width: 100%;
    ${GridBase};
`;

const FooterContent = styled.div`
    ${ContentLimit};
    border-top: 1px solid ${colorScheme.support};
    color: ${colorScheme.text};
    padding-top: 1em;

    p {
        font-size: 1.35em;
        line-height: 1.55;
    }

    a {
        color: ${colorScheme.supportLight};
    }
`;
const ArticleFooter = () => (
    <FooterStyled>
        <FooterContent>
            <p>Did you enjoy this article or would you like to tell me that I'm wrong?
                <a href="https://twitter.com/ardennl" target="_blank" rel="noopener noreferrer">Follow me on Twitter</a> or send me an <a href="mailto:a.de.raaij@gmail.com">e-mail</a>!
            </p>
        </FooterContent>
    </FooterStyled>
);

export default ArticleFooter;
