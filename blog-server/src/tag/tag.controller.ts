import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { TagService } from './tag.service';
import { PostDataTransformInterceptor } from 'src/interceptors/transform/post-data-transform.interceptor';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  findAll() {
    return this.tagService.findAll();
  }

  @Get(':keyword')
  @UseInterceptors(PostDataTransformInterceptor)
  findOne(@Param('keyword') keyword: string) {
    return this.tagService.findAllPostsOfTag(keyword);
  }
}
