import { IsNumber } from 'class-validator';

export class CreateBasketDto {
  @IsNumber()
  price: number;
}
