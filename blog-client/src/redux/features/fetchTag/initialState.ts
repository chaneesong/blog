interface FetchTagsState {
  loading: boolean;
  error: string | null;
  data: Tag[];
}

export const initialState: FetchTagsState = {
  loading: false,
  error: null,
  data: [],
};
