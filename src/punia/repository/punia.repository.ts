import { Injectable } from '@nestjs/common';
import { Prisma, Punia } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/_common/prisma/service/prisma.service';

@Injectable()
export class PuniaRepository {
    constructor(private prisma: PrismaService) { }

    async createPunia(
        data: Prisma.PuniaCreateInput
    ): Promise<Punia> {
        return await this.prisma.punia.create({ data });
    }

    async getPunia(
        where: Prisma.PuniaWhereUniqueInput,
        include?: Prisma.PuniaInclude,
        select?: Prisma.PuniaSelect,
    ): Promise<Punia | null> {
        return this.prisma.punia.findUnique({
            where,
            include,
        });
    }

    async getPunias(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PuniaWhereUniqueInput;
        where?: Prisma.PuniaWhereInput;
        orderBy?: Prisma.PuniaOrderByWithRelationInput;
        include?: Prisma.PuniaInclude;
    }): Promise<Punia[]> {
        const { skip, take, cursor, where, orderBy, include } = params;
        return this.prisma.punia.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include,
        });
    }

    async updatePunia(params: {
        where: Prisma.PuniaWhereUniqueInput;
        data: Prisma.PuniaUpdateInput;
    }): Promise<Punia> {
        const { where, data } = params;
        return this.prisma.punia.update({
            data,
            where,
        });
    }

    async deletePunia(where: Prisma.PuniaWhereUniqueInput): Promise<Punia> {
        return this.prisma.punia.delete({
            where,
        });
    }
}
