import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from './tasks.structure';

@Entity()
export class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  status: TaskStatus;
}
