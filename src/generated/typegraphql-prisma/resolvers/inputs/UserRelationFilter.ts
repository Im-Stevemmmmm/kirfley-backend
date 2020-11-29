import * as TypeGraphQL from 'type-graphql';
import { UserWhereInput } from '../inputs/UserWhereInput';

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class UserRelationFilter {
    @TypeGraphQL.Field(_type => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    is?: UserWhereInput | undefined;

    @TypeGraphQL.Field(_type => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    isNot?: UserWhereInput | undefined;
}
