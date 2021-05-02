import { colorScheme, fontScheme } from 'src/helpers/styleSettings';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'gatsby-link';

export const Header = styled.header`
  width: 100%;
  height: 44px;
  z-index: 901;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 1em;
  transition: transform 0.4s ease;
  transform: translateY(0);

  @media (min-width: 768px) {
    padding: 0 2em;
    height: 60px;
  }
`;

export const headroomStyles = css`
  width: 100vw;

  .headroom {
    transition: all 0.3s ease;
    background: transparent;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to top,
        transparent 0,
        rgba(0, 0, 0, 0.5) 100%
      );
      z-index: -1;
      transition: all 0.3s ease;
      opacity: 0;
    }
    &--unpinned {
      transform: translateY(-100%);
      background: transparent;
      &::before {
        opacity: 0;
      }
    }

    &--scrolled {
      &.headroom--pinned {
        background: ${colorScheme.support};
        &::before {
          opacity: 0;
        }
      }

      a {
        color: ${colorScheme.text};
      }
    }
  }
`;

export const SiteNav = styled.nav`
  font-family: ${fontScheme.headings};
  font-weight: 700;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  font-size: 1.125em;
  margin-left: auto;

  & ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export const Logo = styled(Link)`
  width: 80px;
  display: block;
  height: auto;
  fill: ${colorScheme.logo};

  @media (min-width: 768px) {
    width: 120px;
  }

  & svg {
    display: block;
    width: 100%;
  }
`;

export const navItem = css`
  text-decoration: none;
  color: ${colorScheme.text};
  transition: color 0.3s ease-out;

  &:hover {
    color: ${colorScheme.support};
  }
`;
