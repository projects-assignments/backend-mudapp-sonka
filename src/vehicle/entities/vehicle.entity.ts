import { Carrier } from "src/carrier/entities/carrier.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    brand: string;
    @Column()
    model: string;
    @Column()
    licenseplate: string;
    @Column()
    height: number;
    @Column()
    length: number;
    @Column()
    width: number;
    @Column()
    weight: number;
    @ManyToOne(() => Carrier, (carrier: Carrier) => carrier.vehicle)
    carrier : Carrier;
}