import { PartialType } from '@nestjs/mapped-types';
import { CreateBasketDto } from './create-basket.dto';

export class UpdateProductDto extends PartialType(CreateBasketDto) {}
