import React, { useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';
import { fetchPostsOfTagThunk } from '@/redux/features/fetchPostsOfTag/actions/fetchPostsOfTagAction';
import PostCard from '@/components/PostCard';

const Tag = () => {
  const router = useRouter();
  const { tag } = router.query;
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postsOfTag.data);

  useEffect(() => {
    if (router.isReady) {
      dispatch(fetchPostsOfTagThunk(tag as string));
    }
  }, [router.isReady]);

  return (
    <AppLayout>
      <h3>{tag}</h3>
      <PostCard posts={posts}></PostCard>
    </AppLayout>
  );
};

export default Tag;
