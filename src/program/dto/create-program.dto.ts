import { Prisma } from "@prisma/client";
import { IsEmpty, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateProgramDto implements Prisma.ProgramCreateInput {
    @IsNotEmpty()
    name: string;

    @IsEmpty()
    createdAt?: string | Date;

    @IsNotEmpty()
    deadline: string | Date;

    @IsNotEmpty()
    @IsNumber()
    moneyTargets: number;

    @IsOptional()
    collectedMoney?: number;

    @IsEmpty()
    Organization?: Prisma.OrganizationCreateNestedOneWithoutProgramInput;

    @IsOptional()
    @IsNumber()
    organizationId: number;

    @IsOptional()
    @IsNumber()
    organizationAdminId: number;


    @IsOptional()
    PendharmaPunia?: Prisma.PendharmaPuniaCreateNestedManyWithoutProgramInput;

    @IsOptional()
    Punia?: Prisma.PuniaCreateNestedManyWithoutProgramInput;

    @IsOptional()
    PuniaProgress?: Prisma.ProgramProgressCreateNestedManyWithoutProgramInput;
}
