import React, { useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';
import { fetchPostsOfTagThunk } from '@/redux/features/fetchPostsOfTag/actions/fetchPostsOfTagAction';
import { separateLayers } from '@/lib/PostCard/separateLayers';

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

  const { postCards, miniPostCards } = separateLayers(posts);

  return (
    <AppLayout>
      <h3>{tag}</h3>
      <div>{postCards}</div>
      <div className="row justify-content-around">{miniPostCards}</div>
    </AppLayout>
  );
};

export default Tag;
