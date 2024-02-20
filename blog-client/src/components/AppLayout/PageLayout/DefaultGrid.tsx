import React from 'react';
import { Center, Side } from './styled';

const DefaultContainer = ({ children }: ReactNodeProps) => {
  return (
    <>
      <Side></Side>
      <Center>{children}</Center>
      <Side></Side>
    </>
  );
};

export default DefaultContainer;
