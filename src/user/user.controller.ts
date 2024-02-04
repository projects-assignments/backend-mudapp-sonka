import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':userId')
  findUser(
    @Req() req: Request & {user: {userId: string; firstname: string} },
    @Param('userId') userId: string) {
    return this.userService.findUser(userId);
  }
  @Post('login')
  logIn(@Body() user: User){
    //console.log("log in user ")
    return this.userService.logIn(user);
  }

   @Put(':id')
   update(@Param('id') userId: string, @Body() user: any) {
     return this.userService.update(+userId, user);
   }

   @Delete(':userId')
   remove(@Param('userId') userId: string) {
     return this.userService.remove(userId);
   }
}
