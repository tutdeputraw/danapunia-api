import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PasswordService } from 'src/_common/password/password.service';
import { PendharmaPuniaRepository } from 'src/pendharma-punia/repository/pendharma-punia.repository';
import { UsersRepository } from 'src/users/repository/users.repository';
import { SignInDTO } from '../dto/auth.dto';
import { JwtTokenService } from 'src/_common/jwt-token/jwt-token.service';
import { OrganizationAdminRepository } from 'src/organization-admin/repository/organization-admin.repository';

@Injectable()
export class AuthService {
    constructor(
        private pendharmaPuniaRepository: PendharmaPuniaRepository,
        private organizationAdminRepository: OrganizationAdminRepository,
        private passwordService: PasswordService,
        private userRepository: UsersRepository,
        private jwtTokenService: JwtTokenService,
    ) { }

    async signIn(data: SignInDTO) {
        const user = await this.userRepository.getUser({ email: data.email });
        if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

        const isPasswordMatched = await this.passwordService.comparePasswords(data.password, user.password);
        if (!isPasswordMatched) throw new HttpException('Password does not match', HttpStatus.UNAUTHORIZED);

        const token = await this.jwtTokenService.getUserJWT(user);

        return { token };
    }

    async signUpPendharmaPunia(data: Prisma.UserCreateInput) {
        const password = await this.passwordService.hashPassword(data.password);

        await this.pendharmaPuniaRepository.createPendharmaPunia({
            User: {
                create: { ...data, password }
            }
        });
        return data;
    }

    async signUpOrganizationAdmin(data: Prisma.UserCreateInput) {
        const password = await this.passwordService.hashPassword(data.password);

        await this.organizationAdminRepository.createOrganizationAdmin({
            User: {
                create: { ...data, password }
            }
        });
        return data;
    }
}
