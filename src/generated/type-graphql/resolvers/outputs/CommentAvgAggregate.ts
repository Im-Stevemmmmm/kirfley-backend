import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType({
    isAbstract: true,
    description: undefined,
    simpleResolvers: undefined,
})
export class CommentAvgAggregate {
    @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
        nullable: false,
        description: undefined,
    })
    id!: number;

    @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
        nullable: false,
        description: undefined,
    })
    postId!: number;

    @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
        nullable: false,
        description: undefined,
    })
    userId!: number;
}
