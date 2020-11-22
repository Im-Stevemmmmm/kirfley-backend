import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Comment } from "../models/Comment";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: undefined,
})
export class Post {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  content!: string;

  creator?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  creatorId!: number;

  comments?: Comment[] | null;
}
