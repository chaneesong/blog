import { createAsyncThunk } from '@reduxjs/toolkit';
import { postData } from '../../../../../public/dummyData';

const fetchPostsOfCategory = async (): Promise<any> => {
  // TODO 카테고리 게시글에 대한 비동기 요청 작성 예정
  return postData;
};

export const fetchPostsOfCategoryThunk = createAsyncThunk(
  'category/fetchPostsOfCategory',
  async () => {
    try {
      const response = await fetchPostsOfCategory();
      return response;
    } catch (error) {
      throw new Error('Failed to fetch posts of category');
    }
  }
);
