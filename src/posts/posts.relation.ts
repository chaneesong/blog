import { Injectable } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';
import { TagService } from 'src/tag/tag.service';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

interface UpdatePostCategory {
  post: Omit<Post, 'category' | 'tags'>;
  prevCategory: string;
  newCategory: string;
}

interface UpdatePostTags {
  post: Omit<Post, 'category' | 'tags'>;
  prevTags: string[];
  newTags: string[];
}

@Injectable()
export class PostsRelation {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly tagService: TagService,
    private readonly categoryService: CategoryService,
  ) {}

  async createPostTags(keywords: string[]) {
    const tagsPromise = keywords.map((keyword) =>
      this.tagService.create({ keyword }),
    );

    const tags = await Promise.all(tagsPromise);

    return tags;
  }

  async updatePostCategory(updatedPostCategory: UpdatePostCategory) {
    const { prevCategory, newCategory, post } = updatedPostCategory;

    if (prevCategory === newCategory) {
      return await this.categoryService.findOneByKeyword(prevCategory);
    }

    const result = await this.categoryService.create({
      category: newCategory,
    });

    await this.postRepository.save({ ...post, category: result });
    await this.categoryService.remove(prevCategory);
    return result;
  }

  async updatePostTags(updatedPostTags: UpdatePostTags) {
    const { prevTags, newTags } = updatedPostTags;
    return `This action updates ${newTags} of post`;
  }
}
