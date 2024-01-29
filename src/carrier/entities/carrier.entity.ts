import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Carrier {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstname: string;
    @Column()
    lastname: string;
    @Column()
    emial: string;
    @Column()
    phone: number;
    @Column()
    vehicleId: number;
    @Column()
    dni: string;
    @Column()
    address: string;
    @Column()
    maxkm: number;
    @Column()
    password: string;
    @Column()
    status: string;
}
