import React from 'react';

const PosterGrid = ({ children }: ReactNodeProps) => {
  const [title, content, toc] = React.Children.toArray(children);

  return (
    <>
      <div className="container mx-auto flex-fill contents-padding-top">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-8">{title}</div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="flex-column col-md-8">{content}</div>
          <div className="col-md-3 d-none d-md-block">{toc}</div>
        </div>
      </div>
    </>
  );
};

export default PosterGrid;
