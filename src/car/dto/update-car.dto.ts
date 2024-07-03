import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {
    car_model?: string;
    car_brand?: string;
    car_year?: string;
    car_color?: string;
}
