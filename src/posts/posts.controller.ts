import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  NotFoundException,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CheckIdInterceptor } from 'src/interceptors/posts/check-id.interceptor';
import { PostDataTransformInterceptor } from 'src/interceptors/transform/post-data-transform.interceptor';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService, //
  ) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  @UseInterceptors(PostDataTransformInterceptor)
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  @UseInterceptors(PostDataTransformInterceptor)
  @UseInterceptors(CheckIdInterceptor)
  async findOne(@Param('id') id: string) {
    const result = await this.postsService.findOneById(+id);
    if (!result) {
      throw new NotFoundException('게시글을 찾을 수 없습니다.');
    }
    return result;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const message = await this.postsService.remove(+id);
    return { message };
  }
}
