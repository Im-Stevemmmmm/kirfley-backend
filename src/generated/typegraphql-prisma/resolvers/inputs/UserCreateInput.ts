import * as TypeGraphQL from "type-graphql";
import { PostCreateManyWithoutCreatorInput } from "../inputs/PostCreateManyWithoutCreatorInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class UserCreateInput {
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

    @TypeGraphQL.Field(_type => PostCreateManyWithoutCreatorInput, {
        nullable: true,
        description: undefined,
    })
    posts?: PostCreateManyWithoutCreatorInput | undefined;
}
