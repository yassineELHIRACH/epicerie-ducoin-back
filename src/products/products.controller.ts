import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { AdminGuard } from 'src/guards/admin-user.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

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

  @Get('/type/:type')
  findByProductType(@Param('type') productType: string): Promise<Product[]> {
    return this.productsService.findByProductType(productType);
  }

  @Get('/id/:id')
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

  @Put('/id/:id')
  async update(
    @Param('id') productId: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    await this.productsService.update(productId, updateProductDto);
    return this.productsService.findByProductId(productId);
  }

  //@UseGuards(AdminGuard)
  @Delete('/id/:id')
  async remove(@Param('id') idProduct: number) {
    await this.productsService.delete(idProduct);
    return 'Produit supprimé avec succès';
  }
}
