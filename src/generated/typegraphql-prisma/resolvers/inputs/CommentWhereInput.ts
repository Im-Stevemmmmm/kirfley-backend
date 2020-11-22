import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentWhereInput {
  @TypeGraphQL.Field(_type => [CommentWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CommentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CommentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CommentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true,
    description: undefined
  })
  post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  postId?: IntFilter | undefined;
}
