import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class UserCreateWithoutPostsInput {
    @TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    })
    username!: string;

    @TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    })
    email!: string;

    @TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined,
    })
    password!: string;
}
