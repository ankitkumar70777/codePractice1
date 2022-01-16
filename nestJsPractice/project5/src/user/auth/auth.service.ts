import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
//crypto is part of node std library
//random byte use to give random text
//script is hashing function
import { randomBytes, scrypt as _scrypt } from 'crypto';
//promisfy used to convery callback into promise
import { promisify } from 'util';
const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signup(email: string, password: string) {
    const user = await this.userService.find({ email });
    console.log({ user });
    if (user) {
      throw new BadRequestException('Email is already in use');
    }
    //randonByte will generate 16 bit random byte, 1byte = 2 c haracher text
    //randomByte will return 1 and 0 random once we convert them to hex we will get random text and number
    //so salt will be 16 chanracter text
    const salt = randomBytes(8).toString('hex');
    console.log({ salt });
    //script will retrn 32 char text
    //to have set its type as buffer
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');
    return this.userService.createUser({ email, password: result });

    //check if email is already exists
    //if exists throw error
    //encrypt users password
    //if not  exist create user
    //return cokee with user id

    //hash user password
    //generate a salt
    //hash a salt and passowrd together
    //join hashed password with salt
    //create new user and save it
    //return a user
  }

  async signin(email: string, password: string) {
    const user = await this.userService.find({ email });

    if (!user) {
      throw new BadRequestException('No email Found with that email');
    }
    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('Wrong Password');
    }
    return user;
  }
}
