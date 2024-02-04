import { Vehicle } from "src/vehicle/entities/vehicle.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Carrier {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstname: string;
    @Column()
    lastname: string;
    @Column()
    email: string;
    @Column()
    phone: number;
    @OneToMany(()=> Vehicle, (vehicle: Vehicle) => vehicle.carrier)
    vehicle: Vehicle[];
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
