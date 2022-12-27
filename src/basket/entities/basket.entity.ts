import { Product } from 'src/products/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';

@Entity()
export class Basket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @CreateDateColumn()
  date: Date;

  @Column()
  status: boolean;

  @OneToMany(() => Product, (product) => product.basket)
  products: Product[];

}
