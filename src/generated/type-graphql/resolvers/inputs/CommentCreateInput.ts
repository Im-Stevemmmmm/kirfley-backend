import * as TypeGraphQL from "type-graphql";
import { PostCreateOneWithoutCommentsInput } from "../inputs/PostCreateOneWithoutCommentsInput";
import { UserCreateOneWithoutCommentsInput } from "../inputs/UserCreateOneWithoutCommentsInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class CommentCreateInput {
    @TypeGraphQL.Field((_type) => String, {
        nullable: false,
        description: undefined,
    })
    content!: string;

    @TypeGraphQL.Field((_type) => UserCreateOneWithoutCommentsInput, {
        nullable: false,
        description: undefined,
    })
    user!: UserCreateOneWithoutCommentsInput;

    @TypeGraphQL.Field((_type) => PostCreateOneWithoutCommentsInput, {
        nullable: false,
        description: undefined,
    })
    post!: PostCreateOneWithoutCommentsInput;
}
