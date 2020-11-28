import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import Redis from 'ioredis';
import path from 'path';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { cookieName, production } from './constants';

const prisma = new PrismaClient();

const main = async () => {
  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);

  const app = express();

  app.set('trust proxy', 1);

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    }),
    session({
      name: cookieName,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 157680000000,
        httpOnly: true,
        sameSite: 'lax',
        secure: production,
        domain: undefined,
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        path.join(__dirname, './resolvers/**/*.{ts,js}'),
        path.join(__dirname, './generated/typegraphql-prisma/*.{ts,js}'),
      ],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      prisma,
    }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

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
