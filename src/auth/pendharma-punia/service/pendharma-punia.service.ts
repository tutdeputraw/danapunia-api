import { Injectable } from '@nestjs/common';
import { PendharmaPuniaRepository } from 'src/pendharma-punia/repository/pendharma-punia.repository';
import { Prisma, } from '@prisma/client';
import { AuthBaseService } from 'src/auth/auth.base';

@Injectable()
export class PendharmaPuniaAuthService implements AuthBaseService {
    constructor(
        private pendharmaPuniaRepository: PendharmaPuniaRepository,
    ) { }

    signIn() {
        //check email if exist
        //compare password
        //create token
        //return
        return { message: 'OK' };
    }

    async signUp(data: Prisma.UserCreateInput) {
        await this.pendharmaPuniaRepository.createPendharmaPunia({
            User: {
                create: data
            }
        });
        return data;
    }
}
