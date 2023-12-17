import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { Payment } from 'src/typeorm/entities/Payment';

import { CreatePaymentDto } from 'src/payments/dtos/CreatePayment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment) private paymentsRepository: Repository<Payment>,
  ) {}

  createPayment(createPaymentDto: CreatePaymentDto) {
    const newPayment = this.paymentsRepository.create(createPaymentDto);
    return this.paymentsRepository.save(newPayment);
  }
}
