import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async findUnique(where: Prisma.UserWhereUniqueInput) {
        return await this.prisma.user.findUnique({ where });
    }

    async findOne(where: Prisma.UserWhereInput) {
        return await this.prisma.user.findFirst({ where });
    }

    async create(data: Prisma.UserCreateInput) {
        return await this.prisma.user.create({ data });
    }
}
