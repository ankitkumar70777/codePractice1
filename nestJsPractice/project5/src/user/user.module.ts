import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUser } from './entities/create-user.entity';
import { AuthService } from './auth/auth.service';
import { CurrentUserIntercepter } from './intercepter/user.intecepter';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([CreateUser])],
  controllers: [UserController],
  providers: [
    UserService,
    AuthService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CurrentUserIntercepter,
    },
  ],
})
export class UserModule {}
