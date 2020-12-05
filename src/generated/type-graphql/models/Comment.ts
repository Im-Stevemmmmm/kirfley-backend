import * as TypeGraphQL from "type-graphql";
import { Post } from "../models/Post";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
    isAbstract: true,
    description: undefined,
    simpleResolvers: undefined,
})
export class Comment {
    @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
        nullable: false,
        description: undefined,
    })
    id!: number;

    @TypeGraphQL.Field((_type) => String, {
        nullable: false,
        description: undefined,
    })
    content!: string;

    user?: User;

    post?: Post;

    @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
        nullable: false,
        description: undefined,
    })
    postId!: number;

    @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
        nullable: false,
        description: undefined,
    })
    userId!: number;
}
