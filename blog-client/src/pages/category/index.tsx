import React, { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';

import AppLayout from '../../components/AppLayout';
import { fetchCategoryThunk } from '@/redux/features/fetchCategory/actions/fetchCategoryAction';
import Categorization from '@/components/Categorization';

const CategoryList = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) =>
    state.categories.data.map((data) => data.keyword)
  );

  useEffect(() => {
    dispatch(fetchCategoryThunk());
  }, [dispatch]);

  return (
    <>
      <AppLayout>
        Category
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
