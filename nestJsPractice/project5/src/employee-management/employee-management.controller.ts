import { Controller, Get, Body, Param, Post } from '@nestjs/common';
import { CreateEmployeeDto } from './dtos/create-employee-dto';
import { EmployeeManagementService } from './employee-management.service';

@Controller('employee-management')
export class EmployeeManagementController {
  constructor(private employeeManagementService: EmployeeManagementService) {}
  @Post('/create-employee')
  async createEmployee(@Body() body: CreateEmployeeDto) {
    return this.employeeManagementService.createEmployee(body);
  }
}
