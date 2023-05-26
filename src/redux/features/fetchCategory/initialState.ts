interface FetchCategoryState {
  loading: boolean;
  error: string | null;
  categories: Category[];
}

export const initialState: FetchCategoryState = {
  loading: false,
  error: null,
  categories: [],
};
