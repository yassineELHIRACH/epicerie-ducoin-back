import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Basket } from './entities/basket.entity';

@Injectable()
export class BasketRepository extends Repository<Basket> {
  constructor(private dataSource: DataSource) {
    super(Basket, dataSource.createEntityManager());
  }
}
