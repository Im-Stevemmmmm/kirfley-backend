import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { BatchPayload } from "../../outputs/BatchPayload";
import { UpdateManyPostArgs } from "./args/UpdateManyPostArgs";

@TypeGraphQL.Resolver(_of => Post)
export class UpdateManyPostResolver {
    @TypeGraphQL.Mutation(_returns => BatchPayload, {
        nullable: false,
        description: undefined,
    })
    async updateManyPost(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: UpdateManyPostArgs
    ): Promise<BatchPayload> {
        return ctx.prisma.post.updateMany(args);
    }
}
