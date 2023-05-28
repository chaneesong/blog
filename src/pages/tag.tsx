import Head from 'next/head';
import { ListGroup } from 'react-bootstrap';

import AppLayout from './components/AppLayout';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';
import { useEffect } from 'react';
import { fetchTagsThunk } from '@/redux/features/fetchTag/actions/fetchTagAction';

export default function Tag() {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.tags.data);

  useEffect(() => {
    dispatch(fetchTagsThunk());
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
        <h3>Tags</h3>
        <ListGroup variant="flush">
          {tags.map((tag: string) => (
            <ListGroup.Item key={tag}>
              <h4>{tag}</h4>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </AppLayout>
    </>
  );
}
