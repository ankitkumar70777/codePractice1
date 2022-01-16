import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  async getAll() {
    return 'All Product';
  }

  async getProducts() {
    return 'specific date';
  }
}
