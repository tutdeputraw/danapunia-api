import { Module } from '@nestjs/common';
import { PendharmaPuniaRepository } from 'src/pendharma-punia/repository/pendharma-punia.repository';
import { OrganizationAdminRepository } from 'src/organization-admin/repository/organization-admin.repository';
import { UsersModule } from 'src/users/users.module';
import { UsersRepository } from 'src/users/repository/users.repository';
import { PasswordService } from 'src/_common/password/password.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';

@Module({
  controllers: [
    //
    AuthController,
  ],
  imports: [
    //
    UsersModule,
    JwtModule.register({
      global: true,
    }),
  ],
  providers: [
    PendharmaPuniaRepository,
    OrganizationAdminRepository,
    UsersRepository,
    PasswordService,
    JwtService,
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule { }
