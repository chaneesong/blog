import React from 'react';
import styled from 'styled-components';

type PostCardContainerProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  border: 1px solid;
  margin-bottom: 70px;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 3px 3px 3px gray;
  }
`;

export default function PostCardContainer({
  children,
}: PostCardContainerProps) {
  return <Container>{children}</Container>;
}
