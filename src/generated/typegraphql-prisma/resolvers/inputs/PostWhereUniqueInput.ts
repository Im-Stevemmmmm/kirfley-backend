import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class PostWhereUniqueInput {
    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined,
    })
    id?: number | undefined;
}
