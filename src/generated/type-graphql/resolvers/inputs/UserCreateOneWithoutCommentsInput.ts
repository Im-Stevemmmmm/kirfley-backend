import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutcommentsInput } from "../inputs/UserCreateOrConnectWithoutcommentsInput";
import { UserCreateWithoutCommentsInput } from "../inputs/UserCreateWithoutCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class UserCreateOneWithoutCommentsInput {
    @TypeGraphQL.Field((_type) => UserCreateWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutCommentsInput | undefined;

    @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    connect?: UserWhereUniqueInput | undefined;

    @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutcommentsInput, {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?: UserCreateOrConnectWithoutcommentsInput | undefined;
}
