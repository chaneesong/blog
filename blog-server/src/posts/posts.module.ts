import { Logger, Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Category } from 'src/category/entities/category.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { CategoryModule } from 'src/category/category.module';
import { TagModule } from 'src/tag/tag.module';
import { PostHelper } from './posts.helper';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Post, //
      Category,
      Tag,
    ]),
    CategoryModule,
    TagModule,
  ],
  controllers: [PostsController],
  providers: [
    PostsService, //
    PostHelper,
    Logger,
  ],
})
export class PostsModule {}
