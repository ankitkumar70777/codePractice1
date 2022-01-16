import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { CreateReport } from './entities/create-report.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CreateReport])],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
