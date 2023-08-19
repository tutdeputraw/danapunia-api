import { Module } from '@nestjs/common';
import { OrganizationAdminRepository } from './organization-admin.repository';

@Module({
  providers: [OrganizationAdminRepository],
  exports: [OrganizationAdminRepository]
})
export class OrganizationAdminModule { }
