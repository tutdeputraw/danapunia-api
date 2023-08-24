import { Injectable } from '@nestjs/common';
import { Prisma, Program } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/_common/prisma/service/prisma.service';

@Injectable()
export class ProgramRepository {
    constructor(private prisma: PrismaService) { }

    async createProgram(
        data: Prisma.ProgramCreateInput
    ): Promise<Program> {
        return await this.prisma.program.create({ data });
    }

    async getProgram(
        where: Prisma.ProgramWhereUniqueInput,
        include?: Prisma.ProgramInclude,
        select?: Prisma.ProgramSelect,
    ): Promise<Program | null> {
        return this.prisma.program.findUnique({
            where,
            include,
        });
    }

    async getPrograms(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ProgramWhereUniqueInput;
        where?: Prisma.ProgramWhereInput;
        orderBy?: Prisma.ProgramOrderByWithRelationInput;
        include?: Prisma.ProgramInclude;
    }): Promise<Program[]> {
        const { skip, take, cursor, where, orderBy, include } = params;
        return this.prisma.program.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include,
        });
    }

    async updateProgram(params: {
        where: Prisma.ProgramWhereUniqueInput;
        data: Prisma.ProgramUpdateInput;
    }): Promise<Program> {
        const { where, data } = params;
        return this.prisma.program.update({
            data,
            where,
        });
    }

    async deleteProgram(where: Prisma.ProgramWhereUniqueInput): Promise<Program> {
        return this.prisma.program.delete({
            where,
        });
    }
}
