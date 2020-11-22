import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentAvgAggregate } from "../outputs/CommentAvgAggregate";
import { CommentMaxAggregate } from "../outputs/CommentMaxAggregate";
import { CommentMinAggregate } from "../outputs/CommentMinAggregate";
import { CommentSumAggregate } from "../outputs/CommentSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: undefined,
})
export class AggregateComment {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count!: number;

  @TypeGraphQL.Field(_type => CommentAvgAggregate, {
    nullable: true,
    description: undefined
  })
  avg!: CommentAvgAggregate | null;

  @TypeGraphQL.Field(_type => CommentSumAggregate, {
    nullable: true,
    description: undefined
  })
  sum!: CommentSumAggregate | null;

  @TypeGraphQL.Field(_type => CommentMinAggregate, {
    nullable: true,
    description: undefined
  })
  min!: CommentMinAggregate | null;

  @TypeGraphQL.Field(_type => CommentMaxAggregate, {
    nullable: true,
    description: undefined
  })
  max!: CommentMaxAggregate | null;
}
