import { categoriesData } from '@/dummyData';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCategory = async (): Promise<any> => {
  // TODO 카테고리에 대한 비동기 요청 작성 예정
  return categoriesData;
};

export const fetchCategoryThunk = createAsyncThunk(
  'category/fetchCategory',
  async () => {
    try {
      const response = await fetchCategory();
      return response;
    } catch (error) {
      throw new Error('Failed to fetch category.');
    }
  }
);
