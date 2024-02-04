import { Vehicle } from "src/vehicle/entities/vehicle.entity";

export class CreateCarrierDto {
    firstname: string;
    lastname: string;
    email: string;
    phone: number;
    dni: string;
    address: string;
    maxkm: number;
    password: string;
    status: string;
}
