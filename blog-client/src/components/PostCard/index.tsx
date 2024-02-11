import React from 'react';

import PostCardContainer from './Container';
import ContentsContainer from './ContentContainer';

const PostCard = ({ posts }: PostCardProps) => {
  return (
    <>
      {posts.map((post) => (
        <PostCardContainer key={post.id}>
          <ContentsContainer post={post} />
        </PostCardContainer>
      ))}
    </>
  );
};

export default PostCard;
