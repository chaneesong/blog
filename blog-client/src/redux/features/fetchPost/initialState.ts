interface FetchPost {
  loading: boolean;
  error: string | null;
  data: Post;
}

export const initialState: FetchPost = {
  loading: false,
  error: null,
  data: {
    id: 0,
    title: '',
    content: '',
    createdAt: '',
    category: { id: '', keyword: '' },
    tags: [],
  },
};
