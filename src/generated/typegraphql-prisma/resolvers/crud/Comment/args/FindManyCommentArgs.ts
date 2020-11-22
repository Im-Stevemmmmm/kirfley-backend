import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CommentOrderByInput } from "../../../inputs/CommentOrderByInput";
import { CommentWhereInput } from "../../../inputs/CommentWhereInput";
import { CommentWhereUniqueInput } from "../../../inputs/CommentWhereUniqueInput";
import { CommentDistinctFieldEnum } from "../../../../enums/CommentDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCommentArgs {
  @TypeGraphQL.Field(_type => CommentWhereInput, { nullable: true })
  where?: CommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CommentOrderByInput], { nullable: true })
  orderBy?: CommentOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, { nullable: true })
  cursor?: CommentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CommentDistinctFieldEnum], { nullable: true })
  distinct?: Array<"id" | "content" | "postId"> | undefined;
}
