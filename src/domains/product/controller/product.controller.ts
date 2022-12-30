import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { CheckExists } from '../../../shared/decorators/check-exists.decorator';
import { ParamTypes } from '../../../shared/enums/param-types';
import { Product } from '../database/product.entity';

@Controller('products')
export class ProductController {
  @CheckExists({
    entity: Product,
    options: {
      paramType: ParamTypes.URL,
    },
  })
  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number): Promise<unknown> {
    console.log(id);
    return { id: 1, name: 'test' };
  }

  @Post('')
  async create(@Body() dto: CreateProductDto): Promise<unknown> {
    return { success: true };
  }
}
