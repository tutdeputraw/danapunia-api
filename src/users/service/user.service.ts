import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private repository: UserRepository) { }

    getUsers(where: Prisma.UserWhereInput) {
        return this.repository.getUsers({
            where,
            include: { OrganizationAdmin: true, PendharmaPunia: true }
        });
    }
}
