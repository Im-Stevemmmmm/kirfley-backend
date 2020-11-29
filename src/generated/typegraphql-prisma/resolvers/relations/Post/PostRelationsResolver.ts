import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { PostCommentsArgs } from "./args/PostCommentsArgs";

@TypeGraphQL.Resolver(_of => Post)
export class PostRelationsResolver {
    @TypeGraphQL.FieldResolver(_type => User, {
        nullable: false,
        description: undefined,
    })
    async creator(
        @TypeGraphQL.Root() post: Post,
        @TypeGraphQL.Ctx() ctx: any
    ): Promise<User> {
        return ctx.prisma.post
            .findOne({
                where: {
                    id: post.id,
                },
            })
            .creator({});
    }

    @TypeGraphQL.FieldResolver(_type => [Comment], {
        nullable: true,
        description: undefined,
    })
    async comments(
        @TypeGraphQL.Root() post: Post,
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: PostCommentsArgs
    ): Promise<Comment[] | null> {
        return ctx.prisma.post
            .findOne({
                where: {
                    id: post.id,
                },
            })
            .comments(args);
    }
}
