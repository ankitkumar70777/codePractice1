import { UserDto } from 'src/user/dtos/user.dto';
import { Controller, Post, Body, Get, Param, Session } from '@nestjs/common';
import { Serialize } from 'src/intercepter/serilize.intercepter';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { AuthService } from './auth/auth.service';
import { CurrentUser } from './decorators/whomi.decorator';
// import { UseInterceptors } from '@nestjs/common';
// import { CurrentUserIntercepter } from './intercepter/user.intecepter';
import { CreateUser } from './entities/create-user.entity';
import { AuthGuard } from 'src/guards/auth.guard';
import { UseGuards } from '@nestjs/common';

@Serialize(UserDto)
// @UseInterceptors(CurrentUserIntercepter)
@Controller('auth')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Get('/setColor/:color')
  async setColor(@Param('color') color: string, @Session() session: any) {
    session.color = color;
    console.log(session.color);
  }

  @Get('/getColor')
  async getColor(@Session() session: any) {
    return session.color;
  }

  // @Get('/whomi')
  // async whomi(@Session() session: any) {
  //   console.log('session', session.user);
  //   const id = session.user;
  //   session.user = 'ankit';
  //   return await this.userService.findOne(id);
  // }

  @Get('/whomi')
  @UseGuards(AuthGuard)
  async whomi(@CurrentUser() user: CreateUser) {
    console.log({ user });
    return user;
  }

  @Post('signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(body.email, body.password);
    session.user = user.id;
    return user;
  }

  @Post('signin')
  async signin(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.user = user.id;
    console.log('session: ', session.user);
    return user;
  }

  @Post('signout')
  async signout(@Session() session: any) {
    console.log(session.user);
    session.user = null;
    console.log(session.user);
  }

  @Get('findOneUser/:id')
  async findOneUser(@Param('id') id: string) {
    console.log('id datatype::', id, typeof id);
    return await this.userService.findOne(parseInt(id));
  }

  // @UseInterceptors(new SerializeInterepter(UserDto))
  @Get('findAllUser')
  async findAllUser() {
    console.log('handler is runing ');
    return await this.userService.findAllUser();
  }

  @Post('updateOneUser/:id')
  async updateOneUser(
    @Param('id') id: number,
    @Body() body: Partial<CreateUserDto>,
  ) {
    console.log('id', id, 'body', body);
    return await this.userService.updateOneUser(id, body);
  }

  @Get('removeOneUser/:id')
  async removeOneUser(@Param('id') id: string) {
    return await this.userService.removeOneuser(parseInt(id));
  }
}
