import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../service/users.service';

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
    async getUsers() {
        const users = await this.userService.getUsers();
        return { data: users };
    }
}
