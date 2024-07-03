import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { OrderDetail } from './entities/order-detail.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderDetailService {
  constructor(
    @InjectRepository(OrderDetail)
    private orderDetailRepository: Repository<OrderDetail>,
  ) {}

  create(createOrderDetailDto: CreateOrderDetailDto): Promise<OrderDetail> {
    const orderDetail = this.orderDetailRepository.create(createOrderDetailDto);
    return this.orderDetailRepository.save(orderDetail);
  }

  findAll(): Promise<OrderDetail[]> {
    return this.orderDetailRepository.find();
  }

  async findOne(id: number): Promise<OrderDetail> {
    const orderDetail = await this.orderDetailRepository.findOne({where: {order_detail_id: id}});
    if (!orderDetail) {
      throw new NotFoundException(`OrderDetail #${id} not found`);
    }
    return orderDetail;
  }

  async update(id: number, updateOrderDetailDto: UpdateOrderDetailDto): Promise<OrderDetail> {
    const orderDetail = await this.orderDetailRepository.preload({
      order_detail_id: id,
      ...updateOrderDetailDto,
    });
    if (!orderDetail) {
      throw new NotFoundException(`OrderDetail #${id} not found`);
    }
    return this.orderDetailRepository.save(orderDetail);
  }

  async remove(id: number): Promise<void> {
    const orderDetail = await this.findOne(id);
    await this.orderDetailRepository.remove(orderDetail);
  }
}