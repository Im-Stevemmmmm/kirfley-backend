import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LoginDto {
    @Field()
    usernameOrEmail: string;

    @Field()
    password: string;
}
