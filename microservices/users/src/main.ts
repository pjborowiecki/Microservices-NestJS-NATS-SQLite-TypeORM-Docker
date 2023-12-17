import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from 'src/app.module';

async function bootstrap() {
  dotenv.config();

  console.log('Users microservice is running');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        servers: 'nats://nats',
      },
    },
  );
  await app.listen();
}
bootstrap();
