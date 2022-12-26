import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  type: string;

  @IsString()
  title: string;

  @IsNumber()
  price: number;

  @IsString()
  @IsOptional()
  description: string;
}
