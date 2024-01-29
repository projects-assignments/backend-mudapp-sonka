import { Injectable } from '@nestjs/common';
import { CreateCarrierDto } from './dto/create-carrier.dto';
import { UpdateCarrierDto } from './dto/update-carrier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrier } from './entities/carrier.entity';

@Injectable()
export class CarrierService {
  constructor(
    @InjectRepository(Carrier)
    private readonly carrierRepository: Repository<Carrier>
  ){}
  create(createCarrierDto: CreateCarrierDto) {
    return this.carrierRepository.save(createCarrierDto);
  }

  findAll() {
    return this.carrierRepository.find();
  }

  findOne(id: number) {
    return this.carrierRepository.findOneBy({id});
  }

  update(id: number, updateCarrierDto: UpdateCarrierDto) {
    return this.carrierRepository.update(id, updateCarrierDto);
  }

  remove(id: number) {
    return this.carrierRepository.delete(id);
  }
}
