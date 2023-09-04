import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { validationSchema } from './config/validationSchema';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { TagModule } from './tag/tag.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      isGlobal: true,
      validationSchema,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // 서버가 재시작 할 때 DB를 초기화하는 역할, 프로덕션에서는 false로 변경
      synchronize: process.env.DEVELOPMENT === 'true',
      verboseRetryLog: process.env.DEVELOPMENT === 'true',
    }),
    PostsModule,
    CategoryModule,
    TagModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    if (process.env.NODE_ENV === 'development') {
      consumer.apply(LoggerMiddleware).forRoutes(PostsController);
    }
  }
}
