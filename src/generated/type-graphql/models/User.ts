import * as TypeGraphQL from "type-graphql";
import { Comment } from "../models/Comment";
import { Post } from "../models/Post";

@TypeGraphQL.ObjectType({
    isAbstract: true,
    description: undefined,
    simpleResolvers: undefined,
})
export class User {
    @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
        nullable: false,
        description: undefined,
    })
    id!: number;

    @TypeGraphQL.Field((_type) => String, {
        nullable: false,
        description: undefined,
    })
    username!: string;

    @TypeGraphQL.Field((_type) => String, {
        nullable: false,
        description: undefined,
    })
    email!: string;

    @TypeGraphQL.Field((_type) => String, {
        nullable: false,
        description: undefined,
    })
    password!: string;

    @TypeGraphQL.Field((_type) => Date, {
        nullable: false,
        description: undefined,
    })
    dateOfBirth!: Date;

    posts?: Post[] | null;

    comments?: Comment[] | null;
}
