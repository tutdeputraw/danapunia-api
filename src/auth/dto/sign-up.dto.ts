import { IsNotEmpty, IsEmail, IsOptional, IsNumber, IsString, IsDate } from "class-validator";

export class SignUpOrganizationAdminDTO {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    phoneNumber?: string;

    @IsOptional()
    @IsDate()
    birthDate?: string | Date;

    @IsOptional()
    @IsDate()
    createdAt?: string | Date;

    @IsNotEmpty()
    @IsNumber()
    ktpId: number;

    @IsNotEmpty()
    @IsNumber()
    organizationId: number;
}

export class SignUpPendharmaPuniaDTO {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    phoneNumber?: string;

    @IsOptional()
    @IsDate()
    birthDate?: string | Date;

    @IsOptional()
    @IsDate()
    createdAt?: string | Date;
}