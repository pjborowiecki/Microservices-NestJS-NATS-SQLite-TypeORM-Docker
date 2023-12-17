import { Module } from '@nestjs/common';

import { PaymentsMicroserviceController } from 'src/payments/payments.controller';

@Module({
  imports: [],
  controllers: [PaymentsMicroserviceController],
  providers: [],
})
export class PaymentsModule {}
