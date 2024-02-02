import { CategoryCore } from 'src/category/types';
import { TagCore } from 'src/tag/types';
import { Post } from '../entities/post.entity';

export interface ConvertUpdatePostDto {
  inputPost: Pick<Post, 'id' | 'title' | 'content'>;
  inputCategory: string;
  prevCategory: CategoryCore;
  inputTags: string[];
  prevTags: TagCore[];
}
