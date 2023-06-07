import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import CategorySection from './Category';
import Content from './Content';
import TagSection from './Tag';

interface PostContentProps {
  post: PostCard;
}

const ContentsContainer = styled.div`
  margin: 10px;
  border: 1px solid white;
`;

export default function ContentContainer({ post }: PostContentProps) {
  return (
    <ContentsContainer>
      <Title title={post.title} createdAt={post.createdAt} />
      <CategorySection category={post.category} />
      <Content content={post.content} />
      <TagSection tags={post.tags} />
    </ContentsContainer>
  );
}
