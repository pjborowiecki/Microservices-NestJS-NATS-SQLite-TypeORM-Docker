import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { Payment } from 'src/typeorm/entities/Payment';
import { User } from 'src/typeorm/entities/User';

import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { PaymentsMicroserviceController } from 'src/payments/payments.controller';
import { PaymentsService } from 'src/payments/payments.service';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, User]), NatsClientModule],
  controllers: [PaymentsMicroserviceController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
