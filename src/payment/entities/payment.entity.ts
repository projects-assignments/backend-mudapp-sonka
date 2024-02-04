import { Service } from "src/service/entities/service.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    method: string;
    @Column()
    amount: number;
    @Column()
    status: string;
    @Column()
    bancaccount: string;
    @OneToOne(()=> Service, (service: Service) => service.payment)
    service: Service;
}
