import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class RegisterUserDto {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
