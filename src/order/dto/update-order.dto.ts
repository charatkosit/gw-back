import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    order_symptom?: string;
    order_description?: string;
    order_km?: string;
    order_date?: string;
    cus_id?: number;
    car_id?: number;
}
