import React from 'react';

const DefaultGrid = ({ children }: ReactNodeProps) => {
  return (
    <>
      <div className="container row mx-auto flex-fill contents-padding-top">
        <div className="col-md-2"></div>
        <div className="flex-column col-md-8">{children}</div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default DefaultGrid;
