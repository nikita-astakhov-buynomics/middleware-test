import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';

@Controller('products')
export class ProductController {
  @Post('')
  async create(@Body() dto: CreateProductDto): Promise<unknown> {
    return { success: true };
  }
}
