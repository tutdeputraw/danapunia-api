import { Controller, Delete, Get, Param, Post, Query, UseGuards, UsePipes, } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/role.enum';
import { Public } from 'src/auth/constants';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    // @Roles(Role.OrganizationAdmin)
    async getUsers(
        @Query() filters: Prisma.UserWhereInput,
    ) {
        const users = await this.userService.getUsers(filters);
        return { data: users }
    }

    @Get('byToken')
    @Public()
    async getUserByToken(@Query('token') token: string) {
        return this.userService.getUserByToken(token);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(+id);
    }
}
