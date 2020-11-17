import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import UserResolver from './resolvers/user-resolver';

const main = async () => {
  dotenv.config();

  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.2qdh1.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  const app = express();
  app.use(cors());

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({ app });

  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`server started on localhost:${port}`);
  });
};

main().catch(err => console.log(err));
