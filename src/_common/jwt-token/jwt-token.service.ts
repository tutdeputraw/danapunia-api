import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { JWTTokenDTO } from './jwt-token.dto';
import { RoleRepository } from 'src/role/repository/role.repository';
import { Role } from 'src/role/role.enum';
import { OrganizationAdminRepository } from 'src/organization-admin/repository/organization-admin.repository';

@Injectable()
export class JwtTokenService {
    constructor(
        private jwtService: JwtService,
        private roleRepository: RoleRepository,
        private organizationAdminRepository: OrganizationAdminRepository,
    ) { }

    async getUserJWT(data: User): Promise<String> {
        const payload = await this.generatePayload(data);
        return await this.generateToken(payload);
    }

    async verifyUserJWT(token: string): Promise<any> {
        return await this.jwtService.verifyAsync(token, {
            secret: process.env.JWT_TOKEN,
        });
    }

    private async generateToken(payload: JWTTokenDTO): Promise<String> {
        return this.jwtService.signAsync(payload, {
            privateKey: process.env.JWT_TOKEN,
            expiresIn: '12h',
        });
    }

    private async generatePayload(data: User): Promise<JWTTokenDTO> {
        const payload = {
            sub: data.id,
            email: data.email,
            roleId: data.roleId,
            userId: data.id,
        };

        const role = await this.roleRepository.getRole({ id: data.roleId });
        payload['roleName'] = role.name

        if (role.name === Role.OrganizationAdmin) {
            const organizationAdmin = await this.organizationAdminRepository.getOrganizationAdmin(
                { userId: payload['userId'], },
                { Organization: true },
            );
            payload['organizationAdmin'] = organizationAdmin;
        }

        return payload;
    }
}
