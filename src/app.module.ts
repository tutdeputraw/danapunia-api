import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { PrismaModule } from './_common/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { OrganizationAdminModule } from './organization-admin/organization-admin.module';
import { PendharmaPuniaModule } from './pendharma-punia/pendharma-punia.module';
import { PasswordModule } from './_common/password/password.module';
import { JwtTokenModule } from './_common/jwt-token/jwt-token.module';
import { ProgramModule } from './program/program.module';
import { PuniaModule } from './punia/punia.module';
import { PuraModule } from './pura/pura.module';
import { ProgramProgressModule } from './program-progress/program-progress.module';
import { RoleModule } from './role/role.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    AuthModule,
    OrganizationAdminModule,
    PendharmaPuniaModule,
    PasswordModule,
    JwtTokenModule,
    RoleModule,
    ProgramProgressModule,
    PuraModule,
    PuniaModule,
    ProgramModule,
    OrganizationModule,
  ],
})
export class AppModule { }
