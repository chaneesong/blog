import React from 'react';
import styled from 'styled-components';

interface TagProps {
  tags: Tag[];
}

const Tag = styled.span`
  margin-right: 5px;
`;

export default function TagSection({ tags }: TagProps) {
  return (
    <div>
      {tags.map((tag) => (
        <Tag>{tag}</Tag>
      ))}
    </div>
  );
}
