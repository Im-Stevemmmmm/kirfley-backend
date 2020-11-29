import * as TypeGraphQL from 'type-graphql';
import { User } from '../../../models/User';
import { BatchPayload } from '../../outputs/BatchPayload';
import { DeleteManyUserArgs } from './args/DeleteManyUserArgs';

@TypeGraphQL.Resolver(_of => User)
export class DeleteManyUserResolver {
    @TypeGraphQL.Mutation(_returns => BatchPayload, {
        nullable: false,
        description: undefined,
    })
    async deleteManyUser(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: DeleteManyUserArgs
    ): Promise<BatchPayload> {
        return ctx.prisma.user.deleteMany(args);
    }
}
