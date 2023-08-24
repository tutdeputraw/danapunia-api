import { Module } from '@nestjs/common';
import { OrganizationController } from './controller/organization.controller';
import { OrganizationRepository } from './repository/organization.repository';
import { OrganizationService } from './service/organization.service';

@Module({
  controllers: [OrganizationController],
  providers: [
    OrganizationService,
    OrganizationRepository
  ],
})
export class OrganizationModule { }
