import Head from 'next/head';
import { Row } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';
import { useEffect } from 'react';

import AppLayout from './components/AppLayout';
import RecentPostCard from './components/RecentPostCard';
import { fetchRecentPostsThunk } from '@/redux/features/fetchRecentPosts/actions/postActions';

export default function Home() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.recentPosts.posts);

  useEffect(() => {
    dispatch(fetchRecentPostsThunk());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Flog</title>
        <meta name="description" content="Index page of blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <h3>Latest Contents</h3>
        <Row className="justify-content-around">
          {posts.map((post) => (
            <RecentPostCard key={post.id} post={post} />
          ))}
        </Row>
      </AppLayout>
    </>
  );
}
