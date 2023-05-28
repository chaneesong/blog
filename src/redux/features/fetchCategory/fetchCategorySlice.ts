import { createSlice } from '@reduxjs/toolkit';

import { fetchCategoryThunk } from './actions/fetchCategoryAction';
import { initialState } from './initialState';

const fetchCategoriesSlice = createSlice({
  name: 'fetchCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string | null;
        state.data = [];
      });
  },
});

export const fetchCategoriesReducer = fetchCategoriesSlice.reducer;
