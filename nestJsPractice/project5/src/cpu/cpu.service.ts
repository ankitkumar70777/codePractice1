import { Injectable } from '@nestjs/common';
import { PowerSupplyService } from './../power-supply/power-supply.service';

@Injectable()
export class CpuService {
  constructor(private powerSupplyService: PowerSupplyService) {}
  async runSayHello() {
    return this.powerSupplyService.sayHello();
  }
}
