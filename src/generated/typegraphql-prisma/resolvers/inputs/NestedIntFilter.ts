import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class NestedIntFilter {
    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined,
    })
    equals?: number | undefined;

    @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true,
        description: undefined,
    })
    in?: number[] | undefined;

    @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true,
        description: undefined,
    })
    notIn?: number[] | undefined;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined,
    })
    lt?: number | undefined;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined,
    })
    lte?: number | undefined;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined,
    })
    gt?: number | undefined;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true,
        description: undefined,
    })
    gte?: number | undefined;

    @TypeGraphQL.Field(_type => NestedIntFilter, {
        nullable: true,
        description: undefined,
    })
    not?: NestedIntFilter | undefined;
}
