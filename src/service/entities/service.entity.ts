import { Payment } from "src/payment/entities/payment.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Service {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @ManyToOne(()=> User, (user: User) => user.services )
    user: User;
    @Column()
    carrierId: number;
    @Column()
    date: number;
    @Column()
    departureLoc: string;
    @Column()
    destinationLoc:  string;
    @Column()
    remarks: string;
    @Column()
    ratingId: number;
    @OneToOne(()=> Payment, (payment: Payment) => payment.service)
    payment : Payment;
   
    

}
