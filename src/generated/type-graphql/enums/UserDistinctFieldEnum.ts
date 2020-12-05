import * as TypeGraphQL from "type-graphql";

export enum UserDistinctFieldEnum {
    id = "id",
    username = "username",
    email = "email",
    password = "password",
    dateOfBirth = "dateOfBirth",
}
TypeGraphQL.registerEnumType(UserDistinctFieldEnum, {
    name: "UserDistinctFieldEnum",
    description: undefined,
});
