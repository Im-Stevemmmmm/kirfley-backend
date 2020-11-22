import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CommentCreateInput } from "../../../inputs/CommentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCommentArgs {
  @TypeGraphQL.Field(_type => CommentCreateInput, { nullable: false })
  data!: CommentCreateInput;
}
