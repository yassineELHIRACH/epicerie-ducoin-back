import { Module } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { BasketController } from './baskets.controller';
import { BasketRepository } from './baskets.repository';

@Module({
  controllers: [BasketController],
  providers: [BasketsService, BasketRepository],
})
export class BasketsModule {}
