import { createAsyncThunk } from '@reduxjs/toolkit';
import { postData } from '../../../../../public/dummyData';

const fetchPostsOfTag = async (): Promise<any> => {
  return postData;
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
