import React from 'react';
import AppLayout from '../components/AppLayout';
import BlogIntro from '@/components/Intro';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <AppLayout>
        <BlogIntro />
      </AppLayout>
    </>
  );
};

export default Home;
