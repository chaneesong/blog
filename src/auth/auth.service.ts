import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private userId: string;
  private hash: string;
  constructor() {
    this.userId = process.env.USER_ID;
    this.hash = process.env.USER_HASH;
  }

  async signIn(userId: string, password: string) {
    const result = bcrypt.compare(password, this.hash);
    if (!result || userId !== this.userId) {
      throw new UnauthorizedException();
    }
    return userId;
  }
}
