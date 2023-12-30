import React, { useEffect } from 'react';
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
    <AppLayout>
      <div>최근 게시글</div>
      <Row className="justify-content-around">
        {posts.map((post) => (
          <MiniPostCard post={post} key={post.id} />
        ))}
      </Row>
    </AppLayout>
  );
};

export default Home;
