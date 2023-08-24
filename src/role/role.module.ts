import { Module } from '@nestjs/common';
import { RoleController } from './controller/role.controller';
import { RoleService } from './service/role.service';
import { RoleRepository } from './repository/role.repository';

@Module({
  controllers: [RoleController],
  providers: [
    RoleService,
    RoleRepository,
  ],
})
export class RoleModule { }
