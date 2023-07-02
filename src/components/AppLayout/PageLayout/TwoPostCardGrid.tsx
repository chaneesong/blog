import React from 'react';
import { StyledTitle } from './styled';

const TwoPostCardGrid = ({ children }: ReactNodeProps) => {
  const [title, postCard, miniPostCard] = React.Children.toArray(children);

  return (
    <>
      <div className="flex-column col-lg-8 d-none d-md-block">
        <StyledTitle>{title}</StyledTitle>
        {postCard}
      </div>
      <div className="flex-column col-lg-8 d-md-none">
        <StyledTitle>{title}</StyledTitle>
        {miniPostCard}
      </div>
    </>
  );
};

export default TwoPostCardGrid;
