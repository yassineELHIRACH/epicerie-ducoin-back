import { Basket } from 'src/basket/entities/basket.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  idPanier: number;

  @Column({ nullable: false })
  role: string;

  @OneToOne(() => Basket)
  @JoinColumn()
  basketId: Basket;
}
