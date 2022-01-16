import { UserModule } from './user.module';
import { IsString } from 'class-validator';
import {
  Injectable,
  BadRequestException,
  HttpException,
  HttpStatus,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import axios from 'axios';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './schemas/create-user.schema';
import { CreateUsersDto } from './dtos/create-user.dto';
import { sendResponse } from '../helpers/helpers';
import { resolver } from '../helpers/helpers';
import { resolve } from 'path';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}

  async createUser(user: CreateUsersDto): Promise<any> {
    const [data, error] = await resolver(
      this.usersModel.findOne({ email: user.email }),
    );
    if (data) {
      throw new BadRequestException('User is already exists with same name');
    }
    if (error) {
      throw new BadRequestException(error.message);
    }

    const [data1, error1] = await resolver(this.usersModel.create(user));
    if (error1) {
      throw new BadRequestException(error1.message);
    }
    console.log('data1:::', data1);

    return data1;
  }

  async getAllUsers() {
    const [data, error] = await resolver(await this.usersModel.find());
    console.log('data', data);
    console.log('error', error);
    if (!data) {
      throw new NotFoundException('data not found');
    }
    if (error) {
      throw new BadRequestException(error.message);
    }
    return sendResponse(201, data, 'All user data send successfully');
  }

  async getOneUser(nameToFind: string) {
    const [data, error] = await resolver(
      await this.usersModel.find({
        name: nameToFind,
      }),
      // await this.usersModel.findById('616536ec602bfab588b95f65'),
    );
    console.log('data', data);
    console.log('error', error);
    if (!data) {
      throw new NotFoundException('data not found');
    }
    if (error) {
      throw new BadRequestException(error.message);
    }
    return sendResponse(201, data, 'user details  send successfully1');
  }

  async removeOneUser(nameToRemove: string) {
    const [data, error] = await resolver(
      await this.usersModel.deleteOne({
        name: nameToRemove,
      }),
    );
    console.log('data::', data, 'error::', error);

    if (data.deletedCount == 0) {
      throw new NotFoundException('user is not found in database to remove');
    }
    if (error) {
      throw new BadRequestException(error.message);
    }
    return sendResponse(
      200,
      data,
      `${data.deletedCount} document "nameToRemove" has been deleted`,
    );
  }

  async updateOneUser(nameToUpdate: string, body: CreateUsersDto) {
    // let [data, error] = await resolver(await this.usersModel.find());
    // console.log('data-------', data, 'datatype------::', data.type);
    // console.log('error', error);
    // data.email = body.email;
    // data.age = body.age;
    // data.location = body.location;
    // data.hobbies = body.hobbies;
    // this.usersModel.save({ ...body });
    // console.log('result::', result);
    // const [data1, error1] = await resolver(
    //   this.usersModel.updateOne({ name: nameToUpdate }, { ...body }),
    // );
    // console.log('data1::', data1, 'error1::', error1);
    console.log('body::', body);
    let dataToUpdate = { ...body };
    console.log('dataToUpdate', dataToUpdate);

    // let [data, error] = await resolver(
    //   await this.usersModel.findOneAndUpdate(
    //     {
    //       name: nameToUpdate,
    //     },
    //     { ...dataToUpdate },
    //   ),
    // );
  }

  async axiosCall() {
    try {
      const data = await axios({
        method: 'post',
        url: 'http://localhost:3000/user',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        data: {
          name: 'kalyan',
          email: 'kalyan@gmail.com',
          age: '23',
          location: 'cst1',
          hobbies: ['CRICKET', 'CHESS', 'CheSS'],
        },
      });

      return data;
      console.log();
    } catch (error) {}
  }

  async createUser2(body: any): Promise<any> {
    const [data, error] = await resolver(this.usersModel.create(body));
    if (error) {
      throw new InternalServerErrorException(error.message);
    }
    if (!data) {
      throw new BadRequestException();
    }
    return sendResponse(201, data, 'User created successfully');
  }

  async updateUser2(body: any): Promise<any> {
    const [data, error] = await resolver(
      this.usersModel.updateOne({ _id: '6168286e61d880595ad7167b' }, body),
    );
    if (error) {
      throw new InternalServerErrorException(error.message);
    }
    if (!data) {
      throw new BadRequestException();
    }
    return sendResponse(201, data, 'User updated successfully');
  }
}
