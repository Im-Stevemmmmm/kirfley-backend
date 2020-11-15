import { getModelForClass, prop } from '@typegoose/typegoose';
import { connection } from 'mongoose';
import { Field, InputType, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @prop()
  @Field()
  _id?: string;

  @prop()
  @Field()
  username?: string;

  @prop()
  @Field()
  email?: string;

  @prop()
  @Field()
  password?: string;
}

@ObjectType()
class Error {
  @Field()
  message: string;

  @Field()
  target?: string;
}

@ObjectType()
export class UserResponse {
  @Field(() => User, { nullable: true })
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

export const UserModel = getModelForClass(User, {
  existingConnection: connection.useDb('userdata'),
  schemaOptions: {
    collection: 'users',
  },
});
