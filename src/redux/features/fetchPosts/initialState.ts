interface FetchPosts {
  loading: boolean;
  error: string | null;
  data: PostCard[];
}

export const initialState: FetchPosts = {
  loading: false,
  error: null,
  data: [],
};
