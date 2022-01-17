import { Injectable } from '@nestjs/common';
import { MessageRepository } from '../messages/messages.repository';

@Injectable()
export class MessagesService {
  constructor(public readonly messageRepo: MessageRepository) {}

  findOne(id: number) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    return this.messageRepo.createOne(content);
  }
}
