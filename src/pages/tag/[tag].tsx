import React, { useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';
import PostCard from '@/components/PostCard';
import { fetchPostsOfTagThunk } from '@/redux/features/fetchPostsOfTag/actions/fetchPostsOfTagACtion';

export default function Tag() {
  const router = useRouter();
  const { tag } = router.query;
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postsOfTag.data);

  useEffect(() => {
    dispatch(fetchPostsOfTagThunk());
  }, [dispatch]);

  return (
    <AppLayout>
      <h3>{tag}</h3>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
}
