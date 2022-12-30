import { Module } from '@nestjs/common';
import { ProductModule } from './domains/product/product.module';
import { APP_GUARD } from '@nestjs/core';
import { CheckExistsGuard } from './shared/guards/check-exists.guard';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      autoLoadEntities: true,
      synchronize: false,
    }),
    ProductModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: CheckExistsGuard,
    },
  ],
})
export class AppModule {}
