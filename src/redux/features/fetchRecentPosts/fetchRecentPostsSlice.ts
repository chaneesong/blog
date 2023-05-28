import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchRecentPostsThunk } from './actions/fetchRecentPostsActions';

const fetchRecentPostsSlice = createSlice({
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
        state.data = action.payload;
      })
      .addCase(fetchRecentPostsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string | null;
        state.data = [];
      });
  },
});

export const fetchRecentPostsReducer = fetchRecentPostsSlice.reducer;
