import React from 'react';
import styled from 'styled-components';

interface TagProps {
  tags: string[];
}

const Tag = styled.span`
  display: inline-block;
  background-color: #22272e;
  margin-left: 7px;
  padding: 2px 10px;
  font-size: 0.75em;
  border: 1px solid #373e47;
  border-radius: 2em;
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
