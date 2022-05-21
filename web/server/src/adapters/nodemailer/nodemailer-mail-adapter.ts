import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3b6c0271f465e4",
      pass: "21e8322f67f0a8"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com',
            to: 'Gabriel Pupo <gabrielrspupo@gmail.com>',
            subject,
            html: body,
        });
    }
}