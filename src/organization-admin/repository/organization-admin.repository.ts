import { Injectable } from '@nestjs/common';
import { OrganizationAdmin, Prisma } from '@prisma/client';
import { PrismaService } from 'src/_common/prisma/service/prisma.service';

@Injectable()
export class OrganizationAdminRepository {
    constructor(private prisma: PrismaService) { }

    async createOrganizationAdmin(
        data: Prisma.OrganizationAdminCreateInput
    ): Promise<OrganizationAdmin> {
        return this.prisma.organizationAdmin.create({ data });
    }

    async getOrganizationAdmin(
        userWhereUniqueInput: Prisma.OrganizationAdminWhereUniqueInput,
        include?: Prisma.OrganizationAdminInclude
    ): Promise<OrganizationAdmin | null> {
        return this.prisma.organizationAdmin.findUnique({
            where: userWhereUniqueInput,
            include,
        });
    }

    async getOrganizationAdmins(params: {
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

    async updateOrganizationAdmin(params: {
        where: Prisma.OrganizationAdminWhereUniqueInput;
        data: Prisma.OrganizationAdminUpdateInput;
    }): Promise<OrganizationAdmin> {
        const { where, data } = params;
        return this.prisma.organizationAdmin.update({
            data,
            where,
        });
    }

    async deleteOrganizationAdmin(
        where: Prisma.OrganizationAdminWhereUniqueInput
    ): Promise<OrganizationAdmin> {
        return this.prisma.organizationAdmin.delete({
            where,
        });
    }
}
