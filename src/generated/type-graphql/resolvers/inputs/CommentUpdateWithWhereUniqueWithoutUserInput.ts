import * as TypeGraphQL from "type-graphql";
import { CommentUpdateWithoutUserInput } from "../inputs/CommentUpdateWithoutUserInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class CommentUpdateWithWhereUniqueWithoutUserInput {
    @TypeGraphQL.Field((_type) => CommentWhereUniqueInput, {
        nullable: false,
        description: undefined,
    })
    where!: CommentWhereUniqueInput;

    @TypeGraphQL.Field((_type) => CommentUpdateWithoutUserInput, {
        nullable: false,
        description: undefined,
    })
    data!: CommentUpdateWithoutUserInput;
}
