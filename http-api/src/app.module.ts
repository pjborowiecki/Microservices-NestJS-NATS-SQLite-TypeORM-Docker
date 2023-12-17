import { Module } from '@nestjs/common';

import { UsersModule } from 'src/users/users.module';
import { PaymentsModule } from 'src/payments/payments.module';

@Module({
  imports: [UsersModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
