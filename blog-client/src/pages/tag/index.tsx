import React, { useEffect } from 'react';
import Head from 'next/head';
import { ListGroup } from 'react-bootstrap';

import AppLayout from '../../components/AppLayout';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';
import { fetchTagsThunk } from '@/redux/features/fetchTag/actions/fetchTagAction';
import Categorization from '@/components/Categorization';
import Title from '@/components/Categorization/Title';

const TagList = () => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) =>
    state.tags.data.map((data) => data.keyword)
  );

  useEffect(() => {
    dispatch(fetchTagsThunk());
  }, [dispatch]);

  return (
    <>
      <AppLayout>
        <Title title={'Tag'}></Title>
        <ListGroup>
          {tags.map((tag: string) => (
            <Categorization prefix="/tag" root={tag} key={tag} />
          ))}
        </ListGroup>
      </AppLayout>
    </>
  );
};

export default TagList;
