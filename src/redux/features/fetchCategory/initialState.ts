interface FetchCategoryState {
  loading: boolean;
  error: string | null;
  data: Category[];
}

export const initialState: FetchCategoryState = {
  loading: false,
  error: null,
  data: [],
};
