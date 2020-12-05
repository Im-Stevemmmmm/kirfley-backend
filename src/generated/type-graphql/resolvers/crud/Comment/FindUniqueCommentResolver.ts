import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { FindUniqueCommentArgs } from "./args/FindUniqueCommentArgs";

@TypeGraphQL.Resolver((_of) => Comment)
export class FindUniqueCommentResolver {
    @TypeGraphQL.Query((_returns) => Comment, {
        nullable: true,
        description: undefined,
    })
    async comment(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: FindUniqueCommentArgs
    ): Promise<Comment | null> {
        return ctx.prisma.comment.findUnique(args);
    }
}
