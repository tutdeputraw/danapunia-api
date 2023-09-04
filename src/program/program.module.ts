import { Module } from '@nestjs/common';
import { ProgramController } from './controller/program.controller';
import { ProgramService } from './service/program.service';
import { ProgramRepository } from './repository/program.repository';
import { UserService } from 'src/users/service/user.service';
import { UserModule } from 'src/users/user.module';
import { UserRepository } from 'src/users/repository/user.repository';
import { RoleRepository } from 'src/role/repository/role.repository';
import { OrganizationAdminRepository } from 'src/organization-admin/repository/organization-admin.repository';

@Module({
  controllers: [ProgramController],
  providers: [
    ProgramService,
    ProgramRepository,

    // UserModule
    // UserService,
    // UserRepository,
    // RoleRepository,
    // OrganizationAdminRepository,
  ],
  imports: [UserModule],
})
export class ProgramModule { }
