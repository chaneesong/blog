import { Injectable } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';
import { TagService } from 'src/tag/tag.service';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdatePostCategory } from './interface/update-post-category.interface';
import { UpdatePostTags } from './interface/update-post-tags.interface';

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
    const { prevTags, newTags: newTagsKeywords, post } = updatedPostTags;

    const newTagsPromise = newTagsKeywords.map((keyword) => {
      const index = prevTags.findIndex((element) => element === keyword);
      if (index === -1) {
        return this.tagService.create({ keyword });
      }
      const result = this.tagService.findOneByKeyword(prevTags[index]);
      prevTags.splice(index, 1);
      return result;
    });

    const result = await Promise.all(newTagsPromise);

    await this.postRepository.save({ ...post, tags: result });
    const tagsToDelete = prevTags.map((keyword) =>
      this.tagService.removeByKeyword(keyword),
    );
    await Promise.all(tagsToDelete);
    return result;
  }

  async removePostTags(tagIds: string[]) {
    const tagsToDeletePromise = tagIds.map((id) =>
      this.tagService.removeById(id),
    );

    return await Promise.all(tagsToDeletePromise);
  }
}
