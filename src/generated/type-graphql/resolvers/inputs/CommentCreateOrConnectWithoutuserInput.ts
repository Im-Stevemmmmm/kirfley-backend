import * as TypeGraphQL from "type-graphql";
import { CommentCreateWithoutUserInput } from "../inputs/CommentCreateWithoutUserInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class CommentCreateOrConnectWithoutuserInput {
    @TypeGraphQL.Field((_type) => CommentWhereUniqueInput, {
        nullable: false,
        description: undefined,
    })
    where!: CommentWhereUniqueInput;

    @TypeGraphQL.Field((_type) => CommentCreateWithoutUserInput, {
        nullable: false,
        description: undefined,
    })
    create!: CommentCreateWithoutUserInput;
}
