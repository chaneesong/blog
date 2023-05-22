import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchRecentPostsThunk } from './actions/postActions';

const FetchRecentPostsSlice = createSlice({
  name: 'fetchRecentPosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecentPostsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecentPostsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.posts = action.payload;
      })
      .addCase(fetchRecentPostsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string | null;
        state.posts = [];
      });
  },
});

export default FetchRecentPostsSlice.reducer;
