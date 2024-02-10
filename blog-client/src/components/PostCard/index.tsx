import Link from 'next/link';
import React from 'react';

import PostCardContainer from './Container';
import ContentsContainer from './ContentContainer';

const PostCard = ({ post }: PostCardProps) => {
  return (
    <PostCardContainer>
      <ContentsContainer post={post} />
    </PostCardContainer>
  );
};

export default PostCard;
