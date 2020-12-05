import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { FindUniquePostArgs } from "./args/FindUniquePostArgs";

@TypeGraphQL.Resolver((_of) => Post)
export class FindUniquePostResolver {
    @TypeGraphQL.Query((_returns) => Post, {
        nullable: true,
        description: undefined,
    })
    async post(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: FindUniquePostArgs
    ): Promise<Post | null> {
        return ctx.prisma.post.findUnique(args);
    }
}
