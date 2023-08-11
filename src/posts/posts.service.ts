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
    const tags = await this.tagService.create({ tags: inputTags });

    const existingPost = await this.postRepository.findOne({
      where: { title: post.title },
    });

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

  findOne(id: number) {
    // TODO 추후 DB 연결 예정
    const dummyPostDataIds = dummyPostData.map((post) => post.id);
    const postId = dummyPostDataIds.find((PostId) => PostId === id);

    if (postId == null) {
      throw new Error('No posts match id.');
    }

    return dummyPostData[id - 1];
  }

  update(title: string, updatePostDto: UpdatePostDto) {
    return `This action updates a #${title} post`;
  }

  remove(title: string) {
    return `This action removes a #${title} post`;
  }
}
