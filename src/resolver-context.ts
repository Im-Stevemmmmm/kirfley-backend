import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

export type ResolverContext = {
    req: Request & { session: Express.Session };
    res: Response;
    prisma: PrismaClient;
};
