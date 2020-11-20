import { Field, InputType, ObjectType } from 'type-graphql';
import { User } from '../generated/typegraphql-prisma';

@ObjectType()
class Error {
  @Field()
  message: string;

  @Field()
  target?: string;
}

@ObjectType()
export class UserResponse {
  @Field({ nullable: true })
  user?: User;

  @Field({ nullable: true })
  successful?: boolean;

  @Field(() => Error, { nullable: true })
  error?: Error;
}

@InputType()
export class UserInput {
  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;
}
