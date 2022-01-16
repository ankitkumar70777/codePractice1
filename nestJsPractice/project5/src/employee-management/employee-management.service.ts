import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dtos/create-employee-dto';

@Injectable()
export class EmployeeManagementService {
  async createEmployee(body: CreateEmployeeDto) {
    return body;
  }
}
