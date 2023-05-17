import { FetchRecentPostsState } from './types';

export const initialState: FetchRecentPostsState = {
  loading: false,
  error: null,
  posts: [],
};
