import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CheckIdInterceptor implements NestInterceptor {
  constructor(private logger: Logger) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const { method, url, ...request } = context.getArgByIndex(0);
    const id = +request.params.id;

    if (isNaN(id) || id < 0) {
      throw new BadRequestException(
        'id는 0보다 큰 정수여야 합니다.',
        'id format exception',
      );
    }

    return next.handle().pipe(
      tap((data) => {
        console.log(data);
        return this.logger.log(
          `Response from ${method} ${url} \n response: ${JSON.stringify(data)}`,
        );
      }),
    );
  }
}
