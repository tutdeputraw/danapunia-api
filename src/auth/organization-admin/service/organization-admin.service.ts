import { Injectable } from '@nestjs/common';
import { AuthBaseService } from '../auth.base';
import { OrganizationAdminRepository } from 'src/organization-admin/repository/organization-admin.repository';

@Injectable()
export class OrganizationAdminAuthService implements AuthBaseService {
    constructor(private organizationAdminRepository: OrganizationAdminRepository) { }

    signIn() {
        return { message: 'OK' };
    }

    signUp() {
        return { message: 'OK' };
    }

}
