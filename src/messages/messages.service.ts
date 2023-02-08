import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService {
  constructor(private messagesRepo: MessagesRepository) {}

  findAll() {
    return this.messagesRepo.findAll();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  create(content: string) {
    this.messagesRepo.create(content);
  }
}