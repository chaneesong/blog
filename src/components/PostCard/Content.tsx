import React from 'react';
import styled from 'styled-components';

interface ContentProps {
  content: string;
}

const PostCardContent = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  width: 100%;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export default function Content({ content }: ContentProps) {
  return <PostCardContent>{content}</PostCardContent>;
}
