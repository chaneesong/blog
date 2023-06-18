import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchPostsOfTagThunk } from './actions/fetchPostsOfTagAction';

const fetchPostsOfTagSlice = createSlice({
  name: 'fetchPostsOfTag',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsOfTagThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostsOfTagThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchPostsOfTagThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string | null;
        state.data = [];
      });
  },
});

export const fetchPostsOfTagReducer = fetchPostsOfTagSlice.reducer;
