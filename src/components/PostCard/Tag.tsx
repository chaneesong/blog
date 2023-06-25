import React from 'react';
import styled from 'styled-components';

interface TagProps {
  tags: Tag[];
}

const Tag = styled.span`
  display: inline-block;
  background-color: #d3d3d3;
  margin-left: 7px;
  padding: 3px;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PostCardTags = ({ tags }: TagProps) => {
  return (
    <div>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
};

export default PostCardTags;
