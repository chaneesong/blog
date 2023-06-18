import React, { useEffect } from 'react';
import Head from 'next/head';
import ListGroup from 'react-bootstrap/ListGroup';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';

import AppLayout from '../../components/AppLayout';
import { fetchCategoryThunk } from '@/redux/features/fetchCategory/actions/fetchCategoryAction';
import Categorization from '@/components/AppLayout/Categorization';

const CategoryList = () => {
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
};

export default CategoryList;
