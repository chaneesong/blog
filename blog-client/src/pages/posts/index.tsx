import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';
import AppLayout from '@/components/AppLayout';
import { fetchPostsThunk } from '@/redux/features/fetchPosts/actions/fetchPostsAction';
import PostCard from '@/components/PostCard';
import Title from '@/components/Categorization/Title';

const PostList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.data);

  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, []);

  return (
    <>
      <AppLayout>
        <Title title={'Posts'}></Title>
        <PostCard posts={posts}></PostCard>
      </AppLayout>
    </>
  );
};

export default PostList;
