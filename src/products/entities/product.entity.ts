import { Basket } from 'src/basket/entities/basket.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  type: string;

  @Column()
  title: string;

  @Column({ type: 'text', default: null })
  description: string;

  @Column()
  price: number;

  @Column({ default: null }) 
  image: string;

  @Column({ nullable: false })
  quantity: number;

  @ManyToOne(() => Basket, (basket) => basket.products)
  basket: Basket;
}
