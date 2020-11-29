import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.ObjectType({
    isAbstract: true,
    description: undefined,
    simpleResolvers: undefined,
})
export class CommentMaxAggregate {
    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined,
    })
    id!: number;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined,
    })
    postId!: number;
}
