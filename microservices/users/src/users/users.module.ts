import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { User } from 'src/typeorm/entities/User';

import { UsersMicroserviceController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersMicroserviceController],
  providers: [UsersService],
})
export class UsersModule {}
