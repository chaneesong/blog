import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import CategorySection from './Category';
import Content from './Content';
import TagSection from './Tag';

interface PostContentProps {
  post: Post;
}

const StyledContentsContainer = styled.div`
  margin: 10px;
  border: 1px solid white;
`;

const ContentsContainer = ({ post }: PostContentProps) => {
  return (
    <StyledContentsContainer>
      <Title title={post.title} createdAt={post.createdAt} />
      <CategorySection category={post.category} />
      <Content content={post.content} />
      <TagSection tags={post.tags} />
    </StyledContentsContainer>
  );
};

export default ContentsContainer;
