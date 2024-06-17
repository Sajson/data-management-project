import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'Unikatowy identyfikator uzytkownika',
  })
  user_id: number;

  @Column({ unique: true })
  @ApiProperty({
    example: 'jan_kowalski',
    description: 'Unikatowa nazwa uzytkownika',
  })
  username: string;

  @Column()
  @ApiProperty({
    example: 'password123',
    description: 'Haslo uzytkownika w postaci zahashowanej',
  })
  password: string;

  @Column({ unique: true })
  @ApiProperty({ example: 'amokrzycki@mail.com', description: 'Adres email' })
  email: string;

  @Column()
  @ApiProperty({ example: 'Adam', description: 'Imiel uzytkownika' })
  first_name: string;

  @Column()
  @ApiProperty({ example: 'Kowalski', description: 'Nazwisko uzytkownika' })
  last_name: string;

  @Column('text')
  @ApiProperty({
    example: 'ul. Kowalska 12',
    description: 'Adres zamieszkania',
  })
  address: string;

  @Column()
  @ApiProperty({ example: '123456789', description: 'Numer telefonu' })
  phone: string;

  @CreateDateColumn()
  @ApiProperty({
    example: '2021-01-01T12:00:00.000Z',
    description: 'Data utworzenia uzytkownika',
  })
  created_at: Date;
}
