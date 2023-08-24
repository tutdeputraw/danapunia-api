import { Injectable } from '@nestjs/common';
import { Prisma, Pura } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/_common/prisma/service/prisma.service';

@Injectable()
export class PuraRepository {
    constructor(private prisma: PrismaService) { }

    async createPura(
        data: Prisma.PuraCreateInput
    ): Promise<Pura> {
        return await this.prisma.pura.create({ data });
    }

    async getPura(
        where: Prisma.PuraWhereUniqueInput,
        include?: Prisma.PuraInclude,
        select?: Prisma.PuraSelect,
    ): Promise<Pura | null> {
        return this.prisma.pura.findUnique({
            where,
            include,
        });
    }

    async getPuras(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PuraWhereUniqueInput;
        where?: Prisma.PuraWhereInput;
        orderBy?: Prisma.PuraOrderByWithRelationInput;
        include?: Prisma.PuraInclude;
    }): Promise<Pura[]> {
        const { skip, take, cursor, where, orderBy, include } = params;
        return this.prisma.pura.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include,
        });
    }

    async updatePura(params: {
        where: Prisma.PuraWhereUniqueInput;
        data: Prisma.PuraUpdateInput;
    }): Promise<Pura> {
        const { where, data } = params;
        return this.prisma.pura.update({
            data,
            where,
        });
    }

    async deletePura(where: Prisma.PuraWhereUniqueInput): Promise<Pura> {
        return this.prisma.pura.delete({
            where,
        });
    }
}
