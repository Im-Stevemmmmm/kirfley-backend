import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { FindManyPostArgs } from "./args/FindManyPostArgs";

@TypeGraphQL.Resolver(_of => Post)
export class FindManyPostResolver {
    @TypeGraphQL.Query(_returns => [Post], {
        nullable: false,
        description: undefined,
    })
    async posts(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: FindManyPostArgs
    ): Promise<Post[]> {
        return ctx.prisma.post.findMany(args);
    }
}
