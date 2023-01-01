import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, BadRequestException, HttpStatus } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { Basket } from './entities/basket.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('basket')
export class BasketController {
  constructor(private readonly basketsService: BasketsService) {}

  @Post('/create')
  createBasket(
    @Body() newBasketDto: CreateBasketDto,
  ): Promise<Basket> {
    return this.basketsService.createBasket(newBasketDto);
  }

  @Get()
  //@UseGuards(JwtAuthGuard)
  findAllBaskets(): Promise<Basket[]> {
    return this.basketsService.findAllBaskets();
  }

  @Get('/:id')
  findBasketById(@Param('id') basketId: number): Promise<Basket> {
    return this.basketsService.findByBasketId(basketId);
  }

  @Put('confirm/:id')
  //@UseGuards(JwtAuthGuard)
  async confirmBasket(@Param('id') id: number) {
    const basket = await this.basketsService.findByBasketId(id);
    if (!basket) {
      throw new BadRequestException([`Basket with id: ${id} not found`]);
    }

    await this.basketsService.confirmStatus(id);

    return { message: 'basket Confirmed', status: HttpStatus.OK };
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.basketsService.remove(id);
  }
}
