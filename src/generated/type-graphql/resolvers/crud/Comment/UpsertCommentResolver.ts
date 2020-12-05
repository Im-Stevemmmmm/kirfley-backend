import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { UpsertCommentArgs } from "./args/UpsertCommentArgs";

@TypeGraphQL.Resolver((_of) => Comment)
export class UpsertCommentResolver {
    @TypeGraphQL.Mutation((_returns) => Comment, {
        nullable: false,
        description: undefined,
    })
    async upsertComment(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: UpsertCommentArgs
    ): Promise<Comment> {
        return ctx.prisma.comment.upsert(args);
    }
}
