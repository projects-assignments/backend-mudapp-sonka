import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { User } from './user/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

 @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Req() req: Request & {user: User}){
    return this.authService.login(req.user);
  }
}
