import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { RoleRepository } from '../repository/role.repository';

@Injectable()
export class RoleService {
  constructor(private rolesRepository: RoleRepository) { }

  create(createRoleDto: CreateRoleDto) {
    return this.rolesRepository.createRole(createRoleDto);
  }

  findAll() {
    return this.rolesRepository.getRoles({});
  }

  findOne(id: number) {
    return this.rolesRepository.getRole({ id });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.rolesRepository.updateRole({
      where: { id },
      data: updateRoleDto
    });
  }

  remove(id: number) {
    return this.rolesRepository.deleteRole({ id });
  }
}
