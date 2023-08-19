import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repository/users.repository';

@Injectable()
export class UsersService {
    constructor(private repository: UsersRepository) { }

    getUsers() {
        return this.repository.getUsers({});
    }

    createUser() {
        return this.repository.createUser({ email: 'john', password: 'john123' });
    }
}
