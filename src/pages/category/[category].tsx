import AppLayout from '@/components/AppLayout';
import PostCard from '@/components/PostCard';
import { fetchPostsOfCategoryThunk } from '@/redux/features/fetchPostsOfCategory/actions/fetchPostsOfCategoryAction';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Category() {
  const router = useRouter();
  const { category } = router.query;
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postsOfCategory.data);

  useEffect(() => {
    dispatch(fetchPostsOfCategoryThunk());
  }, [dispatch]);

  return (
    <AppLayout>
      <h3>{category}</h3>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
}
