import { Global, Module } from '@nestjs/common';
import { JwtTokenService } from './jwt-token.service';
import { RoleRepository } from 'src/role/repository/role.repository';
import { OrganizationAdminRepository } from 'src/organization-admin/repository/organization-admin.repository';

@Global()
@Module({
  providers: [
    JwtTokenService,
    RoleRepository,
    OrganizationAdminRepository,
  ],
  exports: [JwtTokenService],
})
export class JwtTokenModule { }
