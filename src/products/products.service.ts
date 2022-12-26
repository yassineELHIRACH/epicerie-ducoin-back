import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { IProduct } from './entities/products.interface';
import { ProductRepository } from './products.repository';
import { FilterProductDTO } from './dto/filter-product.dto';

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

  //Servira pour le filtre sur les produits côté front
  async findByFilter(filterProductDTO: FilterProductDTO): Promise<Product[]> {
    const { type, search } = filterProductDTO;
    let products = await this.findAllProducts();

    if (search) {
      products = products.filter(
        (product) =>
          product.title.includes(search) ||
          product.description.includes(search),
      );
    }

    if (type) {
      products = products.filter((product) => product.type === type);
    }

    return products;
  }

  findAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findByProductId(productId: number): Promise<Product[]> {
    return this.productRepository.find({
      where: {
        id: productId,
      },
    });
  }

  findByProductType(productType: string): Promise<Product[]> {
    return this.productRepository.find({
      where: {
        type: productType,
      },
    });
  }

  findByidAndTypeproduct(
    productType: string,
    productId: number,
  ): Promise<Product[]> {
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
        type: productType,
      },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository
      .createQueryBuilder()
      .update()
      .set({
        type: updateProductDto.type,
        title: updateProductDto.title,
        description: updateProductDto.description,
        price: updateProductDto.price,
      })
      .where('id= :id', { id })
      .execute();
  }

  delete(id: number) {
    return this.productRepository
      .createQueryBuilder()
      .delete()
      .from(Product)
      .where('id= :id', { id })
      .execute();
  }
}
