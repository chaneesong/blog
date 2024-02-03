import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CategoryService } from 'src/category/category.service';
import { PostsRelation } from './posts.relation';
import { ConvertUpdatePostDto } from './interface/convert-post.interface';
import { Category } from 'src/category/entities/category.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { TagCore } from 'src/tag/types';
import { CategoryCore } from 'src/category/types';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly categoryService: CategoryService,
    private readonly postsRelation: PostsRelation,
    private readonly postHelper: PostHelper,
    private dataSource: DataSource,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const { category, tags, ...inputPost } = createPostDto;
    const existingPost = await this.findOneByTitle(inputPost.title);

    if (existingPost) {
      return existingPost;
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const newCategory = await this.postHelper.createCategory(
        category,
        queryRunner,
      );
      const newTags = await this.postHelper.createTags(tags, queryRunner);
      const createdPost = queryRunner.manager.create(Post, {
        ...inputPost,
        category: newCategory,
        tags: newTags,
      });
      const newPost = await queryRunner.manager.save(createdPost);
      await queryRunner.commitTransaction();
      return newPost;
    } catch (error) {
      console.log(error);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async findAll() {
    return await this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.category', 'category')
      .leftJoinAndSelect('post.tags', 'tag')
      .select([
        'post.id',
        'post.title',
        'post.content',
        `DATE_FORMAT(post.createdAt, '%Y-%m-%d') AS post_createdAt`,
        'GROUP_CONCAT(DISTINCT category.id) AS category_id',
        'category.keyword',
        'GROUP_CONCAT(tag.id ORDER BY tag.id) AS tag_id',
        'GROUP_CONCAT(tag.keyword ORDER BY tag.id) AS tag_keyword',
      ])
      .groupBy('post.id')
      .getRawMany();
  }

  async findOneById(id: number) {
    return await this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.category', 'category')
      .leftJoinAndSelect('post.tags', 'tag')
      .where('post.id =:id', { id })
      .select([
        'post.id',
        'post.title',
        'post.content',
        `DATE_FORMAT(post.createdAt, '%Y-%m-%d') AS post_createdAt`,
        'GROUP_CONCAT(DISTINCT category.id) AS category_id',
        'category.keyword',
        'GROUP_CONCAT(tag.id ORDER BY tag.id) AS tag_id',
        'GROUP_CONCAT(tag.keyword ORDER BY tag.id) AS tag_keyword',
      ])
      .getRawOne();
  }

  async findOneByTitle(title: string) {
    return await this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.category', 'category')
      .leftJoinAndSelect('post.tags', 'tag')
      .where('post.title =:title', { title })
      .select([
        'post.id',
        'post.title',
        'post.content',
        `DATE_FORMAT(post.createdAt, '%Y-%m-%d') AS post_createdAt`,
        'GROUP_CONCAT(DISTINCT category.id) AS category_id',
        'category.keyword',
        'GROUP_CONCAT(tag.id ORDER BY tag.id) AS tag_id',
        'GROUP_CONCAT(tag.keyword ORDER BY tag.id) AS tag_keyword',
      ])
      .getOne();
  }

  async update(updatePostDto: UpdatePostDto): Promise<Post> {
    const { category, tags, ...inputPost } = updatePostDto;
    const prevPost = await this.postRepository.findOne({
      where: { id: inputPost.id },
      relations: {
        category: true,
        tags: true,
      },
    });
    const prevCategoryKeyword = prevPost.category.keyword;
    const prevTagKeywords = prevPost.tags.map((tag) => tag.keyword);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const updatedCategory = await this.postHelper.updateCategory(
        prevCategoryKeyword,
        category,
        queryRunner,
      );
      const updatedTags = await this.postHelper.updateTags(
        prevTagKeywords,
        tags,
        queryRunner,
      );
      const updatedPost = await queryRunner.manager.save(Post, {
        ...inputPost,
        category: updatedCategory,
        tags: updatedTags,
      });
      await queryRunner.commitTransaction();
      return updatedPost;
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async remove(id: number) {
    const { category_id: categoryId, tag_id: tagIdString } =
      await this.findOneById(id);
    const tagIds = tagIdString.split(',');

    await this.postRepository.delete(id);
    await this.categoryService.remove(categoryId);
    await this.postsRelation.removePostTags(tagIds);

    return `This action removes a #${id} post`;
  }
}
