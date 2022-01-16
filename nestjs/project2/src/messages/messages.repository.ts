import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import path = require('path');

@Injectable()
export class MessageRepository {
  async findOne(id: number): Promise<string> {
    const contents = await readFile(
      '/var/www/codePractice/nestjs/project2/src/messages/message.json',
      'utf8',
    );
    const messages = JSON.parse(contents);
    console.log(messages);
    return messages[id];
  }

  async findAll() {
    const contents = await readFile(
      '/var/www/codePractice/nestjs/project2/src/messages/message.json',
      'utf8',
    );
    const messages = JSON.parse(contents);
    return messages;
  }

  async createOne(content: string) {
    const contents = await readFile(
      '/var/www/codePractice/nestjs/project2/src/messages/message.json',
      'utf8',
    );
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content };
    await writeFile(
      '/var/www/codePractice/nestjs/project2/src/messages/message.json',
      JSON.stringify(messages),
    );
    return 'success';
  }
}
