import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { FindManyCommentArgs } from "./args/FindManyCommentArgs";

@TypeGraphQL.Resolver((_of) => Comment)
export class FindManyCommentResolver {
    @TypeGraphQL.Query((_returns) => [Comment], {
        nullable: false,
        description: undefined,
    })
    async comments(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: FindManyCommentArgs
    ): Promise<Comment[]> {
        return ctx.prisma.comment.findMany(args);
    }
}
