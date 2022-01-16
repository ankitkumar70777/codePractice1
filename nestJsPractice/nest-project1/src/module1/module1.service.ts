import { Injectable } from '@nestjs/common';

@Injectable()
export class Module1Service {
  async sayHello() {
    return 'hello world';
  }
}
