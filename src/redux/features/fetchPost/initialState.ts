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
    category: '',
    tags: [],
    // TODO 이미지 변수 임시 제거
    // image: '',
  },
};
