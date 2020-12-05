import * as TypeGraphQL from "type-graphql";
import { CommentUpdateWithoutPostInput } from "../inputs/CommentUpdateWithoutPostInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class CommentUpdateWithWhereUniqueWithoutPostInput {
    @TypeGraphQL.Field((_type) => CommentWhereUniqueInput, {
        nullable: false,
        description: undefined,
    })
    where!: CommentWhereUniqueInput;

    @TypeGraphQL.Field((_type) => CommentUpdateWithoutPostInput, {
        nullable: false,
        description: undefined,
    })
    data!: CommentUpdateWithoutPostInput;
}
