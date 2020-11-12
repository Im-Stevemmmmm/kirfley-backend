import { getModelForClass, prop } from '@typegoose/typegoose';
import { IsEmail, Length, Matches } from 'class-validator';
import { connection } from 'mongoose';
import { Field, InputType, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @prop()
  @Field()
  _id?: string;

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
  @Field()
  user?: User;

  @Field({ nullable: true })
  successful?: boolean;

  @Field(() => Error, { nullable: true })
  error?: Error;
}

@InputType()
export class UserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  @Length(6, 26)
  @Matches(/^(?=.*\d{2})(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/)
  password?: string;
}

export const UserModel = getModelForClass(User, {
  existingConnection: connection.useDb('userdata'),
  schemaOptions: {
    collection: 'users',
  },
});
