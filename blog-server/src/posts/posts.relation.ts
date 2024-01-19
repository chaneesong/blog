import { Injectable } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';
import { TagService } from 'src/tag/tag.service';
import { UpdatePostCategory } from './interface/update-post-category.interface';
import { UpdatePostTags } from './interface/update-post-tags.interface';

@Injectable()
export class PostsRelation {
  constructor(
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
    const { prevCategory, newCategory } = updatedPostCategory;

    if (prevCategory === newCategory) {
      return await this.categoryService.findOneByKeyword(prevCategory);
    }

    const result = await this.categoryService.create({
      keyword: newCategory,
    });
    return result;
  }

  async updatePostTags(updatedPostTags: UpdatePostTags) {
    const { prevTags, newTags: newTagKeywords } = updatedPostTags;

    const newTagsPromise = newTagKeywords.map((keyword) => {
      const index = prevTags.findIndex((element) => element === keyword);
      if (index === -1) {
        return this.tagService.create({ keyword });
      }
      const result = this.tagService.findOneByKeyword(prevTags[index]);
      prevTags.splice(index, 1);
      return result;
    });

    return await Promise.all(newTagsPromise);
  }

  async removePostTags(tagIds: string[]) {
    const tagsToDeletePromise = tagIds.map((id) =>
      this.tagService.removeById(id),
    );

    return await Promise.all(tagsToDeletePromise);
  }

  async removePrevElement({ categoryId, tagKeywords }): Promise<void> {
    const tagsPromise = [];
    await this.categoryService.remove(categoryId);
    tagKeywords.forEach((tagKeyword: string) => {
      const tagPromise = this.tagService.removeByKeyword(tagKeyword);
      tagsPromise.push(tagPromise);
    });
    await Promise.all(tagsPromise);
  }
}
