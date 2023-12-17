import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { CreatePaymentDto } from 'src/payments/dtos/CreatePayment.dto';

@Controller()
export class PaymentsMicroserviceController {
  @EventPattern('createPayment')
  createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
    console.log(createPaymentDto);
  }
}
