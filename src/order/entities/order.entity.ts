import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    order_id: number;

    @Column()
    order_symthom: string;

    @Column()
    order_description: string;

    @Column()
    order_km: string;

    @Column()
    order_date: string;
    
    @Column()
    cus_id: number;

    @Column()
    car_id: number;

}
