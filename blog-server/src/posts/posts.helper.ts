import { Injectable } from '@nestjs/common';
import { Category } from 'src/category/entities/category.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { QueryRunner } from 'typeorm';

@Injectable()
export class PostHelper {
  async createCategory(keyword: string, queryRunner: QueryRunner) {
    const prevCategory = await queryRunner.manager.findOne(Category, {
      where: { keyword },
    });

    if (!prevCategory) {
      const newCategory = queryRunner.manager.create(Category, { keyword });
      return await queryRunner.manager.save(newCategory);
    }
    return prevCategory;
  }

  async createTags(keywords: string[], queryRunner: QueryRunner) {
    const prevTags = await Promise.all(
      keywords.map((keyword) =>
        queryRunner.manager.findOne(Tag, { where: { keyword } }),
      ),
    );

    const newTags = await Promise.all(
      prevTags.map((prevTag, idx) => {
        if (!prevTag) {
          const newTag = queryRunner.manager.create(Tag, {
            keyword: keywords[idx],
          });
          return queryRunner.manager.save(newTag);
        }
        return prevTag;
      }),
    );

    return newTags;
  }

  async updateCategory(
    prevKeyword: string,
    newKeyword: string,
    queryRunner: QueryRunner,
  ) {
    if (prevKeyword === newKeyword) {
      return await queryRunner.manager.findOne(Category, {
        where: { keyword: prevKeyword },
      });
    }
    const createdCategory = queryRunner.manager.create(Category, {
      keyword: newKeyword,
    });
    return await queryRunner.manager.save(createdCategory);
  }

  async updateTags(
    prevTagKeywords: string[],
    newTagKeywords: string[],
    queryRunner: QueryRunner,
  ) {
    const result = await Promise.all(
      newTagKeywords.map((keyword) => {
        const index = prevTagKeywords.findIndex(
          (element) => element === keyword,
        );
        if (index === -1) {
          const createdTag = queryRunner.manager.create(Tag, { keyword });
          return queryRunner.manager.save(createdTag);
        }
        return queryRunner.manager.findOne(Tag, { where: { keyword } });
      }),
    );

    return result;
  }

  async cleanupUnusedCategory() {}

  async cleanupUnusedTag() {}
}
