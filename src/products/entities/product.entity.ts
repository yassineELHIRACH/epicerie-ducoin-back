import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  type: string;

  @Column()
  title: string;

  @Column({ type: 'text', default: null })
  description: string;

  @Column()
  price: number;

  @Column({ default: null })
  image: string;
}
