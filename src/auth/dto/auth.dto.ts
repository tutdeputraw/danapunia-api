import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsEmail, IsOptional, IsString, IsDate, IsNumber } from "class-validator";

export class SignInDTO {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}