import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { Prisma } from '@prisma/client';
import { JwtTokenService } from 'src/_common/jwt-token/jwt-token.service';


@Injectable()
export class UserService {
    constructor(
        private repository: UserRepository,
        private jwtTokenService: JwtTokenService,
        private userRepository: UserRepository,
    ) { }

    getUsers(where: Prisma.UserWhereInput) {
        return this.repository.getUsers({
            where,
            include: { OrganizationAdmin: true, PendharmaPunia: true }
        });
    }

    getUserByToken(token: string) {
        return this.jwtTokenService.verifyUserJWT(token);
    }

    remove(id: number) {
        return this.userRepository.deleteUser({ id });
    }
}
