import { createAsyncThunk } from '@reduxjs/toolkit';
import { dummyPostData } from '../../../../../public/dummyData';

const fetchPostsOfTag = async (): Promise<any> => {
  return dummyPostData;
};

export const fetchPostsOfTagThunk = createAsyncThunk(
  'tag/fetchPostsOfTag',
  async () => {
    try {
      const response = await fetchPostsOfTag();
      return response;
    } catch (error) {
      throw new Error('Failed to fetch posts of tag');
    }
  }
);
