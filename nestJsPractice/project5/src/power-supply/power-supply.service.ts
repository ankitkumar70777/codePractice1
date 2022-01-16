import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerSupplyService {
  async sayHello() {
    console.log('hello this is power module');
    return 'hello this is power module';
  }
}
