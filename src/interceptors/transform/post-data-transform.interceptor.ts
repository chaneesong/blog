import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class PostDataTransformInterceptor implements NestInterceptor {
  private KR_TIME: number;

  constructor() {
    this.KR_TIME = 9 * 60 * 60;
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        if (Array.isArray(data)) {
          return data.map((item) => this.dataTransform(item));
        }
        return this.dataTransform(data);
      }),
    );
  }

  private dataTransform(data: PostRawData): Post {
    console.log(data);
    return {
      id: data.post_id,
      title: data.post_title,
      content: data.post_content,
      createdAt: this.dateTransform(new Date(data.post_createdAt)),
      category: {
        id: data.category_id,
        keyword: data.category_keyword,
      },
      tags: this.concatTags(
        this.splitTags(data.tag_id),
        this.splitTags(data.tag_keyword),
      ),
    };
  }

  private splitTags(tags: string): string[] {
    return tags.split(',');
  }

  private concatTags(tagIds: string[], tagKeywords: string[]): Tag[] {
    return tagIds.map(
      (tag, idx): Tag => ({ id: tag, keyword: tagKeywords[idx] }),
    );
  }

  private dateTransform(createdAt: Date): string {
    const KRcreatedAt = new Date(createdAt.getTime() + this.KR_TIME);
    return KRcreatedAt.toISOString().split('T')[0];
  }
}
