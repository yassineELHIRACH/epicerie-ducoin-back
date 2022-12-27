import { Module } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { BasketController } from './baskets.controller';
import { BasketRepository } from './baskets.repository';
import { Product as ProductsEntity } from 'src/products/entities/product.entity';
import { ProductRepository } from 'src/products/products.repository';

@Module({
  imports: [ProductsEntity],
  controllers: [BasketController],
  providers: [BasketsService, BasketRepository, ProductRepository],
})
export class BasketsModule {}
