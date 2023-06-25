import React from 'react';
import TwoPostCardGrid from './TwoPostCardGrid';
import OnePostCardGrid from './OnePostCardGrid';

const DefaultGrid = ({ children }: ReactNodeProps) => {
  const [title, postCard, miniPostCard] = React.Children.toArray(children);

  return (
    <div className="container row mx-auto contents-margin-top">
      <div className="col-lg-2"></div>
      {miniPostCard ? (
        <TwoPostCardGrid>{children}</TwoPostCardGrid>
      ) : (
        <OnePostCardGrid>{children}</OnePostCardGrid>
      )}
      <div className="col-lg-2"></div>
    </div>
  );
};

export default DefaultGrid;
