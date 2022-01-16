import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreateReport {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  prise: string;
}
