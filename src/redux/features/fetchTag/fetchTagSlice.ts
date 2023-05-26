import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchTagsThunk } from './actions/fetchTagAction';

const fetchTagsSlice = createSlice({
  name: 'fetchTags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTagsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTagsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.tags = action.payload;
      })
      .addCase(fetchTagsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string | null;
        state.tags = [];
      });
  },
});

export const fetchTagsReducer = fetchTagsSlice.reducer;
