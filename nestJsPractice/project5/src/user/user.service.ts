import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUser } from './entities/create-user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(CreateUser) private repo: Repository<CreateUser>,
  ) {}

  async createUser(body: CreateUserDto) {
    const user = await this.repo.create(body);
    if (!user) {
      console.log('user', user);
      throw new InternalServerErrorException('error while creating user');
    }
    return this.repo.save(user);
  }

  async findOne(id: number) {
    if (!id) {
      return null;
    }
    const user = await this.repo.findOne(id);
    if (!user) {
      console.log('user::', user);
      throw new NotFoundException('User Not Found');
    }
    return user;
  }

  async find({ email }) {
    const user = await this.repo.findOne({ email });
    // if (!user) {
    //   console.log('user::', user);
    //   throw new NotFoundException('User Not Found');
    // }
    return user;
  }

  @UseInterceptors(ClassSerializerInterceptor)
  async findAllUser() {
    const allUsers = await this.repo.find({});
    if (!allUsers) {
      console.log('allUsers::', allUsers);
      throw new NotFoundException('User Not Found');
    }
    return allUsers;
  }

  async updateOneUser(id: number, body: Partial<CreateUserDto>) {
    const user = await this.findOne(id);
    if (!user) {
      console.log('user::', user);
      throw new NotFoundException('User Not Found');
    }
    // console.log('updateOneUser::', updateOneUser);
    Object.assign(user, body);
    // console.log('updateOneUser::', updateOneUser);

    return this.repo.save(user);
  }

  async removeOneuser(id: number) {
    const user = await this.findOne(id);
    console.log('user', user);
    if (!user) {
      console.log('user::', user);
      throw new NotFoundException('User Not Found');
    }
    const deleteUser = await this.repo.remove(user);
    console.log('deleteUser ', deleteUser);
    return deleteUser;
  }
}
