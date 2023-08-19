import { Injectable } from '@nestjs/common';
import { OrganizationAdmin, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/service/prisma.service';

@Injectable()
export class OrganizationAdminRepository {
    constructor(private prisma: PrismaService) { }

    async createPendharmaPunia(
        data: Prisma.OrganizationAdminCreateInput
    ): Promise<OrganizationAdmin> {
        return this.prisma.organizationAdmin.create({ data });
    }

    async getPendharmaPunia(
        userWhereUniqueInput: Prisma.OrganizationAdminWhereUniqueInput,
    ): Promise<OrganizationAdmin | null> {
        return this.prisma.organizationAdmin.findUnique({
            where: userWhereUniqueInput,
        });
    }

    async getPendharmaPunias(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.OrganizationAdminWhereUniqueInput;
        where?: Prisma.OrganizationAdminWhereInput;
        orderBy?: Prisma.OrganizationAdminOrderByWithRelationInput;
    }): Promise<OrganizationAdmin[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.organizationAdmin.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async updatePendharmaPunia(params: {
        where: Prisma.OrganizationAdminWhereUniqueInput;
        data: Prisma.OrganizationAdminUpdateInput;
    }): Promise<OrganizationAdmin> {
        const { where, data } = params;
        return this.prisma.organizationAdmin.update({
            data,
            where,
        });
    }

    async deletePendharmaPunia(
        where: Prisma.OrganizationAdminWhereUniqueInput
    ): Promise<OrganizationAdmin> {
        return this.prisma.organizationAdmin.delete({
            where,
        });
    }
}
