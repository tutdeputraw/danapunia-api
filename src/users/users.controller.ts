import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Post()
    createUser() {

    }

    @Get()
    getUsers() {

    }
}
