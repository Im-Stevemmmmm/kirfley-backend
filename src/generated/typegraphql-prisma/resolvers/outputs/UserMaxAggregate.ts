import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType({
    isAbstract: true,
    description: undefined,
    simpleResolvers: undefined,
})
export class UserMaxAggregate {
    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false,
        description: undefined,
    })
    id!: number;
}
