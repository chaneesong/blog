import 'dotenv/config';
import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.MYSQL_PASSWORD,
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // 서버가 재시작 할 때 DB를 초기화하는 역할, 프로덕션에서는 false로 변경
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
