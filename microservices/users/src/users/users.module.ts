import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { User } from 'src/typeorm/entities/User';
import { Payment } from 'src/typeorm/entities/Payment';

import { UsersMicroserviceController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Payment])],
  controllers: [UsersMicroserviceController],
  providers: [UsersService],
})
export class UsersModule {}
