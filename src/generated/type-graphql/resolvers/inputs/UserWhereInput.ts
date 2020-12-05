import * as TypeGraphQL from "type-graphql";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class UserWhereInput {
    @TypeGraphQL.Field((_type) => [UserWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: UserWhereInput[] | undefined;

    @TypeGraphQL.Field((_type) => [UserWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: UserWhereInput[] | undefined;

    @TypeGraphQL.Field((_type) => [UserWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: UserWhereInput[] | undefined;

    @TypeGraphQL.Field((_type) => IntFilter, {
        nullable: true,
        description: undefined,
    })
    id?: IntFilter | undefined;

    @TypeGraphQL.Field((_type) => StringFilter, {
        nullable: true,
        description: undefined,
    })
    username?: StringFilter | undefined;

    @TypeGraphQL.Field((_type) => StringFilter, {
        nullable: true,
        description: undefined,
    })
    email?: StringFilter | undefined;

    @TypeGraphQL.Field((_type) => StringFilter, {
        nullable: true,
        description: undefined,
    })
    password?: StringFilter | undefined;

    @TypeGraphQL.Field((_type) => DateTimeFilter, {
        nullable: true,
        description: undefined,
    })
    dateOfBirth?: DateTimeFilter | undefined;

    @TypeGraphQL.Field((_type) => PostListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    posts?: PostListRelationFilter | undefined;

    @TypeGraphQL.Field((_type) => CommentListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentListRelationFilter | undefined;
}
