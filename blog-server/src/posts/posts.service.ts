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
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
    private readonly categoryService: CategoryService,
    private readonly postsRelation: PostsRelation,
    private dataSource: DataSource,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const {
      category: inputCategory,
      tags: inputTags,
      ...inputPost
    } = createPostDto;
    const existingPost = await this.findOneByTitle(inputPost.title);

    if (existingPost) {
      return existingPost;
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const category = this.categoryRepository.create({
        keyword: inputCategory,
      });
      const savedCategory = await queryRunner.manager.save(category);
      const tags = await Promise.all(
        inputTags.map((keyword): Promise<Tag> => {
          const tag = this.tagRepository.create({ keyword });
          return queryRunner.manager.save(tag);
        }),
      );
      const post = this.postRepository.create({ ...inputPost });
      const savedPost = await queryRunner.manager.save(Post, {
        ...post,
        category: savedCategory,
        tags,
      });
      await queryRunner.commitTransaction();
      return savedPost;
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
    const { inputCategory, inputTags, inputPost, prevCategory, prevTags } =
      await this.convertUpdatePostDto(updatePostDto);

    const category = await this.postsRelation.updatePostCategory({
      prevCategory: prevCategory.id,
      newCategory: inputCategory,
    });

    const prevTagKeywords = prevTags.map((prevTag) => prevTag.keyword);

    const tags = await this.postsRelation.updatePostTags({
      prevTags: prevTagKeywords,
      newTags: inputTags,
    });

    const result = await this.postRepository.save({
      ...inputPost,
      category,
      tags,
    });

    await this.postsRelation.removePrevElement({
      categoryId: prevCategory.id,
      tagKeywords: prevTagKeywords,
    });

    return result;
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

  private async convertUpdatePostDto(
    updatePostDto: UpdatePostDto,
  ): Promise<ConvertUpdatePostDto> {
    const {
      category: inputCategory,
      tags: inputTags,
      ...inputPost
    } = updatePostDto;
    const { category_id, category_keyword, tag_id, tag_keyword } =
      await this.findOneById(inputPost.id);
    const prevCategory = this.convertElementOfCategory(
      category_id,
      category_keyword,
    );
    const prevTags = this.convertElementOfTags(tag_id, tag_keyword);
    return {
      inputCategory,
      inputTags,
      inputPost,
      prevCategory,
      prevTags,
    };
  }

  private convertElementOfCategory(id: string, keyword: string): CategoryCore {
    return { id, keyword };
  }

  private convertElementOfTags(ids: string, keywords: string): TagCore[] {
    const idsArr = ids.split(',');
    const keywordsArr = keywords.split(',');

    const result = idsArr.map(
      (id, idx): TagCore => ({
        id,
        keyword: keywordsArr[idx],
      }),
    );

    return result;
  }
}
