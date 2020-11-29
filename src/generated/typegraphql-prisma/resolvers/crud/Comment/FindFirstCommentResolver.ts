import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { FindFirstCommentArgs } from "./args/FindFirstCommentArgs";

@TypeGraphQL.Resolver(_of => Comment)
export class FindFirstCommentResolver {
    @TypeGraphQL.Query(_returns => Comment, {
        nullable: true,
        description: undefined,
    })
    async findFirstComment(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: FindFirstCommentArgs
    ): Promise<Comment | null> {
        return ctx.prisma.comment.findFirst(args);
    }
}
