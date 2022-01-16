// import { UsersController } from './../../../mycar/src/users/users.controller';
import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUsersDto } from './dtos/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() body: CreateUsersDto) {
    return await this.userService.createUser(body);
  }

  @Get('/getAllUsers')
  async getAllUser() {
    return this.userService.getAllUsers();
  }

  @Get('/getOneUser/:name')
  async getOneUser(@Param('name') nameToFind: string) {
    console.log('nameToFind', nameToFind);
    return await this.userService.getOneUser(nameToFind);
  }
}
