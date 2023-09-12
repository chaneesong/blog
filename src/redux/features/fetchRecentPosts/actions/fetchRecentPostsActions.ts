import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchRecentPosts = async (): Promise<any> => {
  const response = axios.get('/posts');
  return response;
};

export const fetchRecentPostsThunk = createAsyncThunk(
  'post/fetchRecentPosts',
  async () => {
    try {
      const response = await fetchRecentPosts();
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch recent posts.');
    }
  }
);
