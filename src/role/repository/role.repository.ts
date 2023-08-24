import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { PrismaService } from 'src/_common/prisma/service/prisma.service';

@Injectable()
export class RoleRepository {
    constructor(private prisma: PrismaService) { }

    async createRole(
        data: Prisma.RoleCreateInput
    ): Promise<Role> {
        return await this.prisma.role.create({ data });
    }

    async getRole(
        where: Prisma.RoleWhereUniqueInput,
        include?: Prisma.RoleInclude,
        select?: Prisma.RoleSelect,
    ): Promise<Role | null> {
        return this.prisma.role.findUnique({
            where,
            include,
        });
    }

    async getRoles(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.RoleWhereUniqueInput;
        where?: Prisma.RoleWhereInput;
        orderBy?: Prisma.RoleOrderByWithRelationInput;
        include?: Prisma.RoleInclude;
    }): Promise<Role[]> {
        const { skip, take, cursor, where, orderBy, include } = params;
        return this.prisma.role.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include,
        });
    }

    async updateRole(params: {
        where: Prisma.RoleWhereUniqueInput;
        data: Prisma.RoleUpdateInput;
    }): Promise<Role> {
        const { where, data } = params;
        return this.prisma.role.update({
            data,
            where,
        });
    }

    async deleteRole(where: Prisma.RoleWhereUniqueInput): Promise<Role> {
        return this.prisma.role.delete({
            where,
        });
    }
}
