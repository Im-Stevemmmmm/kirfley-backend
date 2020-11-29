import { GraphQLResolveInfo } from 'graphql';
import graphqlFields from 'graphql-fields';
import * as TypeGraphQL from 'type-graphql';
import { User } from '../../../models/User';
import { AggregateUser } from '../../outputs/AggregateUser';
import { AggregateUserArgs } from './args/AggregateUserArgs';

@TypeGraphQL.Resolver(_of => User)
export class AggregateUserResolver {
    @TypeGraphQL.Query(_returns => AggregateUser, {
        nullable: false,
        description: undefined,
    })
    async aggregateUser(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Info() info: GraphQLResolveInfo,
        @TypeGraphQL.Args() args: AggregateUserArgs
    ): Promise<AggregateUser> {
        function transformFields(
            fields: Record<string, any>
        ): Record<string, any> {
            return Object.fromEntries(
                Object.entries(fields)
                    .filter(([key, value]) => !key.startsWith('_'))
                    .map<[string, any]>(([key, value]) => {
                        if (Object.keys(value).length === 0) {
                            return [key, true];
                        }
                        return [key, transformFields(value)];
                    })
            );
        }

        return ctx.prisma.user.aggregate({
            ...args,
            ...transformFields(graphqlFields(info as any)),
        });
    }
}
