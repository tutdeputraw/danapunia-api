import { Module } from '@nestjs/common';
import { PendharmaPuniaAuthController } from './pendharma-punia/auth-pendharma-punia.controller';
import { OrganizationAdminAuthController } from './organization-admin/organization-admin.controller';
import { PendharmaPuniaService } from './pendharma-punia/pendharma-punia.service';
import { OrganizationAdminAuthService } from './organization-admin/organization-admin.service';
import { PendharmaPuniaRepository } from 'src/pendharma-punia/repository/pendharma-punia.repository';
import { OrganizationAdminRepository } from 'src/organization-admin/repository/organization-admin.repository';
import { UsersModule } from 'src/users/users.module';
import { UsersRepository } from 'src/users/repository/users.repository';

@Module({
  controllers: [
    PendharmaPuniaAuthController,
    OrganizationAdminAuthController,
  ],
  providers: [
    PendharmaPuniaService,
    OrganizationAdminAuthService,
    PendharmaPuniaRepository,
    OrganizationAdminRepository,
    UsersRepository
  ],
})
export class AuthModule { }
