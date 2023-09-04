import { Module } from '@nestjs/common';
import { OrganizationAdminRepository } from 'src/organization-admin/repository/organization-admin.repository';
import { UserModule } from 'src/users/user.module';
import { UserRepository } from 'src/users/repository/user.repository';
import { PasswordService } from 'src/_common/password/password.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';
import { PendharmaPuniaRepository } from 'src/pendharma-punia/repository/pendharma-punia.repository';
import { RoleRepository } from 'src/role/repository/role.repository';

@Module({
  controllers: [
    //
    AuthController,
  ],
  imports: [
    //
    UserModule,
    JwtModule.register({
      global: true,
    }),
  ],
  providers: [
    PendharmaPuniaRepository,
    OrganizationAdminRepository,
    UserRepository,
    RoleRepository,
    PasswordService,
    JwtService,
    AuthService,
    // OrganizationRepos
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule { }
