interface FetchPosts {
  loading: boolean;
  error: string | null;
  data: Post[];
}

export const initialState: FetchPosts = {
  loading: false,
  error: null,
  data: [],
};
