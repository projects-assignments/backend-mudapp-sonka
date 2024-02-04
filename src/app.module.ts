import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import { join } from 'path';
import { CarrierModule } from './carrier/carrier.module';
import { PaymentModule } from './payment/payment.module';
import { ServiceModule } from './service/service.module';
import { RatingModule } from './rating/rating.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Pesmylove.22',
      database: 'mudapp',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: false,

    }),
    UserModule,
    CarrierModule,
    PaymentModule,
    ServiceModule,
    RatingModule,
    VehicleModule,
    AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
