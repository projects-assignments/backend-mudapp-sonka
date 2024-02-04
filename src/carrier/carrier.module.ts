import { Module } from '@nestjs/common';
import { CarrierService } from './carrier.service';
import { CarrierController } from './carrier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrier } from './entities/carrier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carrier])],
  controllers: [CarrierController],
  providers: [CarrierService],
})
export class CarrierModule {}
