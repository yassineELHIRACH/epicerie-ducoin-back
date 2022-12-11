import { Injectable } from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { Basket } from './entities/basket.entity';
import { IBasket } from './entities/baskets.interface';
import { BasketRepository } from './baskets.repository';

@Injectable()
export class BasketsService {
  constructor(private readonly basketRepository: BasketRepository) {}

  createBasketByPrice(
    basketPrice: number, 
    newBasket: Omit<IBasket, 'id' | 'price'>,
    ): Promise<Basket> {
    const basketToCreate = {
      ...newBasket,
      price: basketPrice,
    };
    return this.basketRepository.save(basketToCreate);
  }

  findAllBaskets(): Promise<Basket[]> {
    return this.basketRepository.find();
  }

  findByBasketId(basketId: number): Promise<Basket[]>  {
    return this.basketRepository.find({
      where: {
        id: basketId,
      },
    });
  }

  // findByidAndTypeproduct(productType: string, productId: number): Promise<Product[]>  {
  //   return this.productRepository.find({
  //     where: {
  //       id: productId,
  //       type: productType,
  //     },   
  //   });
  // }

  // findByTypeProduct(productType: string): Promise<Product[]> {
  //   return this.productRepository.find({
  //     where: {
  //       type: productType
  //     }
  //   })
  // }

  // //TODO
  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
