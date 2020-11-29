import * as TypeGraphQL from 'type-graphql';
import { PostWhereInput } from '../inputs/PostWhereInput';

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class PostRelationFilter {
    @TypeGraphQL.Field(_type => PostWhereInput, {
        nullable: true,
        description: undefined,
    })
    is?: PostWhereInput | undefined;

    @TypeGraphQL.Field(_type => PostWhereInput, {
        nullable: true,
        description: undefined,
    })
    isNot?: PostWhereInput | undefined;
}
