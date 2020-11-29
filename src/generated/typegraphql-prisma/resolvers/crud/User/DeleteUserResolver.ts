import * as TypeGraphQL from 'type-graphql';
import { User } from '../../../models/User';
import { DeleteUserArgs } from './args/DeleteUserArgs';

@TypeGraphQL.Resolver(_of => User)
export class DeleteUserResolver {
    @TypeGraphQL.Mutation(_returns => User, {
        nullable: true,
        description: undefined,
    })
    async deleteUser(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: DeleteUserArgs
    ): Promise<User | null> {
        return ctx.prisma.user.delete(args);
    }
}
