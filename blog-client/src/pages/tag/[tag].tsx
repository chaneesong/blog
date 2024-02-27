import React, { useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';
import { fetchPostsOfTagThunk } from '@/redux/features/fetchPostsOfTag/actions/fetchPostsOfTagAction';
import PostCard from '@/components/PostCard';
import Head from 'next/head';

const Tag = () => {
  const router = useRouter();
  const { tag } = router.query;
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postsOfTag.data);

  useEffect(() => {
    const keyword = Array.isArray(tag) ? tag[0] : tag;

    if (keyword && router.isReady) {
      dispatch(fetchPostsOfTagThunk(encodeURIComponent(keyword)));
    }
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>{tag}</title>
      </Head>
      <AppLayout>
        <h3>{tag}</h3>
        <PostCard posts={posts}></PostCard>
      </AppLayout>
    </>
  );
};

export default Tag;
