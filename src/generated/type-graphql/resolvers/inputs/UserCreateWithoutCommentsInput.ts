import * as TypeGraphQL from "type-graphql";
import { PostCreateManyWithoutCreatorInput } from "../inputs/PostCreateManyWithoutCreatorInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class UserCreateWithoutCommentsInput {
    @TypeGraphQL.Field((_type) => String, {
        nullable: false,
        description: undefined,
    })
    username!: string;

    @TypeGraphQL.Field((_type) => String, {
        nullable: false,
        description: undefined,
    })
    email!: string;

    @TypeGraphQL.Field((_type) => String, {
        nullable: false,
        description: undefined,
    })
    password!: string;

    @TypeGraphQL.Field((_type) => Date, {
        nullable: false,
        description: undefined,
    })
    dateOfBirth!: Date;

    @TypeGraphQL.Field((_type) => PostCreateManyWithoutCreatorInput, {
        nullable: true,
        description: undefined,
    })
    posts?: PostCreateManyWithoutCreatorInput | undefined;
}
