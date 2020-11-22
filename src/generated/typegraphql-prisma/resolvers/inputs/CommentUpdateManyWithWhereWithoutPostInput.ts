import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyMutationInput } from "../inputs/CommentUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field(_type => CommentScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: CommentScalarWhereInput;

  @TypeGraphQL.Field(_type => CommentUpdateManyMutationInput, {
    nullable: false,
    description: undefined
  })
  data!: CommentUpdateManyMutationInput;
}
