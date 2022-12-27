import { Injectable } from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { Basket } from './entities/basket.entity';
import { BasketRepository } from './baskets.repository';
import { ProductRepository } from 'src/products/products.repository';

@Injectable()
export class BasketsService {
  constructor(private readonly basketRepository: BasketRepository,
    private readonly productRepository: ProductRepository) {}

  async createBasket(basketDTO: CreateBasketDto) {
    const productId = [];
    let totalPrice = 0;

    basketDTO.products.map((p) => {
      productId.push(p.id),
      totalPrice += p.price
    });

    const dbProducts = await this.productRepository.find();

    const Products = [];

    dbProducts.map((p) => {
      if (productId.includes(p.id)) {
        Products.push(p);
      }
    });

    const myDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const dataBasket = {
      price: totalPrice,
      date: myDate,
      status: false,
    };
    const newBasket = this.basketRepository.create({ ...dataBasket });

    newBasket.products = Products;

    return await this.basketRepository.save(newBasket);
  }

  findAllBaskets(): Promise<Basket[]> {
    return this.basketRepository.find();
  }

  findByBasketId(id: number): Promise<Basket> {
    const basket = this.basketRepository.createQueryBuilder()
      .leftJoinAndSelect('products', 'product')
      .where('id= :basketId', { basketId: id})
      .getOne();
      return basket;
  }

  async confirmStatus(basketId) {
    const id = parseInt(basketId);
    return await this.basketRepository.update({ id }, { status: true })
  }


  async remove(id: number) {
    return this.basketRepository
      .createQueryBuilder()
      .delete()
      .from(Basket)
      .where('id= :id', { id })
      .execute();
  }
}
