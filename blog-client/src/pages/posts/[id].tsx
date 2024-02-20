import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';

import AppLayout from '@/components/AppLayout';
import ContentContainer from '@/components/Post/Content';
import Title from '@/components/Post/Title';
import TOC from '@/components/Post/TOC';
import { fetchPostThunk } from '@/redux/features/fetchPost/actions/fetchPostAction';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const postData = useAppSelector((state) => state.poster.data);
  const { content, ...title } = postData;
  const titleElement: PostTitleProp = { ...title };

  useEffect(() => {
    if (router.isReady) {
      dispatch(fetchPostThunk(id as string));
    }
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>{titleElement.title}</title>
      </Head>
      <AppLayout>
        <div>
          <Title titleProp={titleElement}></Title>
          <ContentContainer content={content} />
        </div>
        <TOC />
      </AppLayout>
    </>
  );
};

export default Post;
