import { IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { Categories } from './categorie';

export class CreateProductDto {
  @IsEnum(Categories)
  @IsNotEmpty()
  type: string;

  @IsString()
  title: string;

  @IsNumber()
  price: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsNotEmpty()
  @IsNumberString()
  @MinLength(1)
  @MaxLength(5)
  quantity: number;

  @IsOptional()
  @IsString()
  image: string;
}
