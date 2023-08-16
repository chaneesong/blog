import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Category } from 'src/category/entities/category.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { CategoryService } from 'src/category/category.service';
import { TagService } from 'src/tag/tag.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Post, //
      Category,
      Tag,
    ]),
  ],
  controllers: [PostsController],
  providers: [PostsService, CategoryService, TagService],
})
export class PostsModule {}
