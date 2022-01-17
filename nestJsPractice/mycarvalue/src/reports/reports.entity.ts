import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class ReportsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  prise: number;
}
