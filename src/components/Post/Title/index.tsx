import React from 'react';
import {
  StyledCreatedAt,
  StyledTag,
  StyledTitle,
  TitleContainer,
} from './styled';

const Title = ({ titleProp }: { titleProp: PostTitleProp }) => {
  return (
    <TitleContainer>
      <StyledTitle>{titleProp.title}</StyledTitle>
      <StyledCreatedAt>{titleProp.createdAt}</StyledCreatedAt>
      <div>
        {titleProp.tags.map((tag: string) => (
          <StyledTag key={tag}>{tag}</StyledTag>
        ))}
      </div>
    </TitleContainer>
  );
};

export default Title;
