import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor( private userService: UserService, private jwtService: JwtService){}
    async validateUser(email: string, pass: string){
        const user = await this.userService.findUser(email);
        const isPasswordEqual= await compare(pass, user.password);
        if(!isPasswordEqual) throw new UnauthorizedException();
        const {password, ...result} = user;
        return result;
    }

    login(user:User){
        const payload = {email: user.email, sub: user.id, role: user.role};
        return {accesToken: this.jwtService.sign(payload) };
    }
}
