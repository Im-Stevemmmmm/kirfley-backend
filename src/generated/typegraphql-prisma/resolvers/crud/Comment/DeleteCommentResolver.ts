import * as TypeGraphQL from "type-graphql";
import { DeleteCommentArgs } from "./args/DeleteCommentArgs";
import { Comment } from "../../../models/Comment";

@TypeGraphQL.Resolver(_of => Comment)
export class DeleteCommentResolver {
  @TypeGraphQL.Mutation(_returns => Comment, {
    nullable: true,
    description: undefined
  })
  async deleteComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCommentArgs): Promise<Comment | null> {
    return ctx.prisma.comment.delete(args);
  }
}
