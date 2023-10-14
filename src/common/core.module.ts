import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async () => ({
        global: true,
        secret: process.env.JWT_CONSTANTS,
        signOptions: { expiresIn: '60s' },
      }),
    }),
  ],
  exports: [JwtModule],
})
export class CoreModule {}
