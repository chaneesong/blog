import { IsString, MinLength } from 'class-validator';

export class SignInDto {
  @IsString()
  @MinLength(1)
  id: string;

  @IsString()
  @MinLength(1)
  password: string;
}
