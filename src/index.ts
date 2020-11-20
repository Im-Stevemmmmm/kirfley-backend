import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import UserResolver from './resolvers/user-resolver';

const prisma = new PrismaClient();

const main = async () => {
  const app = express();
  app.use(cors());

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: {
      prisma,
    },
  });

  apolloServer.applyMiddleware({ app });

  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`server started on localhost:${port}`);
  });
};

main()
  .catch(err => console.log(err))
  .finally(async () => {
    await prisma.$disconnect();
  });
