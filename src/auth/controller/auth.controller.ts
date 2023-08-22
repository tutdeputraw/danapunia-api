import { Body, Controller, Post, Query } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';
import { SignInDTO } from '../dto/auth.dto';
import { AuthService } from '../service/auth.service';
import { Public } from '../constants';
import { Prisma } from '@prisma/client';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('sign-in')
    @Public()
    async signIn(@Body() data: SignInDTO) {
        return this.authService.signIn(data);
    }

    @Public()
    @Post('sign-up')
    async signUp(
        @Body() userData: CreateUserDTO,
        @Query('isAdmin') isAdmin: string,
    ) {
        var user: Prisma.UserCreateInput;

        if (!isAdmin || isAdmin.toLowerCase() === 'false') { // is pendharma punia
            user = await this.authService.signUpPendharmaPunia(userData);
        } else if (isAdmin.toLowerCase() === 'true') { // is organizationAdmin
            user = await this.authService.signUpOrganizationAdmin(userData);
        }

        delete user.password;

        return { user };
    }
}
