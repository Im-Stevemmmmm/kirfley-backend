import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCommentArgs } from "./args/AggregateCommentArgs";
import { Comment } from "../../../models/Comment";
import { AggregateComment } from "../../outputs/AggregateComment";

@TypeGraphQL.Resolver(_of => Comment)
export class AggregateCommentResolver {
  @TypeGraphQL.Query(_returns => AggregateComment, {
    nullable: false,
    description: undefined
  })
  async aggregateComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCommentArgs): Promise<AggregateComment> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          .filter(([key, value]) => !key.startsWith("_"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.comment.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
