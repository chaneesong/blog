import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { CategoryService } from './category.service';
import { PostDataTransformInterceptor } from 'src/interceptors/transform/post-data-transform.interceptor';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':keyword')
  @UseInterceptors(PostDataTransformInterceptor)
  async findOne(@Param('keyword') keyword: string) {
    const result = await this.categoryService.findAllPostsOfCategory(keyword);
    return result;
  }
}
