import { Post } from './entities/post.entity';
import { TagCore } from 'src/tag/types';
import { CategoryCore } from 'src/category/types';

export type PostCore = Pick<Post, 'id' | 'title' | 'content'>;

export type PostCreationDetail = Pick<Post, 'id' | 'title' | 'content'> & {
  category: CategoryCore;
} & { tags: TagCore[] } & { createdAt: string };

export type PostRawData = {
  post_id: number;
  post_title: string;
  post_content: string;
  post_createdAt: string;
  category_id: string;
  category_keyword: string;
  tag_id: string;
  tag_keyword: string;
};
