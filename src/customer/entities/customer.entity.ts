import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    cus_id: number;

    @Column()
    cus_name: string;
    
    @Column()
    cus_address: string;

    @Column()
    cus_phone: string;
}
