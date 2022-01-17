import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.structure';
import { TaskStatus } from './tasks.structure';
import { createTaskDto } from './tasksDto/createTaskDto';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  displayAllTasks(): Tasks[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(
    @Body() createTaskDto: createTaskDto,
    // @Body('title') title: string,
    // @Body('description') description: string,
  ): Tasks {
    console.log('title: ', createTaskDto.title);
    console.log('description: ', createTaskDto.description);
    return this.tasksService.createTask(createTaskDto);
  }
}
