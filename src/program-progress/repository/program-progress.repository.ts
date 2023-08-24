import { Injectable } from '@nestjs/common';
import { Prisma, ProgramProgress } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/_common/prisma/service/prisma.service';

@Injectable()
export class ProgramProgressRepository {
    constructor(private prisma: PrismaService) { }

    async createProgramProgress(
        data: Prisma.ProgramProgressCreateInput
    ): Promise<ProgramProgress> {
        return await this.prisma.programProgress.create({ data });
    }

    async getProgramProgress(
        where: Prisma.ProgramProgressWhereUniqueInput,
        include?: Prisma.ProgramProgressInclude,
        select?: Prisma.ProgramProgressSelect,
    ): Promise<ProgramProgress | null> {
        return this.prisma.programProgress.findUnique({
            where,
            include,
        });
    }

    async getProgramProgresss(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ProgramProgressWhereUniqueInput;
        where?: Prisma.ProgramProgressWhereInput;
        orderBy?: Prisma.ProgramProgressOrderByWithRelationInput;
        include?: Prisma.ProgramProgressInclude;
    }): Promise<ProgramProgress[]> {
        const { skip, take, cursor, where, orderBy, include } = params;
        return this.prisma.programProgress.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include,
        });
    }

    async updateProgramProgress(params: {
        where: Prisma.ProgramProgressWhereUniqueInput;
        data: Prisma.ProgramProgressUpdateInput;
    }): Promise<ProgramProgress> {
        const { where, data } = params;
        return this.prisma.programProgress.update({
            data,
            where,
        });
    }

    async deleteProgramProgress(where: Prisma.ProgramProgressWhereUniqueInput): Promise<ProgramProgress> {
        return this.prisma.programProgress.delete({
            where,
        });
    }
}
