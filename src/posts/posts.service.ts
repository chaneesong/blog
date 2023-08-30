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
      category: inputCategory,
    });
    const tags = await this.postsRelation.createPostTags(inputTags);

    const post = this.postRepository.create({ ...inputPost, category, tags });

    const result = await this.postRepository.save(post);
    return result;
  }

  async findAll() {
    return await this.postRepository.find({ relations: ['category', 'tags'] });
  }

  async findOneById(id: number) {
    return await this.postRepository.findOne({
      where: { id },
      relations: ['category', 'tags'],
    });
  }

  async findOneByTitle(title: string) {
    return await this.postRepository.findOne({
      where: { title },
      relations: ['category', 'tags'],
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const {
      category: updatedCategory,
      tags: updatedTags,
      ...updatedPost
    } = updatePostDto;

    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
