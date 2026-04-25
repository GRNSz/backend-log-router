import { Injectable } from '@nestjs/common';
import { CreateFrotaDto } from './dto/create-frota.dto';
import { UpdateFrotaDto } from './dto/update-frota.dto';

@Injectable()
export class FrotaService {
  create(createFrotaDto: CreateFrotaDto) {
    return 'This action adds a new frota';
  }

  findAll() {
    return `This action returns all frota`;
  }

  findOne(id: number) {
    return `This action returns a #${id} frota`;
  }

  update(id: number, updateFrotaDto: UpdateFrotaDto) {
    return `This action updates a #${id} frota`;
  }

  remove(id: number) {
    return `This action removes a #${id} frota`;
  }
}
