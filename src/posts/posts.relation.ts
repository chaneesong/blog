import { Injectable } from '@nestjs/common';
import { TagService } from 'src/tag/tag.service';

@Injectable()
export class PostsRelation {
  constructor(
    private readonly tagService: TagService, //
  ) {}

  async createPostTags(keywords: string[]) {
    const tagsPromise = keywords.map((keyword) =>
      this.tagService.create({ keyword }),
    );

    const tags = Promise.all(tagsPromise);

    return tags;
  }
}
