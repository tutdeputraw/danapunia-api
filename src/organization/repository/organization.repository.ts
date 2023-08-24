import { Injectable } from '@nestjs/common';
import { Prisma, Organization } from '@prisma/client';
import { PrismaService } from 'src/_common/prisma/service/prisma.service';

@Injectable()
export class OrganizationRepository {
    constructor(private prisma: PrismaService) { }

    async createOrganization(
        data: Prisma.OrganizationCreateInput
    ): Promise<Organization> {
        return await this.prisma.organization.create({ data });
    }

    async getOrganization(
        where: Prisma.OrganizationWhereUniqueInput,
        include?: Prisma.OrganizationInclude,
        select?: Prisma.OrganizationSelect,
    ): Promise<Organization | null> {
        return this.prisma.organization.findUnique({
            where,
            include,
        });
    }

    async getOrganizations(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.OrganizationWhereUniqueInput;
        where?: Prisma.OrganizationWhereInput;
        orderBy?: Prisma.OrganizationOrderByWithRelationInput;
        include?: Prisma.OrganizationInclude;
    }): Promise<Organization[]> {
        const { skip, take, cursor, where, orderBy, include } = params;
        return this.prisma.organization.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include,
        });
    }

    async updateOrganization(params: {
        where: Prisma.OrganizationWhereUniqueInput;
        data: Prisma.OrganizationUpdateInput;
    }): Promise<Organization> {
        const { where, data } = params;
        return this.prisma.organization.update({
            data,
            where,
        });
    }

    async deleteOrganization(where: Prisma.OrganizationWhereUniqueInput): Promise<Organization> {
        return this.prisma.organization.delete({
            where,
        });
    }
}
