import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Post } from '@nestjs/common';
import { SendMailProducerService } from 'src/jobs/sendMail-producer-service';
import { CreateUserDTO } from './create-user-dto';

@Controller('create-user')
export class CreateUserController {
  constructor(private readonly producerService: SendMailProducerService) {}
  @Post('/')
  async createUser(@Body() data: CreateUserDTO) {
    console.log('CONTROLLER =>>>', data);
    await this.producerService.sendMail(data);
  }
}
