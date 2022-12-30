import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from '../dtos/create-product.dto';

@Controller('products')
export class ProductController {
  @Post('')
  async create(@Body() dto: CreateProductDto): Promise<unknown> {
    console.log(dto);

    return { success: true };
  }
}
