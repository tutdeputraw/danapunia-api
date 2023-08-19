import { Module } from '@nestjs/common';
import { PendharmaPuniaRepository } from 'src/pendharma-punia/repository/pendharma-punia.repository';
import { OrganizationAdminRepository } from 'src/organization-admin/repository/organization-admin.repository';
import { UsersModule } from 'src/users/users.module';
import { UsersRepository } from 'src/users/repository/users.repository';
import { PendharmaPuniaAuthController } from './pendharma-punia/controller/auth-pendharma-punia.controller';
import { OrganizationAdminAuthController } from './organization-admin/controller/organization-admin.controller';
import { OrganizationAdminAuthService } from './organization-admin/service/organization-admin.service';
import { PendharmaPuniaAuthService } from './pendharma-punia/service/pendharma-punia.service';

@Module({
  controllers: [
    PendharmaPuniaAuthController,
    OrganizationAdminAuthController,
  ],
  providers: [
    PendharmaPuniaAuthService,
    OrganizationAdminAuthService,
    PendharmaPuniaRepository,
    OrganizationAdminRepository,
    UsersRepository
  ],
})
export class AuthModule { }
