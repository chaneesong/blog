import { Post } from '../entities/post.entity';

export interface UpdatePostCategory {
  post: Omit<Post, 'category' | 'tags'>;
  prevCategory: string;
  newCategory: string;
}
