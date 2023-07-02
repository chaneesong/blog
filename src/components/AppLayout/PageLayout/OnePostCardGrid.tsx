import React from 'react';
import { StyledTitle } from './styled';

const OnePostCardGrid = ({ children }: ReactNodeProps) => {
  const [title, postCard] = React.Children.toArray(children);

  return (
    <div className="flex-column col-lg-8">
      <StyledTitle>{title}</StyledTitle>
      {postCard}
    </div>
  );
};

export default OnePostCardGrid;
