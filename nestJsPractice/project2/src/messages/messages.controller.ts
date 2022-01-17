import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Headers,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/createMessages.dto';
import { MessagesService } from '../messages/messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get('/')
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post('/')
  createMessage(@Body() body: CreateMessageDto): any {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessages(@Param('id') id: number) {
    const result = await this.messagesService.findOne(id);
    console.log('result', result);
    if (!result) {
      throw new NotFoundException('message not found');
      return;
    }
    return result;
  }
}
