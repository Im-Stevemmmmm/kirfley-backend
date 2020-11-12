import { prop } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export default class User {
  @prop()
  @Field()
  id?: string;

  @prop()
  @Field()
  email?: string;

  @prop()
  @Field()
  password?: string;
}
