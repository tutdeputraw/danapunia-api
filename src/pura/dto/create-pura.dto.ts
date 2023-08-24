import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreatePuraDto implements Prisma.PuraCreateInput {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    address: string;

    @IsOptional()
    createdAt?: string | Date;

    @IsOptional()
    Organization?: Prisma.OrganizationCreateNestedManyWithoutPuraInput;
}
