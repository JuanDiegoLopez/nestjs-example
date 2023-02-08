import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findAll() {
    const data = await readFile('data/messages.json', 'utf-8');
    const messages = JSON.parse(data);

    return messages;
  }

  async findOne(id: string) {
    const data = await readFile('data/messages.json', 'utf-8');
    const messages = JSON.parse(data);

    return messages[id];
  }

  async create(content: string) {
    const data = await readFile('data/messages.json', 'utf-8');
    const messages = JSON.parse(data);
    const id = Date.now();

    messages[id] = {
      id,
      content,
    };

    await writeFile('data/messages.json', JSON.stringify(messages));
  }
}
