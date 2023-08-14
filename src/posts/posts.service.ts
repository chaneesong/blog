import { Injectable } from '@nestjs/common';
import { dummyPostData } from 'src/dummyData';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CategoryService } from 'src/category/category.service';
import { TagService } from 'src/tag/tag.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly categoryService: CategoryService,
    private readonly tagService: TagService,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const { category: inputCategory, tags: inputTags, ...post } = createPostDto;
    const category = await this.categoryService.create({
      category: inputCategory,
    });
    const tagsPromise = inputTags.map((keyword) =>
      this.tagService.create({ keyword }),
    );
    const tags = await Promise.all(tagsPromise);
    const existingPost = await this.findOneByTitle(post.title);

    if (existingPost) {
      return existingPost;
    }

    const newPost = this.postRepository.create(post);

    return await this.postRepository.save({
      ...newPost,
      category,
      tags,
    });
  }

  findAll() {
    return dummyPostData;
  }

  async findOneById(id: number) {
    return await this.postRepository.findOneBy({ id });
  }

  async findOneByTitle(title: string) {
    return await this.postRepository.findOne({ where: { title } });
  }

  update(title: string, updatePostDto: UpdatePostDto) {
    const {
      category: updateCategory,
      tags: updateTags,
      ...post
    } = updatePostDto;
    return `This action updates a #${title} post`;
  }

  remove(title: string) {
    return `This action removes a #${title} post`;
  }
}
