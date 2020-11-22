import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Post } from "../models/Post";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: undefined,
})
export class Comment {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  post?: Post;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  postId!: number;
}
