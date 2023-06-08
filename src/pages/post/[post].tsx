import Head from 'next/head';
import { Col, Row } from 'react-bootstrap';

import { post } from '../../../public/dummyData';
import AppLayout from '@/components/AppLayout';

export default function Post() {
  return (
    <>
      <Head>
        <title>Flog</title>
        <meta name="description" content="Index page of blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>{post()}</AppLayout>
    </>
  );
}
