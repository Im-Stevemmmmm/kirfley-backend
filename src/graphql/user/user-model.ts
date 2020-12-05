import { Field, ObjectType } from "type-graphql";
import { User as GeneratedUser } from "../../generated/type-graphql";
import { InputField } from "./user-params";

@ObjectType()
class AuthError {
    @Field(() => InputField)
    field: InputField;

    @Field()
    message: string;
}

@ObjectType()
export class AuthResponse {
    @Field()
    successful: boolean;

    @Field({ nullable: true })
    error?: AuthError;
}

export const User = GeneratedUser;
export type User = InstanceType<typeof GeneratedUser>;
