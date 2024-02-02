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
}
