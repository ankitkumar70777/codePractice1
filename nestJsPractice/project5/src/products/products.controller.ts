import { ProductsService } from './products.service';
import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('getAllProduct')
  async getAll() {
    console.log('reached here');
    return this.productsService.getAll();
  }

  @Get('getProducts/:from-:to')
  async getProducts(@Query() query: any, @Param() param: any) {
    console.log({ query });
    console.log({ param });
    return this.productsService.getProducts();
  }
}
