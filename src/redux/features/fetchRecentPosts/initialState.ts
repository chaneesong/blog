import { postCardsData } from '@/dummyData';

interface FetchRecentPostsState {
  loading: boolean;
  error: string | null;
  posts: PostCard[];
}

export const initialState: FetchRecentPostsState = {
  loading: false,
  error: null,
  posts: postCardsData,
};
