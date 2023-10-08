import React from 'react';
import { StyledCreatedAt, StyledTitle, TitleContainer } from './styled';
import PostCardTags from '@/components/PostCard/Tag';

const Title = ({ titleProp }: { titleProp: PostTitleProp }) => {
  const { title, createdAt, tags } = titleProp;

  return (
    <TitleContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledCreatedAt>{createdAt}</StyledCreatedAt>
      <PostCardTags tags={tags.map((tag) => tag.keyword)} />
      <hr />
    </TitleContainer>
  );
};

export default Title;
