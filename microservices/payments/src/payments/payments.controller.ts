import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';

import { CreatePaymentDto } from 'src/payments/dtos/CreatePayment.dto';
import { PaymentsService } from 'src/payments/payments.service';

@Controller()
export class PaymentsMicroserviceController {
  constructor(
    @Inject('NATS_SERVICE') private natsClient: ClientProxy,
    private paymentsService: PaymentsService,
  ) {}

  @EventPattern('createPayment')
  async createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
    const newPayment =
      await this.paymentsService.createPayment(createPaymentDto);

    this.natsClient.emit('paymentCreated', newPayment);
  }
}
