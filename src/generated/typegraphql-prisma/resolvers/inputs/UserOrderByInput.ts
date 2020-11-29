import * as TypeGraphQL from 'type-graphql';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class UserOrderByInput {
    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true,
        description: undefined,
    })
    id?: 'asc' | 'desc' | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true,
        description: undefined,
    })
    username?: 'asc' | 'desc' | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true,
        description: undefined,
    })
    email?: 'asc' | 'desc' | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true,
        description: undefined,
    })
    password?: 'asc' | 'desc' | undefined;
}
