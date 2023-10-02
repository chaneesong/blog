import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchPostsOfCategory = async (): Promise<any> => {
  const response = axios.get('/category');
  return response;
};

export const fetchPostsOfCategoryThunk = createAsyncThunk(
  'category/fetchPostsOfCategory',
  async () => {
    try {
      const response = await fetchPostsOfCategory();
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch posts of category');
    }
  }
);
