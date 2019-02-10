import React from 'react';
import styled from '@emotion/styled';
import mc from 'material-colors';
interface StyledTag {
  css: any;
}
const Tag = styled.div<StyledTag>`
  display: inline-block;
  background: ${mc.cyan[700]};
  border-radius: 4px;
  line-height: 1;
  text-transform: uppercase;
  color: #fff;
  padding: 0.25em 0.5em;
  font-family: 'proxima-nova', sans-serif;
  font-weight: 700;
`;

const TagLabel = (props: { style: any; tagText: string }) => (
  <Tag css={props.style}>{props.tagText}</Tag>
);

export default TagLabel;
