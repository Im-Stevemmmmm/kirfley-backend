import { ArgsType, Field, InputType } from "type-graphql";
import { User } from "./user-model";

export enum InputField {
    USERNAME_OR_EMAIL = "usernameOrEmail",
    USERNAME = "username",
    EMAIL = "email",
    PASSWORD = "password",
}

@InputType()
export class RegisterUserInput implements Partial<User> {
    @Field()
    year: number;

    @Field()
    month: number;

    @Field()
    day: number;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    password: string;
}

@ArgsType()
export class CheckFieldAvailabilityArgs {
    @Field(() => InputField)
    field: InputField;

    @Field()
    value: string;
}

@ArgsType()
export class LoginArgs {
    @Field()
    usernameOrEmail: string;

    @Field()
    password: string;
}
