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

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration-line: none;
`;

const PostCard = ({ post }: PostCardProps) => {
  const dispatch = useDispatch();

  const handleSetPost = () => {
    dispatch(setPost({ ...post }));
  };

  return (
    <StyledLink
      href={`/post/${post.id}`}
      key={post.id}
      passHref
      onClick={handleSetPost}
    >
      <PostCardContainer>
        <ContentsContainer post={post} />
        <Image
          src="/images/preview.png"
          alt="preview"
          width={0}
          height={0}
          sizes="100vh"
          style={{ width: '250px', height: '100%' }}
        ></Image>
      </PostCardContainer>
    </StyledLink>
  );
};

export default PostCard;
