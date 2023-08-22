import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './_common/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { OrganizationAdminModule } from './organization-admin/organization-admin.module';
import { PendharmaPuniaModule } from './pendharma-punia/pendharma-punia.module';
import { PasswordModule } from './_common/password/password.module';
import { JwtTokenModule } from './_common/jwt-token/jwt-token.module';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    AuthModule,
    OrganizationAdminModule,
    PendharmaPuniaModule,
    PasswordModule,
    JwtTokenModule,
  ],
})
export class AppModule { }
