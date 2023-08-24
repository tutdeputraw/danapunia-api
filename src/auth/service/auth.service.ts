import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PasswordService } from 'src/_common/password/password.service';
import { UserRepository } from 'src/users/repository/user.repository';
import { JwtTokenService } from 'src/_common/jwt-token/jwt-token.service';
import { OrganizationAdminRepository } from 'src/organization-admin/repository/organization-admin.repository';
import { PendharmaPuniaRepository } from 'src/pendharma-punia/repository/pendharma-punia.repository';
import { SignUpOrganizationAdminDTO, SignUpPendharmaPuniaDTO } from '../dto/sign-up.dto';
import { SignInDTO } from '../dto/sign-in.dto';
import { Role } from 'src/_common/roles/role.enum';

@Injectable()
export class AuthService {
    constructor(
        private passwordService: PasswordService,
        private jwtTokenService: JwtTokenService,
        private pendharmaPuniaRepository: PendharmaPuniaRepository,
        private organizationAdminRepository: OrganizationAdminRepository,
        private userRepository: UserRepository,
    ) { }

    async signIn(data: SignInDTO) {
        const user = await this.userRepository.getUser({
            email: data.email
        }, {
            OrganizationAdmin: true,
            PendharmaPunia: true
        });
        if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

        const isPasswordMatched = await this.passwordService.comparePasswords(data.password, user.password);
        if (!isPasswordMatched) throw new HttpException('Password does not match', HttpStatus.UNAUTHORIZED);

        delete user.password;

        const token = await this.jwtTokenService.getUserJWT(user);

        return { user, token };
    }

    async signUpPendharmaPunia(data: SignUpPendharmaPuniaDTO) {
        const { email, birthDate, createdAt, name, phoneNumber } = data;
        const password = await this.passwordService.hashPassword(data.password);

        await this.pendharmaPuniaRepository.createPendharmaPunia({
            User: {
                create: {
                    email, birthDate, createdAt, name, phoneNumber, password,
                    Role: {
                        connectOrCreate: {
                            where: { name: Role.PendharmaPunia },
                            create: { name: Role.PendharmaPunia }
                        },
                    }
                }
            },
        });
        return data;
    }

    async signUpOrganizationAdmin(data: SignUpOrganizationAdminDTO) {
        const { email, name, birthDate, createdAt, phoneNumber, ktpId } = data;
        const password = await this.passwordService.hashPassword(data.password);

        await this.organizationAdminRepository.createOrganizationAdmin({
            User: {
                create: {
                    email, name, birthDate, createdAt, phoneNumber, password,
                    Role: {
                        connectOrCreate: {
                            where: { name: Role.OrganizationAdmin },
                            create: { name: Role.OrganizationAdmin }
                        },
                    },
                }
            },
            Organization: {
                connect: { id: data.organizationId }
            },
            ktpId,
        });
        return data;
    }
}
