import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchPostsThunk } from './actions/fetchPostsAction';

const fetchPostsSlice = createSlice({
  name: 'fetchPosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchPostsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string | null;
        state.data = [];
      });
  },
});

export const fetchPostsReducer = fetchPostsSlice.reducer;
