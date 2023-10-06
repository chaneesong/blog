import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class PostDataTransformInterceptor implements NestInterceptor {
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
    return {
      id: data.post_id,
      title: data.post_title,
      content: data.post_content,
      createdAt: data.post_createdAt,
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
}
