import { Injectable } from '@nestjs/common';
import { CreateProgramProgressDto } from '../dto/create-program-progress.dto';
import { UpdateProgramProgressDto } from '../dto/update-program-progress.dto';

@Injectable()
export class ProgramProgressService {
  create(createProgramProgressDto: CreateProgramProgressDto) {
    return 'This action adds a new programProgress';
  }

  findAll() {
    return `This action returns all programProgress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} programProgress`;
  }

  update(id: number, updateProgramProgressDto: UpdateProgramProgressDto) {
    return `This action updates a #${id} programProgress`;
  }

  remove(id: number) {
    return `This action removes a #${id} programProgress`;
  }
}
