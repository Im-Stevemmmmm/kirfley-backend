import * as TypeGraphQL from "type-graphql";
import { CommentCreateOrConnectWithoutuserInput } from "../inputs/CommentCreateOrConnectWithoutuserInput";
import { CommentCreateWithoutUserInput } from "../inputs/CommentCreateWithoutUserInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class CommentCreateManyWithoutUserInput {
    @TypeGraphQL.Field((_type) => [CommentCreateWithoutUserInput], {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutUserInput[] | undefined;

    @TypeGraphQL.Field((_type) => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: CommentWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field((_type) => [CommentCreateOrConnectWithoutuserInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?: CommentCreateOrConnectWithoutuserInput[] | undefined;
}
