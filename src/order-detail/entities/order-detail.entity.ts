import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderDetail {
    @PrimaryGeneratedColumn()
    order_detail_id: number;

    @Column()
    order_id: number;

    @Column()
    order_detail_partname: number;

    @Column()
    order_detail_price: number;

    @Column()
    order_detail_qty: number;

    @Column()
    order_detail_total: number;
}
