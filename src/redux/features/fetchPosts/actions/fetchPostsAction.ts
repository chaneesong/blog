import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchPosts = async (): Promise<any> => {
  // TODO 게시글에 대한 비동기 요청 작성 예정
  const response = axios.get('/posts');
  return response;
};

export const fetchPostsThunk = createAsyncThunk(
  'category/fetchPosts',
  async () => {
    try {
      const response = await fetchPosts();
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch posts');
    }
  }
);
