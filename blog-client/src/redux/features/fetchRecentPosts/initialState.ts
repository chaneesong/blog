interface FetchRecentPostsState {
  loading: boolean;
  error: string | null;
  data: Post[];
}

export const initialState: FetchRecentPostsState = {
  loading: false,
  error: null,
  data: [],
};
