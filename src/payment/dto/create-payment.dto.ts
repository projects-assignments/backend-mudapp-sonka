import { Service } from "src/service/entities/service.entity";

export class CreatePaymentDto {
    id: number;
    method: string;
    amount: number;
    status: string;
    bancaccount: string;
   readonly service: Service;
}
