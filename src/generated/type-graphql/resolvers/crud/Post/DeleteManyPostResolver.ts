import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { BatchPayload } from "../../outputs/BatchPayload";
import { DeleteManyPostArgs } from "./args/DeleteManyPostArgs";

@TypeGraphQL.Resolver((_of) => Post)
export class DeleteManyPostResolver {
    @TypeGraphQL.Mutation((_returns) => BatchPayload, {
        nullable: false,
        description: undefined,
    })
    async deleteManyPost(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: DeleteManyPostArgs
    ): Promise<BatchPayload> {
        return ctx.prisma.post.deleteMany(args);
    }
}
