import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { GetUserByIdDto } from 'src/users/dtos/GetUserById.dto';

import { UsersService } from 'src/users/users.service';

@Controller()
export class UsersMicroserviceController {
  constructor(private usersService: UsersService) {}

  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }

  @MessagePattern({ cmd: 'getUserById' })
  async getUserById(@Payload() data: GetUserByIdDto) {
    return await this.usersService.getUserById(data.userId);
  }

  @EventPattern('paymentCreated')
  paymentCreated(@Payload() data: any) {
    console.log(data);
  }
}
