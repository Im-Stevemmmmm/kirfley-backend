import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { BatchPayload } from "../../outputs/BatchPayload";
import { UpdateManyCommentArgs } from "./args/UpdateManyCommentArgs";

@TypeGraphQL.Resolver(_of => Comment)
export class UpdateManyCommentResolver {
    @TypeGraphQL.Mutation(_returns => BatchPayload, {
        nullable: false,
        description: undefined,
    })
    async updateManyComment(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: UpdateManyCommentArgs
    ): Promise<BatchPayload> {
        return ctx.prisma.comment.updateMany(args);
    }
}
