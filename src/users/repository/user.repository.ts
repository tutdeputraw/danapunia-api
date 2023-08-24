import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/_common/prisma/service/prisma.service';

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) { }

    async createUser(
        data: Prisma.UserCreateInput
    ): Promise<User> {
        return await this.prisma.user.create({ data });
    }

    async getUser(
        where: Prisma.UserWhereUniqueInput,
        include?: Prisma.UserInclude,
        select?: Prisma.UserSelect,
    ): Promise<User | null> {
        return this.prisma.user.findUnique({
            where,
            include,
        });
    }

    async getUsers(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
        include?: Prisma.UserInclude;
    }): Promise<User[]> {
        const { skip, take, cursor, where, orderBy, include } = params;
        return this.prisma.user.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include,
        });
    }

    async updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User> {
        const { where, data } = params;
        return this.prisma.user.update({
            data,
            where,
        });
    }

    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({
            where,
        });
    }
}
