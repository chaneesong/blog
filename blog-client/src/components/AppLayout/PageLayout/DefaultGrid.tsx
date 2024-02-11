import React from 'react';

const DefaultGrid = ({ children }: ReactNodeProps) => {
  return (
    <>
      <div></div>
      <div>{children}</div>
      <div></div>
    </>
  );
};

export default DefaultGrid;
