import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostUpdateWithoutCommentsInput } from "../inputs/PostUpdateWithoutCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutCommentsInput, {
    nullable: false,
    description: undefined
  })
  update!: PostUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutCommentsInput, {
    nullable: false,
    description: undefined
  })
  create!: PostCreateWithoutCommentsInput;
}
