import { Module } from '@nestjs/common';

import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { UsersController } from 'src/users/users.controller';

@Module({
  imports: [NatsClientModule],
  controllers: [UsersController],
  providers: [],
})
export class UsersModule {}
