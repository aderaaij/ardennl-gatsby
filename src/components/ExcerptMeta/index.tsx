import React from 'react';
import styled from '@emotion/styled';
import TagList from 'src/components/TagList';
import { colorScheme } from 'src/helpers/styleSettings';
import { MarkdownRemarkFrontmatter } from 'src/types';

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

interface Props {
  className?: string;
  css: any;
  date: MarkdownRemarkFrontmatter['date'];
  tags: MarkdownRemarkFrontmatter['tags'];
}

const ExcerptMeta: React.FC<Props> = ({ className, date, tags }) => (
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

export default ExcerptMeta;
