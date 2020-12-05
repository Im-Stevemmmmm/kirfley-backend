import * as TypeGraphQL from "type-graphql";
import { CommentCreateManyWithoutPostInput } from "../inputs/CommentCreateManyWithoutPostInput";
import { UserCreateOneWithoutPostsInput } from "../inputs/UserCreateOneWithoutPostsInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class PostCreateInput {
    @TypeGraphQL.Field((_type) => String, {
        nullable: true,
        description: undefined,
    })
    uuid?: string | undefined;

    @TypeGraphQL.Field((_type) => String, {
        nullable: false,
        description: undefined,
    })
    content!: string;

    @TypeGraphQL.Field((_type) => UserCreateOneWithoutPostsInput, {
        nullable: false,
        description: undefined,
    })
    creator!: UserCreateOneWithoutPostsInput;

    @TypeGraphQL.Field((_type) => CommentCreateManyWithoutPostInput, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentCreateManyWithoutPostInput | undefined;
}
