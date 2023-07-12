import { Injectable } from '@nestjs/common';
import { dummyPostData } from 'src/dummyData';

@Injectable()
export class PostsService {
  create(createPostDto: any) {
    return 'This action adds a new post';
  }

  findAll() {
    return dummyPostData;
  }

  findOne(id: number) {
    const dummyPostDataIds = dummyPostData.map((post) => post.id);
    const postId = dummyPostDataIds.find((PostId) => PostId === id);

    if (postId == null) {
      throw new Error('No posts match id.');
    }

    return dummyPostData[id - 1];
  }

  update(id: number, updatePostDto: any) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
