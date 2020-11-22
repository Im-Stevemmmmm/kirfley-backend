import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostWhereInput {
  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true,
    description: undefined
  })
  creator?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  creatorId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true,
    description: undefined
  })
  comments?: CommentListRelationFilter | undefined;
}
