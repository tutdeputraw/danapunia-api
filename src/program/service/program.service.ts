import { Injectable } from '@nestjs/common';
import { CreateProgramDto } from '../dto/create-program.dto';
import { UpdateProgramDto } from '../dto/update-program.dto';
import { ProgramRepository } from '../repository/program.repository';

@Injectable()
export class ProgramService {
  constructor(
    private programRepository: ProgramRepository,
  ) { }

  create(createProgramDto: CreateProgramDto) {
    const organizationId = createProgramDto.organizationId;
    delete createProgramDto.organizationId;

    const organizationAdminId = createProgramDto.organizationAdminId;
    delete createProgramDto.organizationAdminId;

    return this.programRepository.createProgram({
      Organization: { connect: { id: organizationId } },
      OrganizationAdmin: { connect: { id: organizationAdminId } },
      ...createProgramDto
    });
  }

  findAll() {
    return this.programRepository.getPrograms({});
  }

  findAllByOrganizationId(organizationId: number) {
    return this.programRepository.getPrograms({ where: { organizationId: { equals: organizationId } } });
  }

  findAllByOrganizationAdminId(organizationAdminId: number) {
    return this.programRepository.getPrograms({ where: { organizationAdminId } });
  }

  findOne(id: number) {
    return this.programRepository.getProgram({ id });
  }

  update(id: number, updateProgramDto: UpdateProgramDto) {
    return this.programRepository.updateProgram({
      where: { id },
      data: updateProgramDto,
    });
  }

  remove(id: number) {
    return this.programRepository.deleteProgram({ id });
  }
}
