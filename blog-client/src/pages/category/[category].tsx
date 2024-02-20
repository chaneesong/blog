import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';

import AppLayout from '@/components/AppLayout';
import { fetchPostsOfCategoryThunk } from '@/redux/features/fetchPostsOfCategory/actions/fetchPostsOfCategoryAction';
import PostCard from '@/components/PostCard';
import Head from 'next/head';

const Category = () => {
  const router = useRouter();
  const { category } = router.query;
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postsOfCategory.data);

  useEffect(() => {
    if (router.isReady) {
      dispatch(fetchPostsOfCategoryThunk(category as string));
    }
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>{category}</title>
      </Head>
      <AppLayout>
        <h3>{category}</h3>
        <PostCard posts={posts}></PostCard>
      </AppLayout>
    </>
  );
};

export default Category;
