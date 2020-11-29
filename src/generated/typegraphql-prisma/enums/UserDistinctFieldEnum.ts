import * as TypeGraphQL from "type-graphql";

export enum UserDistinctFieldEnum {
    id = "id",
    username = "username",
    email = "email",
    password = "password",
}
TypeGraphQL.registerEnumType(UserDistinctFieldEnum, {
    name: "UserDistinctFieldEnum",
    description: undefined,
});
