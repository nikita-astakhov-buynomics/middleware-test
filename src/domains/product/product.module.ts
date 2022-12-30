import { Module } from '@nestjs/common';
import { ProductController } from './controller/product.controller';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [],
})
export class ProductModule {}
