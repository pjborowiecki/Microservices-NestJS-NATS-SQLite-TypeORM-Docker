import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller()
export class UsersMicroserviceController {
  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    console.log(data);
    return { msg: 'success' };
  }
}
