import { Module } from '@nestjs/common';

import { UsersMicroserviceController } from 'src/users/users.controller';

@Module({
  imports: [],
  controllers: [UsersMicroserviceController],
  providers: [],
})
export class UsersModule {}
