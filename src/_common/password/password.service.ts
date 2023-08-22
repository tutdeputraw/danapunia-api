import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
    async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }

    async comparePasswords(
        providedPassword: string,
        storedPasswordHash: string
    ): Promise<boolean> {
        return bcrypt.compare(providedPassword, storedPasswordHash);
    }
}
