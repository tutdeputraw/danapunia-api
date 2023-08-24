import { Body, Controller, Post, } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { Public } from '../constants';
import { SignInDTO } from '../dto/sign-in.dto';
import { SignUpOrganizationAdminDTO, SignUpPendharmaPuniaDTO } from '../dto/sign-up.dto';
import { Role } from 'src/_common/roles/role.enum';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('sign-in')
    @Public()
    async signIn(@Body() data: SignInDTO) {
        return this.authService.signIn(data);
    }

    @Public()
    @Post('sign-up/pendharma-punia')
    async signUpPendharmaPunia(
        @Body() userData: SignUpPendharmaPuniaDTO
    ) {
        const user = await this.authService.signUpPendharmaPunia(userData);
        delete user.password;

        return user;
        // return userData
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
