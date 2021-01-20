import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./resources/users/users.module";
import { ServerContext } from "./utils/server-context";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.CONNECTION_STRING),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req, res }): ServerContext => ({
        req,
        res,
      }),
      cors: false,
    }),
    UsersModule,
  ],
})
export class AppModule {}
