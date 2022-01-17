import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MainRouteController } from './main-route/main-route.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { reflect-metadata } from '@nestjs/reflect-metadata';

@Module({
  imports: [TasksModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [MainRouteController],
})
export class AppModule {}
