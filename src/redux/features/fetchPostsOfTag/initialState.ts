interface FetchPostsOfTag {
  loading: boolean;
  error: string | null;
  data: PostCard[];
}

export const initialState: FetchPostsOfTag = {
  loading: false,
  error: null,
  data: [],
};
