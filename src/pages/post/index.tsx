import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';
import AppLayout from '@/components/AppLayout';
import PostCard from '@/components/PostCard';
import { fetchPostsThunk } from '@/redux/features/fetchPosts/actions/fetchPostsAction';
import MiniPostCard from '@/components/MiniPostCard';

const MemoizedPostCard = React.memo(PostCard);
const MemoizedMiniPostCard = React.memo(MiniPostCard);

const PostList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.data);

  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, [dispatch]);

  const separateLayers = (data: Post[]) => {
    const postCards: JSX.Element[] = [];
    const miniPostCards: JSX.Element[] = [];

    data.forEach((post) => {
      postCards.push(<MemoizedPostCard key={post.id} post={post} />);
      miniPostCards.push(<MemoizedMiniPostCard key={post.id} post={post} />);
    });

    return { postCards, miniPostCards };
  };

  const { postCards, miniPostCards } = separateLayers(posts);

  return (
    <>
      <AppLayout>
        <h2>All Posts</h2>
        <div>{postCards}</div>
        <div className="row justify-content-around">{miniPostCards}</div>
      </AppLayout>
    </>
  );
};

export default PostList;
