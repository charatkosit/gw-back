import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { CarModule } from './car/car.module';
import { CustomerModule } from './customer/customer.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Customer } from './customer/entities/customer.entity';
import { Order } from './order/entities/order.entity';
import { OrderDetail } from './order-detail/entities/order-detail.entity';
import { Car } from './car/entities/car.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),   
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:  process.env.DATABASE_IP,
      port:  +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB_NAME,
      entities: [Customer, Order, OrderDetail, Car],
      synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',}),

    OrderModule, 
    OrderDetailModule, 
    CarModule, 
    CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
