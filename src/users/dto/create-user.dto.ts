import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsEmail, IsOptional, IsString, IsDate, IsNumber } from "class-validator";

export class CreateUserDTO implements Prisma.UserCreateInput {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsDate()
    birthDate?: string | Date;

    @IsOptional()
    @IsNumber()
    organizationAdmin?: Prisma.OrganizationAdminCreateNestedOneWithoutUserInput;

    @IsOptional()
    @IsNumber()
    pendharmaPunia?: Prisma.PendharmaPuniaCreateNestedOneWithoutUserInput;
}