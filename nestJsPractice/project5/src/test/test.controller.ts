import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('test')
export class TestController {
  constructor() {}

  @Post('displayTest')
  async displayTest(@Query() query: any) {
    console.log(query);
  }
}
