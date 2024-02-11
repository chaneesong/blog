import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  title: string;
}

const Title = styled.h2`
  font-size: 23px;
  margin-right: 15px;
`;

const PostCardTitle = ({ title }: TitleProps) => {
  return <Title>{title}</Title>;
};

export default PostCardTitle;
