import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { IProduct } from './entities/products.interface';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductRepository) {}

  createProductByType(
    productType: string, 
    newProduct: Omit<IProduct, 'id' | 'type'>,
    ): Promise<Product> {
    const productToCreate = {
      ...newProduct,
      type: productType,
    };
    return this.productRepository.save(productToCreate);
  }

  findAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findByProductId(productId: number): Promise<Product[]>  {
    return this.productRepository.find({
      where: {
        id: productId,
      },
    });
  }

  findByidAndTypeproduct(productType: string, productId: number): Promise<Product[]>  {
    return this.productRepository.find({
      where: {
        id: productId,
        type: productType,
      },   
    });
  }

  findByTypeProduct(productType: string): Promise<Product[]> {
    return this.productRepository.find({
      where: {
        type: productType
      }
    })
  }

  //TODO
  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
