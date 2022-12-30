import { Module } from '@nestjs/common';
import { ProductController } from './controller/product.controller';

@Module({
  imports: [
    // TypeOrmModule.forFeature([Product])
  ],
  controllers: [ProductController],
  providers: [],
})
export class ProductModule {}
