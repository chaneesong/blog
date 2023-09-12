import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchTags = async (): Promise<any> => {
  const response = axios.get('tag');
  return response;
};

export const fetchTagsThunk = createAsyncThunk('tag/fetchTags', async () => {
  try {
    const response = await fetchTags();
    return response.data;
  } catch (error) {
    throw new Error('Faild to fetch tags.');
  }
});
