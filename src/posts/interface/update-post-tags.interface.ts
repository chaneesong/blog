import { Post } from '../entities/post.entity';

export interface UpdatePostTags {
  post: Omit<Post, 'category' | 'tags'>;
  prevTags: string[];
  newTags: string[];
}
