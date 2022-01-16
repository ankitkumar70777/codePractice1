import { Module } from '@nestjs/common';
import { CpuController } from './cpu.controller';
import { CpuService } from './cpu.service';
import { PowerSupplyModule } from '../power-supply/power-supply.module';

@Module({
  imports: [PowerSupplyModule],
  controllers: [CpuController],
  providers: [CpuService],
})
export class CpuModule {}
