import { PrismaClient } from '@prisma/client';

export type ApolloContext = {
  req: Request;
  res: Response;
  prisma: PrismaClient;
};
