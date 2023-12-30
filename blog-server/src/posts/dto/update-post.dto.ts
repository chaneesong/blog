import { CreatePostDto } from './create-post.dto';
import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdatePostDto extends CreatePostDto {
  @IsNumber()
  @Type(() => Number)
  readonly id: number;
}
