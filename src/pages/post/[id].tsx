import Head from 'next/head';
import { useRouter } from 'next/router';

import AppLayout from '@/components/AppLayout';
import { useAppSelector } from '@/redux/hooks/reduxHooks';

export default function Post() {
  const { id, title, content } = useAppSelector((state) => state.poster);

  return (
    <>
      <Head>
        <title>Flog</title>
        <meta name="description" content="Index page of blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <>
          <div>{id}</div>
          <div>{title}</div>
          <div>{content}</div>
        </>
      </AppLayout>
    </>
  );
}
