import { IsArray, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsString()
  readonly category: string;

  @IsArray()
  @IsString({ each: true })
  readonly tags: string[];
}
