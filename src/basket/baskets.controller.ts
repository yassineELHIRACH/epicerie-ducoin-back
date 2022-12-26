import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { Basket } from './entities/basket.entity';

@Controller('basket')
export class BasketController {
  constructor(private readonly basketsService: BasketsService) {}

  @Post('/:price')
  createBasketByPrice(
    @Param('price') basketPrice: number,
    @Body() newBasket: CreateBasketDto,
  ): Promise<Basket> {
    return this.basketsService.createBasketByPrice(basketPrice, newBasket);
  }

  @Get()
  findAllBaskets(): Promise<Basket[]> {
    return this.basketsService.findAllBaskets();
  }

  @Get('/:id')
  findByProductId(@Param('id') basketId: number): Promise<Basket[]> {
    return this.basketsService.findByBasketId(basketId);
  }

  // @Get('/:type/:id')
  // findByidAndTypeproduct(
  //   @Param('type') productType: string,
  //   @Param('id') productId: number,
  // ): Promise<Basket[]> {
  //   return this.basketsService.findByidAndTypeBasket(
  //     productType,
  //     Number(productId),
  //   );
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productsService.update(+id, updateProductDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productsService.remove(+id);
  // }
}
