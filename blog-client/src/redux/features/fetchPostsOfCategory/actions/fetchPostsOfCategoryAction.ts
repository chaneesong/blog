import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchPostsOfCategory = async (keyword: string): Promise<any> => {
  const response = axios.get(`/category/${encodeURIComponent(keyword)}`);
  return response;
};

export const fetchPostsOfCategoryThunk = createAsyncThunk(
  'category/fetchPostsOfCategory',
  async (keyword: string) => {
    try {
      const response = await fetchPostsOfCategory(keyword);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch posts of category');
    }
  }
);
