import { Body, Controller, Post, } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { Public } from '../constants';
import { SignInDTO } from '../dto/sign-in.dto';
import { SignUpOrganizationAdminDTO, SignUpPendharmaPuniaDTO } from '../dto/sign-up.dto';
import { SkipAuth } from 'src/role/constants';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('sign-in')
    @Public()
    @SkipAuth()
    async signIn(@Body() data: SignInDTO) {
        return this.authService.signIn(data);
    }

    @Public()
    @SkipAuth()
    @Post('sign-up/pendharma-punia')
    async signUpPendharmaPunia(
        @Body() userData: SignUpPendharmaPuniaDTO
    ) {
        const user = await this.authService.signUpPendharmaPunia(userData);
        delete user.password;

        return user;
    }

    @Public()
    @Post('sign-up/organization-admin')
    async signUpOrganizationAdmin(
        @Body() userData: SignUpOrganizationAdminDTO
    ) {
        const user = await this.authService.signUpOrganizationAdmin(userData);
        delete user.password;

        return user;
    }
}
