import React from 'react';
import styled from 'styled-components';

type PostCardContainerProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  border: 1px solid #373e47;
  border-left: none;
  border-right: none;
`;

const PostCardContainer = ({ children }: PostCardContainerProps) => {
  return <Container>{children}</Container>;
};

export default PostCardContainer;
