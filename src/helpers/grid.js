import styled, { css } from 'react-emotion';

export const GridBase = css`
    width: 100%;

    @supports(display: grid) {
        @media(min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
        }
    }
`;

export const ContentLimit = css`
    @supports(display: grid) {
        
        @media(min-width: 768px) {
            grid-column: 3 / 11;
        }

        @media(min-width: 1280px) {
            grid-column: 4 / 10;
        }
    }
`;
