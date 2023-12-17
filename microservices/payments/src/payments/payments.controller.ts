import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';

import { CreatePaymentDto } from 'src/payments/dtos/CreatePayment.dto';

@Controller()
export class PaymentsMicroserviceController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @EventPattern('createPayment')
  createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
    this.natsClient.emit('paymentCreated', createPaymentDto);
  }
}
