import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import { join } from 'path';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Pesmylove.22',
      database: 'mydb',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: false,

    }),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}