import Head from 'next/head';
import { ListGroup } from 'react-bootstrap';

import { tag } from '@/dummyData';
import AppLayout from './components/AppLayout';

export default function Tag() {
  return (
    <>
      <Head>
        <title>Flog</title>
        <meta name="description" content="Index page of blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <h3>Tags</h3>
        <ListGroup variant="flush">
          {Array.from(tag.keys()).map((value: string) => (
            <ListGroup.Item key={value}>
              <h4>{value}</h4>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </AppLayout>
    </>
  );
}
