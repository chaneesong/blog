import { createAsyncThunk } from '@reduxjs/toolkit';
import { tagsData } from '@/dummyData';

const fetchTags = async (): Promise<any> => {
  // TODO 태그에 대한 비동기 요청 작성 예정
  return tagsData;
};

export const fetchTagsThunk = createAsyncThunk('tag/fetchTags', async () => {
  try {
    const response = await fetchTags();
    return response;
  } catch (error) {
    throw new Error('Faild to fetch tags.');
  }
});
