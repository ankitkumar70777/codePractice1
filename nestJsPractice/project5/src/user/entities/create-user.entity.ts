import {
  Entity,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
// import { Exclude } from 'class-transformer';

@Entity()
export class CreateUser {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  // @Exclude()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('data has been inserted with ', this.id);
  }
}
