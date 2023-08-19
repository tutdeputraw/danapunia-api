import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PendharmaPuniaService as PendharmaPuniaAuthService } from './pendharma-punia.service';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';

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
        // const pendharmaPunia = await PendharmaPuniaRepository
        return { data: user };
    }
}
