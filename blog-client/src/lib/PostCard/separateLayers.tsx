import React from 'react';
import MiniPostCard from '@/components/MiniPostCard';
import PostCard from '@/components/PostCard';

export const separateLayers = (data: Post[]) => {
  const postCards: JSX.Element[] = [];
  const miniPostCards: JSX.Element[] = [];

  data.forEach((post: Post) => {
    postCards.push(<PostCard key={post.id} post={post} />);
    miniPostCards.push(<MiniPostCard key={post.id} post={post} />);
  });

  return { postCards, miniPostCards };
};
