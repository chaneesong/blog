import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchPostThunk } from './actions/fetchPostAction';

const posterSlice = createSlice({
  name: 'poster',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchPostThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string | null;
        state.data = {} as Post;
      });
  },
});

export const posterReducer = posterSlice.reducer;
