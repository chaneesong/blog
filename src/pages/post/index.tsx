import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';
import AppLayout from '@/components/AppLayout';
import { fetchPostsThunk } from '@/redux/features/fetchPosts/actions/fetchPostsAction';
import { separateLayers } from '@/lib/PostCard/separateLayers';

const PostList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.data);

  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, [dispatch]);

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
