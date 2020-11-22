import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentScalarWhereInput {
  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CommentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CommentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CommentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  postId?: IntFilter | undefined;
}
