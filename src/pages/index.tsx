import React, { useEffect } from 'react';
import Head from 'next/head';
import { Row } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';

import AppLayout from '../components/AppLayout';
import { fetchRecentPostsThunk } from '@/redux/features/fetchRecentPosts/actions/fetchRecentPostsActions';
import MiniPostCard from '@/components/MiniPostCard';

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
        <h3>최근 게시글</h3>
        <Row className="justify-content-around">
          {posts.map((post) => (
            <MiniPostCard post={post} key={post.id} />
          ))}
        </Row>
      </AppLayout>
    </>
  );
};

export default Home;
