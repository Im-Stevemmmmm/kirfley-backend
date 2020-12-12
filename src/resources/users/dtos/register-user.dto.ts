import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class RegisterUserDto {
    @Field(() => Int)
    year: number;

    @Field(() => Int)
    month: number;

    @Field(() => Int)
    day: number;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    password: string;
}
