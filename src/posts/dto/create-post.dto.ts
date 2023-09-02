import { IsArray, IsString, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @MinLength(1)
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsString()
  @MinLength(1)
  readonly category: string;

  @IsArray()
  @IsString({ each: true })
  @MinLength(1, { each: true })
  readonly tags: string[];
}
