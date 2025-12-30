import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto, CreateUserQueryDto } from './dto/user.dto';

@Controller('/user')
export class UserController {
  @Get()
  getUsers() {
    return 'get request to fetch users';
  }

  @Post()
  addUser(
    @Body() createUserDto: CreateUserDto,
    // entire url is always a string so query will be also striing, so class validator receive a string
    // and it dont know how to convert that to number
    // for params and queries we specifically need to mention transofrmation logic inside DTO
    @Query() createUserQueryDto: CreateUserQueryDto,
  ) {
    console.log('reavhed here-------------', {
      createUserDto,
      createUserQueryDto,
    });
    return 'new user post request';
  }

  @Get('/:userid')
  getUserDetails(
    // all parameters are by default string
    // to convert it into integer we use ParseIntPipe
    // ParceIntPine always assume that query/params  is required
    // to add default values use new DefaultValuePipe(default value),
    @Param('userid', ParseIntPipe)
    userid: number | null = null,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit: number = 10,
  ) {
    console.log('userid', { userid, page, limit });
    return '--';
  }
}
