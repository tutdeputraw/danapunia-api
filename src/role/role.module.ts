import { Module } from '@nestjs/common';
import { RoleController } from './controller/role.controller';
import { RoleService } from './service/role.service';
import { RoleRepository } from './repository/role.repository';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles.guard';

@Module({
  controllers: [RoleController],
  providers: [
    RoleService,
    RoleRepository,
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class RoleModule { }
