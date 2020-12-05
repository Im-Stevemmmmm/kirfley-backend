import * as TypeGraphQL from "type-graphql";
import { UserCreateOneWithoutCommentsInput } from "../inputs/UserCreateOneWithoutCommentsInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class CommentCreateWithoutPostInput {
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
}
