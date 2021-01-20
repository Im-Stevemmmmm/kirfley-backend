import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { UsersModule } from "./resources/users/users.module";
import { AppContext } from "./utils/app-context";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req, res }): AppContext => ({
        req,
        res,
      }),
      cors: false,
    }),
    UsersModule,
  ],
})
export class AppModule {}
