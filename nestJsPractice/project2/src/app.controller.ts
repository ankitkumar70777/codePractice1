import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test2')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/bye')
  sayBye(){
    return "Bye My Friend";
  }
}
