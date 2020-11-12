import { getModelForClass, prop } from '@typegoose/typegoose';
import { connection } from 'mongoose';
import { Field, ObjectType } from 'type-graphql';

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

export const UserModel = getModelForClass(User, {
  existingConnection: connection.useDb('userdata'),
});
