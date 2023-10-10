import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private userId: string;
  private hash: string;
  constructor(
    private jwtService: JwtService, //
  ) {
    this.userId = process.env.USER_ID;
    this.hash = process.env.USER_HASH;
  }

  async signIn(userId: string, password: string): Promise<any> {
    const result = await bcrypt.compare(password, this.hash);
    if (!result || userId !== this.userId) {
      throw new UnauthorizedException();
    }
    const payload = { sub: this.userId, username: this.userId };
    const result2 = {
      access_token: await this.jwtService.signAsync(payload),
    };
    console.log('test');
    return result2;
  }
}
