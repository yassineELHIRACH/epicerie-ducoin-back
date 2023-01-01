import { IsNumber } from 'class-validator';
import { ProductSent } from './Types';

export class CreateBasketDto {

  @IsNumber()
  price: number;

  products: ProductSent[];
}
