import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class DateTransformInterceptor implements NestInterceptor {
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
          return data.map((item) => this.dateTransform(item));
        }
        return this.dateTransform(data);
      }),
    );
  }

  private dateTransform(res: Post): Post {
    if (res.createdAt instanceof Date) {
      const createdAt = new Date(res.createdAt.getTime() + this.KR_TIME);
      res.createdAt = createdAt.toISOString().split('T')[0];
    }

    return res;
  }
}
