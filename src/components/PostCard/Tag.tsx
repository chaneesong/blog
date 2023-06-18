import React from 'react';
import styled from 'styled-components';

interface TagProps {
  tags: Tag[];
}

const Tag = styled.span`
  margin-right: 5px;
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
