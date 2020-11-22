import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { PostCreateWithoutCreatorInput } from "../inputs/PostCreateWithoutCreatorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateOrConnectWithoutcreatorInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutCreatorInput, {
    nullable: false,
    description: undefined
  })
  create!: PostCreateWithoutCreatorInput;
}
