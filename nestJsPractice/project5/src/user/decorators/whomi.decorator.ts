import {
  createParamDecorator,
  ExecutionContext,
  Session,
} from '@nestjs/common';
import { SimpleConsoleLogger } from 'typeorm';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    // console.log({ data }, { context });
    const request = context.switchToHttp().getRequest();
    // console.log('request', request?.session?.user);
    return request.currentUser;
  },
);
