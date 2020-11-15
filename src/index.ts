import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import UserResolver from './resolvers/user-resolver';

async function main() {
  await mongoose.connect(
    'mongodb+srv://EstebanGarcia:e3ddXRsxYxhdap4@maincluster.2qdh1.mongodb.net/test?retryWrites=true&w=majority',
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

  app.listen(4000, () => {
    console.log('Server started on localhost:4000');
  });
}

main().catch(err => console.log(err));
