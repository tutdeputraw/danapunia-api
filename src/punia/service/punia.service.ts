import { Injectable } from '@nestjs/common';
import { CreatePuniaDto } from '../dto/create-punia.dto';
import { UpdatePuniaDto } from '../dto/update-punia.dto';

@Injectable()
export class PuniaService {
  create(createPuniaDto: CreatePuniaDto) {
    return 'This action adds a new punia';
  }

  findAll() {
    return `This action returns all punia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} punia`;
  }

  update(id: number, updatePuniaDto: UpdatePuniaDto) {
    return `This action updates a #${id} punia`;
  }

  remove(id: number) {
    return `This action removes a #${id} punia`;
  }
}
