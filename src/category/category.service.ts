import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
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
    const { category: keyword } = createCategoryDto;
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
    return `This action returns all category`;
  }

  async findOneById(id: string) {
    return await this.categoryRepository.findOne({ where: { id } });
  }

  async findOneByKeyword(keyword: string) {
    return await this.categoryRepository.findOne({
      where: { keyword },
    });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  async remove(id: string) {
    return `This action removes a #${id} category`;
  }
}
