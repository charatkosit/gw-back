import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(customer);
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  async findOne(id: number): Promise<Customer> {
    const customer = await this.customerRepository.findOne({where: {cus_id: id}});
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  // async findOne(id: number): Promise<Customer> {
  //   return this.customerRepository.findOne({where: {cus_id: id}});
  // }

  async update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    await this.customerRepository.update(id, updateCustomerDto);
    return this.customerRepository.findOne({where: {cus_id: id}});
  }

  async remove(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }
}