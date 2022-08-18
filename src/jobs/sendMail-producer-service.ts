import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { CreateUserDTO } from 'src/create-user/create-user-dto';

@Injectable()
export class SendMailProducerService {
  constructor(@InjectQueue('sendMail-queue') private queue: Queue) {}

  async sendMail(data: CreateUserDTO) {
    console.log('SERVICE =>>>', data);
    this.queue.add('sendMail-job', data);
  }
}
