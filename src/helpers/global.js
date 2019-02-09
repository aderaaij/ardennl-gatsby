import { css } from '@emotion/core';
import { fontScheme, colorScheme } from './styleSettings';

export const globalCss = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${fontScheme.text};
    background: ${colorScheme.dark};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fontScheme.headings};
    font-weight: 900;
    letter-spacing: -0.5px;
    color: ${colorScheme.text};
  }

  a {
    color: ${colorScheme.support};
  }

  p {
    line-height: 1.55;
  }
`;
