import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CommentUpdateManyMutationInput } from "../../../inputs/CommentUpdateManyMutationInput";
import { CommentWhereInput } from "../../../inputs/CommentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCommentArgs {
  @TypeGraphQL.Field(_type => CommentUpdateManyMutationInput, { nullable: false })
  data!: CommentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CommentWhereInput, { nullable: true })
  where?: CommentWhereInput | undefined;
}
