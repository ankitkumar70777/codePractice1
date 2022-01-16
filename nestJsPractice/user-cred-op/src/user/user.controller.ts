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

  @Post('/removeOne/:name')
  async removeUser(@Param('name') nameToRemove: string) {
    console.log('nameToRemove-----------', nameToRemove);
    return await this.userService.removeOneUser(nameToRemove);
  }

  @Post('/updateOne/:name')
  async updateUser(
    @Param('name') nameToUpdate: string,
    @Body() body: CreateUsersDto,
  ) {
    console.log('nameToUpdate::', nameToUpdate);
    return await this.userService.updateOneUser(nameToUpdate, body);
  }

  @Get('/axios')
  async axiosCall() {
    console.log('controller');
    return await this.userService.axiosCall();
  }

  @Post('/create-user2')
  async createUser2(@Body() body: CreateUsersDto): Promise<any> {
    return await this.userService.createUser2(body);
  }

  @Post('/update-user2')
  async updateUser2(@Body() body: CreateUsersDto): Promise<any> {
    return await this.userService.updateUser2(body);
  }
}
