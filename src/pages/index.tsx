import Head from 'next/head';
import { Row } from 'react-bootstrap';
import { useAppDispatch } from '@/redux/hooks/reduxHooks';
import { useEffect } from 'react';

import AppLayout from '../components/AppLayout';
import { fetchRecentPostsThunk } from '@/redux/features/fetchRecentPosts/actions/fetchRecentPostsActions';
import { postData } from '../../public/dummyData';
import PostCard from '@/components/PostCard';

export default function Home() {
  const dispatch = useAppDispatch();

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
          {postData.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </Row>
      </AppLayout>
    </>
  );
}
