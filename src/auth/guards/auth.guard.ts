import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { JwtTokenService } from 'src/_common/jwt-token/jwt-token.service';
import { IS_PUBLIC_KEY } from '../constants';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtTokenService: JwtTokenService,
        private reflector: Reflector,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        if (this.isPublicAPI(context)) return true;

        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) throw new UnauthorizedException();

        try {
            const payload = await this.jwtTokenService.verifyUserJWT(token);
            request['user'] = payload;
        } catch {
            throw new UnauthorizedException();
        }

        return true;
    }

    private isPublicAPI(context: ExecutionContext): boolean {
        return this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}