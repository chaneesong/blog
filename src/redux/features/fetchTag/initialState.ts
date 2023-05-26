interface FetchTagsState {
  loading: boolean;
  error: string | null;
  tags: Tag[];
}

export const initialState: FetchTagsState = {
  loading: false,
  error: null,
  tags: [],
};
