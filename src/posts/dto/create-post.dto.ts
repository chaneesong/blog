import { IsArray, IsDateString, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsDateString()
  readonly createdAt: Date;

  @IsString()
  readonly category: string;

  @IsArray()
  @IsString({ each: true })
  readonly tags: string[];
}
