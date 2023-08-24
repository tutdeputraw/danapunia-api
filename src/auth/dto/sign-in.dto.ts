import { IsNotEmpty, IsEmail } from "class-validator";

export class SignInDTO {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}