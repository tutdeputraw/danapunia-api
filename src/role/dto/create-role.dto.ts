import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateRoleDto implements Prisma.RoleCreateInput {
    @IsNotEmpty()
    name: string;

    @IsOptional()
    User?: Prisma.UserCreateNestedManyWithoutRoleInput;
}
