import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutCommentsInput } from "../inputs/UserCreateWithoutCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class UserCreateOrConnectWithoutcommentsInput {
    @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
        nullable: false,
        description: undefined,
    })
    where!: UserWhereUniqueInput;

    @TypeGraphQL.Field((_type) => UserCreateWithoutCommentsInput, {
        nullable: false,
        description: undefined,
    })
    create!: UserCreateWithoutCommentsInput;
}
