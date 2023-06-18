import { createAsyncThunk } from '@reduxjs/toolkit';
import { dummyPostData } from '../../../../../public/dummyData';

const fetchPosts = async (): Promise<any> => {
  // TODO 게시글에 대한 비동기 요청 작성 예정
  return dummyPostData;
};

export const fetchPostsThunk = createAsyncThunk(
  'category/fetchPosts',
  async () => {
    try {
      const response = await fetchPosts();
      return response;
    } catch (error) {
      throw new Error('Failed to fetch posts');
    }
  }
);
