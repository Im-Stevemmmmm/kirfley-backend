import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../user.model";

@ObjectType()
class AuthError {
    @Field()
    field: string;

    @Field()
    message: string;
}

@ObjectType()
export class AuthResponse {
    @Field()
    user?: User;

    @Field()
    successful: boolean;

    @Field({ nullable: true })
    error?: AuthError;
}
