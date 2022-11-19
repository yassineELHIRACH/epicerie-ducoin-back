import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post('/:type')
  createProductByType(
    @Param('type') productType: string, 
    @Body() newProduct: CreateProductDto,
    ): Promise<Product> {
    return this.productsService.createProductByType(productType, newProduct);
  }

  @Get()
  findAllProducts(): Promise<Product[]> {
    return this.productsService.findAllProducts();
  }

  @Get('/:id')
  findByProductId(@Param('id') productId: number): Promise<Product[]> {
    return this.productsService.findByProductId(productId);
  }

  @Get('/:type/:id')
  findByidAndTypeproduct(
    @Param('type') productType: string,
    @Param('id') productId: number,
  ): Promise<Product[]> {
    return this.productsService.findByidAndTypeproduct(
      productType,
      Number(productId),
    );
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productsService.update(+id, updateProductDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productsService.remove(+id);
  // }
}
