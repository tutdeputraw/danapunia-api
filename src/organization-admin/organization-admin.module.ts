import { Module } from '@nestjs/common';
import { OrganizationAdminRepository } from './repository/organization-admin.repository';
import { OrganizationAdminService } from './service/organization-admin.service';
import { OrganizationAdminController } from './controller/organization-admin.controller';

@Module({
  providers: [
    OrganizationAdminRepository,
    OrganizationAdminService,
  ],
  exports: [OrganizationAdminRepository],
  controllers: [OrganizationAdminController]
})
export class OrganizationAdminModule { }

