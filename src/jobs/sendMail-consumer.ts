import { MailerService } from '@nestjs-modules/mailer';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { CreateUserDTO } from 'src/create-user/create-user-dto';

@Processor('sendMail-queue')
export class SendMailConsumer {
  constructor(private mailService: MailerService) {}

  @Process('sendMail-job')
  async sendMailJob(job: Job<CreateUserDTO>) {
    const { data } = job;
    console.log(data);
    await this.mailService.sendMail({
      to: data.email,
      from: 'Chatuba <chatuba@email.com>',
      subject: 'Test',
      text: `Olar ${data.name} seu cadastro foi realizado com sucesso!`,
    });
  }
}
