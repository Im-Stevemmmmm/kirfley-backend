import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@ObjectType()
@Schema({ collection: "users" })
export class User {
  @Field()
  @Prop()
  id: number;

  @Field()
  @Prop()
  username: string;

  @Field()
  @Prop()
  email: string;

  @Field()
  @Prop()
  password: string;

  @Field()
  @Prop()
  dateOfBirth: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
