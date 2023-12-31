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
  border: 1px solid #d3d3d3;
  margin-bottom: 30px;
  transition: box-shadow 0.1s ease-in-out;

  &:hover {
    box-shadow: 3px 3px 3px #d3d3d3;
  }
`;

const PostCardContainer = ({ children }: PostCardContainerProps) => {
  return <Container>{children}</Container>;
};

export default PostCardContainer;
