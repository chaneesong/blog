import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Post } from './types';
import { initialState } from './initialState';

const FetchRecentPostsSlice = createSlice({
  name: 'fetchRecentPosts',
  initialState,
  reducers: {
    fetchRecentPostsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchRecentPostsSuccess(state, action: PayloadAction<Post[]>) {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchRecentPostsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchRecentPostsStart,
  fetchRecentPostsSuccess,
  fetchRecentPostsFailure,
} = FetchRecentPostsSlice.actions;

export default FetchRecentPostsSlice.reducer;
