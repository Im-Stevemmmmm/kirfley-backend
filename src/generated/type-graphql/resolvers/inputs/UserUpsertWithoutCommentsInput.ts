import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutCommentsInput } from "../inputs/UserCreateWithoutCommentsInput";
import { UserUpdateWithoutCommentsInput } from "../inputs/UserUpdateWithoutCommentsInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class UserUpsertWithoutCommentsInput {
    @TypeGraphQL.Field((_type) => UserUpdateWithoutCommentsInput, {
        nullable: false,
        description: undefined,
    })
    update!: UserUpdateWithoutCommentsInput;

    @TypeGraphQL.Field((_type) => UserCreateWithoutCommentsInput, {
        nullable: false,
        description: undefined,
    })
    create!: UserCreateWithoutCommentsInput;
}
