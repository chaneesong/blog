import React from 'react';

const PosterGrid = ({ children }: ReactNodeProps) => {
  const [content, toc] = React.Children.toArray(children);

  return (
    <>
      <div></div>
      <div>{content}</div>
      <div>{toc}</div>
    </>
  );
};

export default PosterGrid;
