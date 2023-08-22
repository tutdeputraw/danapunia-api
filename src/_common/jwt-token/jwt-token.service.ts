import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class JwtTokenService {
    constructor(private jwtService: JwtService) { }

    async getUserJWT(data: User): Promise<String> {
        const payload = this.generatePayload(data);
        return await this.generateToken(payload);
    }

    async verifyUserJWT(token: string): Promise<any> {
        return await this.jwtService.verifyAsync(token, {
            secret: process.env.JWT_TOKEN,
        });
    }

    private async generateToken(payload: object): Promise<String> {
        return this.jwtService.signAsync(payload, {
            privateKey: process.env.JWT_TOKEN,
            expiresIn: '1h',
        });
    }

    private generatePayload(data: User): object {
        return {
            sub: data.id,
            email: data.email
        };
    }
}
