interface FetchPostsOfTag {
  loading: boolean;
  error: string | null;
  data: Post[];
}

export const initialState: FetchPostsOfTag = {
  loading: false,
  error: null,
  data: [],
};
