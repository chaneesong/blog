import React from 'react';

const TwoPostCardGrid = ({ children }: ReactNodeProps) => {
  const [title, postCard, miniPostCard] = React.Children.toArray(children);

  return (
    <>
      <div className="flex-column col-lg-8 d-none d-md-block">
        {title}
        {postCard}
      </div>
      <div className="flex-column col-lg-8 d-md-none">
        {title}
        {miniPostCard}
      </div>
    </>
  );
};

export default TwoPostCardGrid;
