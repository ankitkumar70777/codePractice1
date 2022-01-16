import { CurrentUser } from './../decorators/whomi.decorator';
import { UserService } from './../user.service';

import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
  UseInterceptors,
} from '@nestjs/common';

@Injectable()
export class CurrentUserIntercepter implements NestInterceptor {
  constructor(private userService: UserService) {}

  async intercept(context: ExecutionContext, handler: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const user = request?.session?.user;
    if (user) {
      const userId = await this.userService.findOne(user);
      request.currentUser = userId;
    }
    return handler.handle();
  }
}
