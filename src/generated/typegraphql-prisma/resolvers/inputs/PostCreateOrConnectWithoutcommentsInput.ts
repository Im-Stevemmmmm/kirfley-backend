import * as TypeGraphQL from "type-graphql";
import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class PostCreateOrConnectWithoutcommentsInput {
    @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
        nullable: false,
        description: undefined,
    })
    where!: PostWhereUniqueInput;

    @TypeGraphQL.Field(_type => PostCreateWithoutCommentsInput, {
        nullable: false,
        description: undefined,
    })
    create!: PostCreateWithoutCommentsInput;
}
