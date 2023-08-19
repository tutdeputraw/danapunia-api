import { Controller, Post } from '@nestjs/common';
import { OrganizationAdminAuthService } from './organization-admin.service';

@Controller('auth/organization-admin')
export class OrganizationAdminAuthController {
    constructor(
        private organizationAdminAuthService: OrganizationAdminAuthService
    ) { }

    @Post('sign-in')
    async signIn() {
        return this.organizationAdminAuthService.signIn();
    }

    @Post('sign-up')
    async signUp() {
        return this.organizationAdminAuthService.signUp();
    }
}