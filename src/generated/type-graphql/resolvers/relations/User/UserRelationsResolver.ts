import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";

@TypeGraphQL.Resolver((_of) => User)
export class UserRelationsResolver {
    @TypeGraphQL.FieldResolver((_type) => [Post], {
        nullable: true,
        description: undefined,
    })
    async posts(
        @TypeGraphQL.Root() user: User,
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: UserPostsArgs
    ): Promise<Post[] | null> {
        return ctx.prisma.user
            .findUnique({
                where: {
                    id: user.id,
                },
            })
            .posts(args);
    }

    @TypeGraphQL.FieldResolver((_type) => [Comment], {
        nullable: true,
        description: undefined,
    })
    async comments(
        @TypeGraphQL.Root() user: User,
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: UserCommentsArgs
    ): Promise<Comment[] | null> {
        return ctx.prisma.user
            .findUnique({
                where: {
                    id: user.id,
                },
            })
            .comments(args);
    }
}
