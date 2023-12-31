import { Logger, Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Category } from 'src/category/entities/category.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { PostsRelation } from './posts.relation';
import { CategoryModule } from 'src/category/category.module';
import { TagModule } from 'src/tag/tag.module';

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
    PostsRelation,
    Logger,
  ],
})
export class PostsModule {}
