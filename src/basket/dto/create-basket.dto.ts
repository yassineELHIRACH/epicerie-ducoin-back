import { IsNumber, IsString } from 'class-validator';

export class CreateBasketDto {
    @IsNumber()
    price: number;
}