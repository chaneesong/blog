import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async create(createTagDto: CreateTagDto) {
    const { keyword } = createTagDto;

    const existingTag = await this.findOneByKeyword(keyword);

    if (existingTag) {
      return existingTag;
    }

    const newTag = this.tagRepository.create({ keyword });
    await this.tagRepository.save(newTag);

    return newTag;
  }

  async findAll() {
    return await this.tagRepository.find({ relations: ['posts'] });
  }

  async findOneById(id: string) {
    return await this.tagRepository
      .createQueryBuilder('tag')
      .leftJoinAndSelect('tag.posts', 'post')
      .leftJoinAndSelect('post.category', 'category')
      .where('tag.id = :id', { id })
      .select([
        'tag.id',
        'tag.keyword',
        'post.id',
        'post.title',
        'post.content',
        'post.createdAt',
        'category.id',
        'category.keyword',
      ])
      .getOne();
  }

  async findOneByKeyword(keyword: string) {
  async findAllPostsOfTag(keyword: string) {
    return await this.tagRepository
      .createQueryBuilder('tag')
      .leftJoinAndSelect('tag.posts', 'post')
      .leftJoinAndSelect('post.category', 'category')
      .where('tag.keyword = :keyword', { keyword })
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

  async removeById(id: string): Promise<string> {
    const postOfTag = await this.tagRepository.findOne({
      where: { id },
      relations: ['posts'],
    });

    if (postOfTag.posts.length) {
      return `You cannot delete it because there are related data.`;
    }

    const tagToDelete = await this.tagRepository.delete({ id });

    if (!tagToDelete.affected) {
      return `The data was not deleted.`;
    }

    return `${id} tag deleted successfully.`;
  }

  async removeByKeyword(keyword: string): Promise<string> {
    const postOfTag = await this.tagRepository.findOne({
      where: { keyword },
      relations: ['posts'],
    });

    if (postOfTag.posts.length) {
      return `You cannot delete it because there are related data.`;
    }

    const tagToDelete = await this.tagRepository.delete({ keyword });

    if (!tagToDelete.affected) {
      return `The data was not deleted.`;
    }

    return `${keyword} tag deleted successfully.`;
  }
}
