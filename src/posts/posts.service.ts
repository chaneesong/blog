import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CategoryService } from 'src/category/category.service';
import { PostsRelation } from './posts.relation';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly categoryService: CategoryService,
    private readonly postsRelation: PostsRelation,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const {
      category: inputCategory,
      tags: inputTags,
      ...inputPost
    } = createPostDto;
    const existingPost = await this.findOneByTitle(inputPost.title);

    if (existingPost) {
      return existingPost;
    }

    const category = await this.categoryService.create({
      keyword: inputCategory,
    });
    const tags = await this.postsRelation.createPostTags(inputTags);

    const post = this.postRepository.create({ ...inputPost, category, tags });

    const result = await this.postRepository.save(post);
    return result;
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
        'post.createdAt',
        'category.id',
        'category.keyword',
        'tag.id',
        'tag.keyword',
      ])
      .getMany();
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
        'post.createdAt',
        'category.id',
        'category.keyword',
        'tag.id',
        'tag.keyword',
      ])
      .getOne();
  }

  async findOneByTitle(title: string) {
    return await this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.category', 'category')
      .leftJoinAndSelect('post.tags', 'tag')
      .where('post.id =:id', { title })
      .select([
        'post.id',
        'post.title',
        'post.content',
        'post.createdAt',
        'category.id',
        'category.keyword',
        'tag.id',
        'tag.keyword',
      ])
      .getOne();
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const {
      inputCategory,
      inputTags,
      inputPost,
      prevCategory,
      prevTags,
      prevPost,
    } = await this.convertUpdatePostDto(updatePostDto);

    const category = await this.postsRelation.updatePostCategory({
      post: prevPost,
      prevCategory: prevCategory.id,
      newCategory: inputCategory,
    });

    const prevTagKeywords = prevTags.map((prevTag) => prevTag.keyword);

    const tags = await this.postsRelation.updatePostTags({
      post: prevPost,
      prevTags: prevTagKeywords,
      newTags: inputTags,
    });

    return await this.postRepository.save({ ...inputPost, category, tags });
  }

  async remove(id: number) {
    const { category, tags } = await this.findOneById(id);

    await this.categoryService.remove(category.id);
    const tagIds = tags.map((tag) => tag.id);
    await this.postsRelation.removePostTags(tagIds);
    await this.postRepository.delete(id);

    return `This action removes a #${id} post`;
  }

  private async convertUpdatePostDto(updatePostDto: UpdatePostDto) {
    const {
      category: inputCategory,
      tags: inputTags,
      ...inputPost
    } = updatePostDto;
    const {
      category: prevCategory,
      tags: prevTags,
      ...prevPost
    } = await this.findOneById(updatePostDto.id);
    return {
      inputCategory,
      inputTags,
      inputPost,
      prevCategory,
      prevTags,
      prevPost,
    };
  }
}
