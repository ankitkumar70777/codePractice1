import { IsString } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './schemas/create-user.schema';
import { CreateUsersDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}

  async createUser(user: CreateUsersDto): Promise<any> {
    try {
      console.log('user::', user);
      let existance = await this.usersModel.findOne({ name: user.name });
      // console.log('existance', existance);
      console.log('existance', existance);
      //if user is already exists just update all details
      if (existance) {
        existance.age = user.age;
        existance.email = user.email;
        existance.location = user.location;
        const result = await existance.save();
        return ['user is already available, so updated details ', result];
      }

      const result = await this.usersModel.create({
        ...user,
      });
      console.log('result:::', result);
      return result;
    } catch (error) {
      console.log('err::', error);
      return error.name;
    }
  }

  async getAllUsers() {
    return this.usersModel.find();
  }

  async getOneUser(nameToFind: string) {
    try {
      const existance = await this.usersModel.findOne({
        name: nameToFind,
      });
      console.log('existance', existance);
      if (!existance) {
        return 'user not found';
      }
      return existance;
    } catch (error) {
      console.log('err::', error);
      return error.name;
    }
  }
}
