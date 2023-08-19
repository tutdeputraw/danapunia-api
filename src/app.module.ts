import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { OrganizationAdminModule } from './organization-admin/organization-admin.module';
import { PendharmaPuniaModule } from './pendharma-punia/pendharma-punia.module';
import { PendharmaPuniaRepository } from './pendharma-punia/pendharma-punia.repository';

@Module({
  imports: [UsersModule, PrismaModule, AuthModule, OrganizationAdminModule, PendharmaPuniaModule,],
  controllers: [],
})
export class AppModule { }
