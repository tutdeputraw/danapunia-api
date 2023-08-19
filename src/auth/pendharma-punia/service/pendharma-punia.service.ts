import { Injectable } from '@nestjs/common';
import { AuthBaseService } from '../auth.base';
import { PendharmaPuniaRepository } from 'src/pendharma-punia/repository/pendharma-punia.repository';
import { PendharmaPunia, Prisma, User } from '@prisma/client';
import { UsersRepository } from 'src/users/repository/users.repository';

@Injectable()
export class PendharmaPuniaService implements AuthBaseService {
    constructor(
        private pendharmaPuniaRepository: PendharmaPuniaRepository,
        private userRepository: UsersRepository,
    ) { }

    signIn() {
        //check email if exist
        //compare password
        //create token
        //return
        return { message: 'OK' };
    }

    async signUp(data: Prisma.UserCreateInput) {
        // const user: User = await this.userRepository.createUser(data);
        // try {
        //     return await this.pendharmaPuniaRepository.createPendharmaPunia({
        //         User: {
        //             create: data
        //         }
        //     });
        // } catch (error) {
        //     if (error instanceof Prisma.PrismaClientKnownRequestError) {
        //         console.error('Unique constraint violation:', error.meta.target);
        //         console.error('Error message:', error.message);
        //     }
        // }
        // return this.pendharmaPuniaRepository.createPendharmaPunia({});
        return await this.pendharmaPuniaRepository.createPendharmaPunia({
            User: {
                create: data
            }
        });
    }
}
