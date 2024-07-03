import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    car_id: number;

    @Column()
    car_model: string;
    
    @Column()
    car_brand: string;

    @Column()
    car_year: string;

    @Column()
    car_color: string;
}    
