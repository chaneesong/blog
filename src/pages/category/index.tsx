import Head from 'next/head';
import ListGroup from 'react-bootstrap/ListGroup';

import AppLayout from '../../components/AppLayout';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';
import { useEffect } from 'react';
import { fetchCategoryThunk } from '@/redux/features/fetchCategory/actions/fetchCategoryAction';
import Categorization from '@/components/Categorization';

export default function CategoryList() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.data);

  useEffect(() => {
    dispatch(fetchCategoryThunk());
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
        <h3>Category</h3>
        <ListGroup variant="flush">
          {categories.map((category: string) => (
            <Categorization prefix="/category" root={category} key={category} />
          ))}
        </ListGroup>
      </AppLayout>
    </>
  );
}
