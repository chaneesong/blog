import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCategory = async (): Promise<any> => {
  const response = axios.get('category');
  return response;
};

export const fetchCategoryThunk = createAsyncThunk(
  'category/fetchCategory',
  async () => {
    try {
      const response = await fetchCategory();
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch category.');
    }
  }
);
