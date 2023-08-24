import { Injectable } from '@nestjs/common';
import { CreatePuraDto } from '../dto/create-pura.dto';
import { UpdatePuraDto } from '../dto/update-pura.dto';
import { PuraRepository } from '../repository/pura.repository';

@Injectable()
export class PuraService {
  constructor(private puraRepository: PuraRepository) { }

  create(createPuraDto: CreatePuraDto) {
    return this.puraRepository.createPura(createPuraDto);
  }

  findAll() {
    return this.puraRepository.getPuras({});
  }

  findOne(id: number) {
    return this.puraRepository.getPura({ id });
  }

  update(id: number, updatePuraDto: UpdatePuraDto) {
    return this.puraRepository.updatePura({
      data: updatePuraDto,
      where: { id }
    });
  }

  remove(id: number) {
    return this.puraRepository.deletePura({ id });
  }
}
