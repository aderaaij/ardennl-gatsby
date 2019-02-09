import React from 'react';
import styled from '@emotion/styled';
import { GridBase, ContentLimit } from '../../helpers/grid';
import { colorScheme } from '../../helpers/styleSettings';

const FooterStyled = styled.div`
  padding: 0 1em;
  ${GridBase};
  @media (min-width: 768px) {
    padding: 0;
  }
`;

const FooterContent = styled.div`
  ${ContentLimit};
  border-top: 1px solid ${colorScheme.support};
  color: ${colorScheme.text};
  padding: 1em 0;

  p {
    font-size: 1.25em;
    line-height: 1.55;
    @media (min-width: 768px) {
      font-size: 1.375em;
    }
  }

  div {
    max-width: 65ch;
  }

  a {
    color: ${colorScheme.supportLight};
  }
`;
const ArticleFooter = () => (
  <FooterStyled>
    <FooterContent>
      <div>
        <p>
          Did you enjoy this article or would you like to tell me that I'm
          wrong?{' '}
          <a
            href="https://twitter.com/ardennl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow me on Twitter
          </a>{' '}
          or send me an <a href="mailto:a.de.raaij@gmail.com">e-mail</a>!
        </p>
      </div>
    </FooterContent>
  </FooterStyled>
);

export default ArticleFooter;
