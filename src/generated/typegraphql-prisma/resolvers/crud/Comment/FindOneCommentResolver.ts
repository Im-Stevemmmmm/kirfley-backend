import * as TypeGraphQL from "type-graphql";
import { FindOneCommentArgs } from "./args/FindOneCommentArgs";
import { Comment } from "../../../models/Comment";

@TypeGraphQL.Resolver(_of => Comment)
export class FindOneCommentResolver {
  @TypeGraphQL.Query(_returns => Comment, {
    nullable: true,
    description: undefined
  })
  async comment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneCommentArgs): Promise<Comment | null> {
    return ctx.prisma.comment.findOne(args);
  }
}
