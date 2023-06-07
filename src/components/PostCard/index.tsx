import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import PostCardContainer from './MainContainer';
import ContentContainer from './ContentContainer';

interface PostCardProps {
  post: PostCard;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={'/post/' + post.id} key={post.id}>
      <PostCardContainer>
        <ContentContainer post={post} />
        <Image
          src="/images/preview.png"
          alt="preview"
          width={0}
          height={0}
          sizes="100vh"
          style={{ width: '280px', height: '100%' }}
        ></Image>
      </PostCardContainer>
    </Link>
  );
}
