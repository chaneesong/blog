import { Controller, Delete, Get, Param } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  findAll() {
    return this.tagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagService.findOneById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagService.removeById(id);
  }
}
