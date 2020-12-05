import * as TypeGraphQL from "type-graphql";
import { CommentCreateOrConnectWithoutpostInput } from "../inputs/CommentCreateOrConnectWithoutpostInput";
import { CommentCreateWithoutPostInput } from "../inputs/CommentCreateWithoutPostInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class CommentCreateManyWithoutPostInput {
    @TypeGraphQL.Field((_type) => [CommentCreateWithoutPostInput], {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutPostInput[] | undefined;

    @TypeGraphQL.Field((_type) => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: CommentWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field((_type) => [CommentCreateOrConnectWithoutpostInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?: CommentCreateOrConnectWithoutpostInput[] | undefined;
}
