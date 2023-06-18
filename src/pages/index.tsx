import React, { useEffect } from 'react';
import Head from 'next/head';
import { Row } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';

import AppLayout from '../components/AppLayout';
import { fetchRecentPostsThunk } from '@/redux/features/fetchRecentPosts/actions/fetchRecentPostsActions';
import PostCard from '@/components/PostCard';

const Home = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.recentPostCards.data);

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
            <PostCard post={post} key={post.id} />
          ))}
        </Row>
      </AppLayout>
    </>
  );
};

export default Home;
