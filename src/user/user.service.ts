import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ){}
  create(user: CreateUserDto) {
    return this.userRepository.save(this.userRepository.create(user));
  }

  findAll() {
    return this.userRepository.find();
  }

  findUser(email: string) {
    console.log("find one user funciona")
    return this.userRepository.findOneBy({ email });
  }

  logIn(user: User){
    return `You have logged in: ${user.email}`;
  }

  update(userId: number, user: any) {
    return `Your user(${userId}) has been updated with ${JSON.stringify(user)}`;
  }

  remove(userId: string) {
    return `the user ${userId} removed`;
  }
}
