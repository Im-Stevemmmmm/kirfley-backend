import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { CreatePostArgs } from "./args/CreatePostArgs";

@TypeGraphQL.Resolver((_of) => Post)
export class CreatePostResolver {
    @TypeGraphQL.Mutation((_returns) => Post, {
        nullable: false,
        description: undefined,
    })
    async createPost(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: CreatePostArgs
    ): Promise<Post> {
        return ctx.prisma.post.create(args);
    }
}
