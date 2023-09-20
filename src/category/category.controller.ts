import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.categoryService.findOneById(id);
    return result;
  }
}
