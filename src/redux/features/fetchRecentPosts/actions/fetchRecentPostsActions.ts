import { postCardsData } from '@/dummyData';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchRecentPosts = async (): Promise<any> => {
  // TODO 최근 게시글에 대한 비동기 요청 작성 예정
  return postCardsData;
};

export const fetchRecentPostsThunk = createAsyncThunk(
  'post/fetchRecentPosts',
  async () => {
    try {
      const response = await fetchRecentPosts();
      return response;
    } catch (error) {
      throw new Error('Failed to fetch recent posts.');
    }
  }
);
