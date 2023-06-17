interface FetchPostsOfCategoryState {
  loading: boolean;
  error: string | null;
  data: Post[];
}

export const initialState: FetchPostsOfCategoryState = {
  loading: false,
  error: null,
  data: [],
};
