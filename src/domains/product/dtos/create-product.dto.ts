import { IsString, Length } from 'class-validator';

export class CreateProductDto {
  @Length(1, 255)
  @IsString()
  name: string;
}
