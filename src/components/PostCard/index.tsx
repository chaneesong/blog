import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import PostCardContainer from './MainContainer';
import ContentContainer from './ContentContainer';
import { useDispatch } from 'react-redux';
import { setPost } from '@/redux/features/posterSlice/posterSlice';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
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
        <ContentContainer post={post} />
        <Image
          src="/images/preview.png"
          alt="preview"
          width={0}
          height={0}
          sizes="100vh"
          style={{ width: '250px', height: '100%' }}
        ></Image>
      </PostCardContainer>
    </Link>
  );
}
