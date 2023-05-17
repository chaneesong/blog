export interface Post {
  id: string;
  title: string;
  image: string;
}

export interface FetchRecentPostsState {
  loading: boolean;
  error: string | null;
  posts: Post[];
}
