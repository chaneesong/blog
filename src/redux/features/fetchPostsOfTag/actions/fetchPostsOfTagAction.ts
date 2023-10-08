import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchPostsOfTag = async (keyword: string): Promise<any> => {
  return axios.get(`/tag/${keyword}`);
};

export const fetchPostsOfTagThunk = createAsyncThunk(
  'tag/fetchPostsOfTag',
  async (keyword: string) => {
    try {
      const response = await fetchPostsOfTag(keyword);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch posts of tag');
    }
  }
);
