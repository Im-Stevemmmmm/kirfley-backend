import * as TypeGraphQL from "type-graphql";

export enum CommentDistinctFieldEnum {
    id = "id",
    content = "content",
    postId = "postId",
    userId = "userId",
}
TypeGraphQL.registerEnumType(CommentDistinctFieldEnum, {
    name: "CommentDistinctFieldEnum",
    description: undefined,
});
