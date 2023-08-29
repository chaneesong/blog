import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
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
    return await this.tagRepository.find();
  }

  async findOneById(id: string) {
    return await this.tagRepository.findOne({ where: { id } });
  }

  async findOneByKeyword(keyword: string) {
    return await this.tagRepository.findOne({ where: { keyword } });
  }

  update(id: string, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
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
