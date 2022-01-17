import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks.structure';
import { TaskStatus } from './tasks.structure';
import { v1 as uuid } from 'uuid';
import { createTaskDto } from './tasksDto/createTaskDto';

@Injectable()
export class TasksService {
  private tasks: Tasks[] = [];
  getAllTasks(): Tasks[] {
    return this.tasks;
  }

  createTask(createTaskDto): Tasks {
    const { title, description } = createTaskDto;
    const task: Tasks = {
      id: uuid(),
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
