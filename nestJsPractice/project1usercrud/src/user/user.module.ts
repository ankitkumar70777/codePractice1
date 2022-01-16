import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { UsersSchema, Users } from './schemas/create-user.schema';

@Module({
  imports: [
    //ask this daubt
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
