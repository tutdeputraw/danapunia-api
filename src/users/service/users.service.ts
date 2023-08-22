import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repository/users.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private repository: UsersRepository) { }

    getUsers(where: Prisma.UserWhereInput) {
        return this.repository.getUsers({
            where,
        });
    }

    createUser() {
        return this.repository.createUser({ email: 'john', password: 'john123' });
    }
}
