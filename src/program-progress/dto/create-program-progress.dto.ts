import { Prisma } from "@prisma/client";
import { IsNotEmpty } from "class-validator";

export class CreateProgramProgressDto implements Prisma.ProgramProgressCreateInput {
    media: Buffer;
    title: string;
    description: string;
    createdAt?: string | Date;
    Program?: Prisma.ProgramCreateNestedOneWithoutPuniaProgressInput;
}
