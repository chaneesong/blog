import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const posterSlice = createSlice({
  name: 'poster',
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.createdAt = action.payload.createdAt;
      state.category = action.payload.category;
      state.tags = action.payload.tags;
      state.image = action.payload.image;
    },
  },
});

export const { setPost } = posterSlice.actions;
export const posterReducer = posterSlice.reducer;
