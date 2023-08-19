import { Module } from '@nestjs/common';
import { OrganizationAdminRepository } from './repository/organization-admin.repository';

@Module({
  providers: [OrganizationAdminRepository],
  exports: [OrganizationAdminRepository]
})
export class OrganizationAdminModule { }
