import * as TypeGraphQL from 'type-graphql';
import { User } from '../../../models/User';
import { UpdateUserArgs } from './args/UpdateUserArgs';

@TypeGraphQL.Resolver(_of => User)
export class UpdateUserResolver {
    @TypeGraphQL.Mutation(_returns => User, {
        nullable: true,
        description: undefined,
    })
    async updateUser(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: UpdateUserArgs
    ): Promise<User | null> {
        return ctx.prisma.user.update(args);
    }
}
