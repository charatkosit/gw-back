import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
    cus_name?: string;
    cus_address?: string;
    cus_phone?: string;
}
