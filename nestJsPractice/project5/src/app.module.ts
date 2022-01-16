import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeManagementModule } from './employee-management/employee-management.module';
import { PowerSupplyModule } from './power-supply/power-supply.module';
import { CpuModule } from './cpu/cpu.module';
import { UserModule } from './user/user.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUser } from './user/entities/create-user.entity';
import { CreateReport } from './reports/entities/create-report.entity';
// import { TestModuleModule } from './test-module/test-module.module';
// import { TestModuleAnkitModule } from './test-module-ankit/test-module-ankit.module';
// import { EmployeeModule } from './employee/employee.module';
import { ProductsModule } from './products/products.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'sb.sqlite',
      entities: [CreateUser, CreateReport],
      synchronize: true,
    }),
    EmployeeManagementModule,
    PowerSupplyModule,
    CpuModule,
    UserModule,
    ReportsModule,
    // TestModuleModule,
    // TestModuleAnkitModule,
    // EmployeeModule,
    ProductsModule,
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
