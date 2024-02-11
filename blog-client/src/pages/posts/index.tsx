import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';
import AppLayout from '@/components/AppLayout';
import { fetchPostsThunk } from '@/redux/features/fetchPosts/actions/fetchPostsAction';
import PostCard from '@/components/PostCard';

const PostList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.data);

  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, []);

  return (
    <>
      <AppLayout>
        All Posts<PostCard posts={posts}></PostCard>
      </AppLayout>
    </>
  );
};

export default PostList;
