import { TaskEntity } from './task.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(TaskEntity)
export class TasksRepository extends Repository<TaskEntity>{
    
}