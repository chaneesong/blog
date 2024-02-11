import React from 'react';

const PosterGrid = ({ children }: ReactNodeProps) => {
  const [title, content, toc] = React.Children.toArray(children);

  return (
    <>
      <div>{title}</div>
      <div>{content}</div>
      <div>{toc}</div>
    </>
  );
};

export default PosterGrid;
