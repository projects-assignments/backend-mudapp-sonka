import { User } from "src/user/entities/user.entity";

export class CreateServiceDto {
    readonly user: User;
    id: number;
    carrierId: number;// readonly
    date: number;
    departureLoc: string;
    destinationLoc:  string;
    remarks: string;
    ratingId: number;// readonly
    paymentId: number;// readonly
}
