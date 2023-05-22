import { postsData } from '@/dummyData';

interface FetchRecentPostsState {
  loading: boolean;
  error: string | null;
  posts: Post[];
}

export const initialState: FetchRecentPostsState = {
  loading: false,
  error: null,
  posts: postsData,
};
