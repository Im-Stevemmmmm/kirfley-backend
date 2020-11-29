import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { UpdateCommentArgs } from "./args/UpdateCommentArgs";

@TypeGraphQL.Resolver(_of => Comment)
export class UpdateCommentResolver {
    @TypeGraphQL.Mutation(_returns => Comment, {
        nullable: true,
        description: undefined,
    })
    async updateComment(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: UpdateCommentArgs
    ): Promise<Comment | null> {
        return ctx.prisma.comment.update(args);
    }
}
