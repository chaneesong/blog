import React from 'react';

const OnePostCardGrid = ({ children }: ReactNodeProps) => {
  const [title, postCard] = React.Children.toArray(children);

  return (
    <div className="flex-column col-lg-8">
      {title}
      {postCard}
    </div>
  );
};

export default OnePostCardGrid;
