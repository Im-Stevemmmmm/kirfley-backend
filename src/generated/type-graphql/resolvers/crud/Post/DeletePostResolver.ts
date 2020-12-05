import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { DeletePostArgs } from "./args/DeletePostArgs";

@TypeGraphQL.Resolver((_of) => Post)
export class DeletePostResolver {
    @TypeGraphQL.Mutation((_returns) => Post, {
        nullable: true,
        description: undefined,
    })
    async deletePost(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: DeletePostArgs
    ): Promise<Post | null> {
        return ctx.prisma.post.delete(args);
    }
}
