import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchPost = async (id: string): Promise<any> => {
  return await axios.get(`posts/${id}`);
};

export const fetchPostThunk = createAsyncThunk('poster', async (id: string) => {
  try {
    const response = await fetchPost(id);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});
