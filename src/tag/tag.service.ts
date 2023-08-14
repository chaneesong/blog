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

  update(updateTagDto: UpdateTagDto) {
    const { keyword } = updateTagDto;
    const existingTag = this.findOneByKeyword(keyword);
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
