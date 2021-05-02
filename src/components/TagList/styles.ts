import styled from '@emotion/styled';
export const TagListWrap = styled.div`
  display: flex;

  span {
    margin-right: 1ch;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  li {
    &::after {
      content: ',';
      margin-right: 1ch;
    }

    &:last-child {
      &::after {
        content: '';
        margin: 0;
      }
    }
  }
`;
