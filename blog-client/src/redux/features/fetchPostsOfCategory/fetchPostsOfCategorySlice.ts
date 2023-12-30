import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchPostsOfCategoryThunk } from './actions/fetchPostsOfCategoryAction';

const fetchPostsOfCategorySlice = createSlice({
  name: 'fetchPostsOfCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsOfCategoryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostsOfCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchPostsOfCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string | null;
        state.data = [];
      });
  },
});

export const fetchPostsOfCategoryReducer = fetchPostsOfCategorySlice.reducer;
