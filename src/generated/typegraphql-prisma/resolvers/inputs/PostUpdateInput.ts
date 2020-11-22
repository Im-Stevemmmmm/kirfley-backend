import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentUpdateManyWithoutPostInput } from "../inputs/CommentUpdateManyWithoutPostInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPostsInput } from "../inputs/UserUpdateOneRequiredWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  creator?: UserUpdateOneRequiredWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutPostInput, {
    nullable: true,
    description: undefined
  })
  comments?: CommentUpdateManyWithoutPostInput | undefined;
}
