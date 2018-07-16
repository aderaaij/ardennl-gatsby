import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import TagList from '../TagList/TagList';
import { colorScheme } from '../../helpers/styleSettings';

const ExcerptMetaWrap = styled.ul`
  color: ${colorScheme.text};
  font-style: italic;
  font-size: 1.125em;
  list-style: none;
  margin: 0;
  padding: 0;
  text-transform: lowercase;

  @media (min-width: 768px) {
    display: flex;
  }

  & > li {
    line-height: 1.5;

    @media (min-width: 768px) {
      line-height: 1;
    }
    &::after {
      @media (min-width: 768px) {
        content: '|';
        margin: 0 0.5em;
      }
    }
    &:last-child {
      display: flex;
      &::after {
        content: '';
        margin: 0;
      }
    }
  }
  & a {
    text-decoration: none;
    color: ${colorScheme.text};
  }
`;

const ExcerptMeta = ({ className, date, tags }) => (
  <ExcerptMetaWrap className={className}>
    {date && (
      <li>
        <span>{date}</span>
      </li>
    )}
    {tags && (
      <li>
        <TagList tags={tags} />
      </li>
    )}
  </ExcerptMetaWrap>
);

ExcerptMeta.propTypes = {
  date: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired
};

export default ExcerptMeta;
