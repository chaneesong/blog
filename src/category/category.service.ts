import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const { keyword: keyword } = createCategoryDto;
    const existedCategory = await this.categoryRepository.findOneBy({
      keyword,
    });

    if (existedCategory) {
      return existedCategory;
    }

    const newCategory = this.categoryRepository.create({ keyword });
    await this.categoryRepository.save(newCategory);
    return newCategory;
  }

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findOneById(id: string) {
    return await this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.post', 'post')
      .leftJoinAndSelect('post.tags', 'tag')
      .where('category.id = :id', { id })
      .select([
        'category.id',
        'category.keyword',
        'post.id',
        'post.title',
        'post.content',
        'post.createdAt',
        'tag.id',
        'tag.keyword',
      ])
      .getOne();
  }

  async findOneByKeyword(keyword: string) {
    return await this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.post', 'post')
      .leftJoinAndSelect('post.tags', 'tag')
      .where('category.keyword = :keyword', { keyword })
      .select([
        'category.id',
        'category.keyword',
        'post.id',
        'post.title',
        'post.content',
        'post.createdAt',
        'tag.id',
        'tag.keyword',
      ])
      .getOne();
  }

  async findAllPostsOfCategory(keyword: string) {
    const result = await this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.post', 'post')
      .leftJoinAndSelect('post.tags', 'tag')
      .where('category.keyword = :keyword', { keyword })
      .select([
        'GROUP_CONCAT(DISTINCT category.id) AS category_id',
        'category.keyword',
        'post.id',
        'post.title',
        'post.content',
        `DATE_FORMAT(post.createdAt, '%Y-%m-%d') AS post_createdAt`,
        'GROUP_CONCAT(tag.id ORDER BY tag.id) AS tag_id',
        'GROUP_CONCAT(tag.keyword ORDER BY tag.id) AS tag_keyword',
      ])
      .groupBy('post.id')
      .getRawMany();

    return result;
  }

  // TODO 삭제되지 않는 경우 예외처리로 변경 예정
  async remove(id: string): Promise<string> {
    const postOfCategory = await this.categoryRepository.findOne({
      where: { id },
      relations: ['post'],
    });

    if (postOfCategory.post.length) {
      return `You cannot delete it because there are related data.`;
    }

    const categoryToDelete = await this.categoryRepository.delete({ id });

    if (!categoryToDelete.affected) {
      return `The data was not deleted.`;
    }

    return `${id} category deleted successfully.`;
  }
}
