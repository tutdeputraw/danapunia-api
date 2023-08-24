import { Controller, Get, Post, Query, UseGuards, UsePipes, } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Roles } from 'src/_common/roles/roles.decorator';
import { Role } from 'src/_common/roles/role.enum';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    async getUsers(
        @Query() filters: Prisma.UserWhereInput,
    ) {
        const users = await this.userService.getUsers(filters);
        return { data: users }
    }
}
