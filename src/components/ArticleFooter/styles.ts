import styled from '@emotion/styled';
import { GridBase, ContentLimit } from 'src/helpers/grid';
import { colorScheme } from 'src/helpers/styleSettings';

export const FooterStyled = styled.div`
  padding: 0 1em;
  ${GridBase};
  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const FooterContent = styled.div`
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
