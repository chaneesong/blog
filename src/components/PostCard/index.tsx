import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';

import PostCardContainer from './Container';
import ContentsContainer from './ContentContainer';
import { setPost } from '@/redux/features/posterSlice/posterSlice';
import styled from 'styled-components';

interface PostCardProps {
  post: Post;
}

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
  max-height: 100%;
  min-height: 170px;
  min-width: 220px;
`;

const PostCard = ({ post }: PostCardProps) => {
  const dispatch = useDispatch();

  const handleSetPost = () => {
    dispatch(setPost({ ...post }));
  };

  return (
    <Link
      href={`/post/${post.id}`}
      key={post.id}
      passHref
      onClick={handleSetPost}
    >
      <PostCardContainer>
        <ContentsContainer post={post} />
        <StyledImage
          src={post.image as string}
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
