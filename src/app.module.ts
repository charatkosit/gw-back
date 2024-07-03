import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { CarModule } from './car/car.module';
import { CustomerModule } from './customer/customer.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    OrderModule, 
    OrderDetailModule, 
    CarModule, 
    CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
