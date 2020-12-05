import * as TypeGraphQL from "type-graphql";
import { PostCreateOneWithoutCommentsInput } from "../inputs/PostCreateOneWithoutCommentsInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class CommentCreateWithoutUserInput {
    @TypeGraphQL.Field((_type) => String, {
        nullable: false,
        description: undefined,
    })
    content!: string;

    @TypeGraphQL.Field((_type) => PostCreateOneWithoutCommentsInput, {
        nullable: false,
        description: undefined,
    })
    post!: PostCreateOneWithoutCommentsInput;
}
