import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutcommentsInput } from "../inputs/UserCreateOrConnectWithoutcommentsInput";
import { UserCreateWithoutCommentsInput } from "../inputs/UserCreateWithoutCommentsInput";
import { UserUpdateWithoutCommentsInput } from "../inputs/UserUpdateWithoutCommentsInput";
import { UserUpsertWithoutCommentsInput } from "../inputs/UserUpsertWithoutCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class UserUpdateOneRequiredWithoutCommentsInput {
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

    @TypeGraphQL.Field((_type) => UserUpdateWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutCommentsInput | undefined;

    @TypeGraphQL.Field((_type) => UserUpsertWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    upsert?: UserUpsertWithoutCommentsInput | undefined;

    @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutcommentsInput, {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?: UserCreateOrConnectWithoutcommentsInput | undefined;
}
