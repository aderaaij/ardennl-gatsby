import React from 'react';
import styled from '@emotion/styled';
import { GridBase, ContentLimit } from '../../helpers/grid';

const BlogSection = styled.section`
  min-height: 100%;
  padding: 25vh 0;
  ${GridBase};
`;

const BlogWrap = styled.div`
  ${ContentLimit};
`;

const PostsListsWrap = props => (
  <BlogSection>
    <BlogWrap>{props.children}</BlogWrap>
  </BlogSection>
);

export default PostsListsWrap;
