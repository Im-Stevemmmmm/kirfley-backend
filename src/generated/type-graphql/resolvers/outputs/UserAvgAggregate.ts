import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType({
    isAbstract: true,
    description: undefined,
    simpleResolvers: undefined,
})
export class UserAvgAggregate {
    @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
        nullable: false,
        description: undefined,
    })
    id!: number;
}
