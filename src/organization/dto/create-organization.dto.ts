import { Prisma } from "@prisma/client";
import { IsDate, IsDateString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateOrganizationDto implements Prisma.OrganizationCreateManyInput {
    @IsNotEmpty()
    name: string;

    @IsOptional()
    createdAt?: string | Date;

    @IsNotEmpty()
    puraId?: number;
}
