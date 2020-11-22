import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { PostUpdateOneRequiredWithoutCommentsInput } from "../inputs/PostUpdateOneRequiredWithoutCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentUpdateInput {
  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutCommentsInput, {
    nullable: true,
    description: undefined
  })
  post?: PostUpdateOneRequiredWithoutCommentsInput | undefined;
}
