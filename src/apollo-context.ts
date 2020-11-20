import { PrismaClient } from '@prisma/client';

export default interface ApolloContext {
  req: Request;
  res: Response;
  prisma: PrismaClient;
}
