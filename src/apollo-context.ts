import { PrismaClient } from '@prisma/client';

export default interface ApolloContext {
  prisma: PrismaClient;
}
