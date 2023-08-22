import { Controller, Get, Post, Query, UseGuards, UsePipes, } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Roles } from 'src/_common/roles/roles.decorator';
import { Role } from 'src/_common/roles/role.enum';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Post()
    async createUser() {
        // return this.userService
        // return { message: "OK" };
        const user = await this.userService.createUser();
        return user;
    }

    @Post('/pendharma-punia')
    async createPendharmaPunia() { }

    @Post()
    async createAdmin() { }

    @Get()
    async getUsers(
        @Query() filters: Prisma.UserWhereInput,
    ) {
        const users = await this.userService.getUsers(filters);
        return { data: users }
    }
}
