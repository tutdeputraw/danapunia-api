import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';
import { PendharmaPuniaAuthService } from '../service/pendharma-punia.service';

@Controller('auth/pendharma-punia')
export class PendharmaPuniaAuthController {
    constructor(private pendharmaPuniaService: PendharmaPuniaAuthService) { }

    @Post('sign-in')
    async signIn() {
        return this.pendharmaPuniaService.signIn();
    }

    @Post('sign-up')
    @UsePipes(new ValidationPipe())
    async signUp(@Body() userData: CreateUserDTO) {
        const user = await this.pendharmaPuniaService.signUp(userData);
        delete user.password;

        return { data: user };
    }
}
