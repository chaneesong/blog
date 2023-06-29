import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxHooks';

import AppLayout from '@/components/AppLayout';
import { setPost } from '@/redux/features/posterSlice/posterSlice';
import ContentContainer from '@/components/Post/Content';
import Title from '@/components/Post/Title';
import TOC from '@/components/Post/TOC';
import { dummyPostData } from '../../../public/dummyData';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const postData = useAppSelector((state) => state.poster);
  const { content, image, ...title } = postData;
  const titleElement: PostTitleProp = { ...title };

  useEffect(() => {
    if (parseInt(id as string) !== postData.id) {
      // TODO 주소를 직접 입력하여 접근하는 경우 서버에 요청하여 데이터를 받아와야 함
      const updatedPostData = { ...dummyPostData[1] };
      dispatch(setPost({ ...updatedPostData }));
    }
  }, []);

  return (
    <>
      <AppLayout>
        <Title titleProp={titleElement}></Title>
        <ContentContainer content={content} />
        <TOC />
      </AppLayout>
    </>
  );
};

export default Post;
