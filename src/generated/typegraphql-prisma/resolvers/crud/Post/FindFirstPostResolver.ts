import * as TypeGraphQL from 'type-graphql';
import { Post } from '../../../models/Post';
import { FindFirstPostArgs } from './args/FindFirstPostArgs';

@TypeGraphQL.Resolver(_of => Post)
export class FindFirstPostResolver {
    @TypeGraphQL.Query(_returns => Post, {
        nullable: true,
        description: undefined,
    })
    async findFirstPost(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: FindFirstPostArgs
    ): Promise<Post | null> {
        return ctx.prisma.post.findFirst(args);
    }
}
