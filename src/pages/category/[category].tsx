import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';

import AppLayout from '@/components/AppLayout';
import { fetchPostsOfCategoryThunk } from '@/redux/features/fetchPostsOfCategory/actions/fetchPostsOfCategoryAction';
import { separateLayers } from '@/lib/PostCard/separateLayers';

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

  const { postCards, miniPostCards } = separateLayers(posts);

  return (
    <AppLayout>
      <h3>{category}</h3>
      <div>{postCards}</div>
      <div className="row justify-content-around">{miniPostCards}</div>
    </AppLayout>
  );
};

export default Category;
