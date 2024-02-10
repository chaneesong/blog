import React from 'react';
import AppLayout from '../components/AppLayout';
import BlogArticle from '@/components/Index/BlogArticle';
import BlogTitle from '@/components/Index/BlogTitle';

const Home = () => {
  return (
    <AppLayout>
      <BlogTitle />
      <BlogArticle />
    </AppLayout>
  );
};

export default Home;
