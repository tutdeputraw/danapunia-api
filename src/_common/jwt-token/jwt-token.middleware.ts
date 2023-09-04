import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from 'src/users/service/user.service';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
    constructor(private userService: UserService) { }

    async use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization;

        if (token) {
            req['token'] = token.substring(7);
        }

        next();
    }
}
