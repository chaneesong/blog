import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import PostCardContainer from './Container';
import ContentsContainer from './ContentContainer';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
  max-height: 100%;
  min-height: 170px;
  min-width: 220px;
  max-width: 300px;
`;

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link href={`/posts/${post.id}`} key={post.id} passHref>
      <PostCardContainer>
        <ContentsContainer post={post} />
        <StyledImage
          src="/images/Forest1.png" // TODO 이미지 임시 제거
          alt="preview"
          width={0}
          height={0}
          sizes="100vh"
        ></StyledImage>
      </PostCardContainer>
    </Link>
  );
};

export default PostCard;
