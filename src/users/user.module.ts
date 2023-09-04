import { Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { JwtTokenService } from 'src/_common/jwt-token/jwt-token.service';
import { RoleRepository } from 'src/role/repository/role.repository';
import { OrganizationRepository } from 'src/organization/repository/organization.repository';
import { OrganizationAdminRepository } from 'src/organization-admin/repository/organization-admin.repository';
import { RoleModule } from 'src/role/role.module';
import { JwtTokenModule } from 'src/_common/jwt-token/jwt-token.module';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
  ],
  imports: [
    JwtTokenModule,
  ],
  exports: [
    UserService,
  ]
})
export class UserModule { }
