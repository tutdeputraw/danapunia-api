import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateProgramDto implements Prisma.ProgramCreateInput {
    @IsNotEmpty()
    name: string;

    @IsOptional()
    createdAt?: string | Date;

    @IsNotEmpty()
    deadline: string | Date;

    @IsNotEmpty()
    moneyTargets: number;

    @IsOptional()
    collectedMoney?: number;

    @IsNotEmpty()
    Organization?: Prisma.OrganizationCreateNestedOneWithoutProgramInput;


    @IsOptional()
    PendharmaPunia?: Prisma.PendharmaPuniaCreateNestedManyWithoutProgramInput;

    @IsOptional()
    Punia?: Prisma.PuniaCreateNestedManyWithoutProgramInput;

    @IsOptional()
    PuniaProgress?: Prisma.ProgramProgressCreateNestedManyWithoutProgramInput;
}
