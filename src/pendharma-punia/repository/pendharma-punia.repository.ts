import { Injectable } from '@nestjs/common';
import { PendharmaPunia, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/service/prisma.service';

@Injectable()
export class PendharmaPuniaRepository {
    constructor(private prisma: PrismaService) { }

    async createPendharmaPunia(
        data: Prisma.PendharmaPuniaCreateInput
    ): Promise<PendharmaPunia> {
        return await this.prisma.pendharmaPunia.create({ data });
    }

    async getPendharmaPunia(
        userWhereUniqueInput: Prisma.PendharmaPuniaWhereUniqueInput,
    ): Promise<PendharmaPunia | null> {
        return this.prisma.pendharmaPunia.findUnique({
            where: userWhereUniqueInput,
        });
    }

    async getPendharmaPunias(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PendharmaPuniaWhereUniqueInput;
        where?: Prisma.PendharmaPuniaWhereInput;
        orderBy?: Prisma.PendharmaPuniaOrderByWithRelationInput;
    }): Promise<PendharmaPunia[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.pendharmaPunia.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async updatePendharmaPunia(params: {
        where: Prisma.PendharmaPuniaWhereUniqueInput;
        data: Prisma.PendharmaPuniaUpdateInput;
    }): Promise<PendharmaPunia> {
        const { where, data } = params;
        return this.prisma.pendharmaPunia.update({
            data,
            where,
        });
    }

    async deletePendharmaPunia(
        where: Prisma.PendharmaPuniaWhereUniqueInput
    ): Promise<PendharmaPunia> {
        return this.prisma.pendharmaPunia.delete({
            where,
        });
    }
}
