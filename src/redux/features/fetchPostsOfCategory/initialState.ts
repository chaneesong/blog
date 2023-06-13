interface FetchPostsOfCategoryState {
  loading: boolean;
  error: string | null;
  data: PostCard[];
}

export const initialState: FetchPostsOfCategoryState = {
  loading: false,
  error: null,
  data: [],
};
