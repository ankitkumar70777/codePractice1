import { Controller, Get } from '@nestjs/common';

// @Controller('main-route')
@Controller('/')
export class MainRouteController {
    @Get()
    sayHello(){
        return `Welcome to Home`;
    }
}
