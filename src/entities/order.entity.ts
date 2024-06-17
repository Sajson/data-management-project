import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @ManyToOne(() => User)
  user: User;

  @CreateDateColumn()
  order_date: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  total_amount: number;

  @Column()
  status: string;
}
