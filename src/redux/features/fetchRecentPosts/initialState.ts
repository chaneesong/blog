interface FetchRecentPostsState {
  loading: boolean;
  error: string | null;
  data: PostCard[];
}

export const initialState: FetchRecentPostsState = {
  loading: false,
  error: null,
  data: [],
};
