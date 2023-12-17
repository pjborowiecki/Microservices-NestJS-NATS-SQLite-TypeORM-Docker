import { Module } from '@nestjs/common';

import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { PaymentsMicroserviceController } from 'src/payments/payments.controller';

@Module({
  imports: [NatsClientModule],
  controllers: [PaymentsMicroserviceController],
  providers: [],
})
export class PaymentsModule {}
