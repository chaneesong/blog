import React from 'react';
import { Center, Side } from './styled';

const PosterContainer = ({ children }: ReactNodeProps) => {
  const [content, toc] = React.Children.toArray(children);

  return (
    <>
      <Side></Side>
      <Center>{content}</Center>
      <Side>{toc}</Side>
    </>
  );
};

export default PosterContainer;
