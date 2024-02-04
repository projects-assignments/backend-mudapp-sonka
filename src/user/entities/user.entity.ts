import { genSalt, hash } from 'bcrypt';
import { Service } from 'src/service/entities/service.entity';
import {BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class User {
@PrimaryGeneratedColumn('increment')
id:number;
@Column()
firstname: string;
@Column()
lastname: string;
@Column({unique: true})
email: string;
@Column({unique: true})
phone: number;
@Column()
address: string;
@Column({unique: true})
dni: string;
@Column()
password: string;
@Column({default: 'user'})
role: string;

@BeforeInsert()
async  hashPassword(){
    try{
        const salt = await genSalt(10);
        const hashedPassword = await hash(this.password, salt);
        this.password= hashedPassword;
        console.log(this.password);
    }
    catch(error){
        throw new Error('encripting password failed');
    }
}
 @OneToMany(() => Service, (services: Service) => services.user)
 services: Service[];
}




