import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import CategorySection from './Category';
import Content from './Content';
import TagSection from './Tag';
import CreatedAt from './CreatedAt';

interface PostContentProps {
  post: Post;
}

const StyledContentsContainer = styled.div`
  margin: 10px;
  border: 1px solid white;
`;

const StyledLastLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentsContainer = ({ post }: PostContentProps) => {
  return (
    <StyledContentsContainer>
      <CategorySection category={post.category} />
      <Title title={post.title} createdAt={post.createdAt} />
      <Content content={post.content} />
      <StyledLastLine>
        <TagSection tags={post.tags} />
        <CreatedAt createdAt={post.createdAt} />
      </StyledLastLine>
    </StyledContentsContainer>
  );
};

export default ContentsContainer;
